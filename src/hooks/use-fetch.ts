import { DependencyList, useEffect, useRef, useState } from 'react';
import { JsonData } from '../types/json';

interface Api<R> {
    responseJson?: R;
    error?: string;
    isLoading: boolean;
}

export function useFetch<R extends JsonData = JsonData>(
    url: string,
    params: Record<string, string | string[]>,
    deps: DependencyList,
    debounceDelay?: number
): Api<R> {
    const isFirstRender = useRef(true);

    const [responseJson, setResponseJson] = useState<R>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect((): () => void => {
        const abortController = new AbortController();
        let isAborted = false;

        async function fetchData(): Promise<void> {
            try {
                setError(undefined);
                setIsLoading(true);
                const { signal } = abortController;
                const queryString = Object.keys(params)
                    .filter(key => params[key]?.length)
                    .map(key => `${key}=${params[key]}`)
                    .join('&');

                const res: R = await fetch(`${url}?${queryString}`, { signal }).then(data => data.json());

                if (isAborted) {
                    return;
                }

                setResponseJson(res);
            } catch (e) {
                if (isAborted) {
                    return;
                }

                setError(e.toString());
            } finally {
                setIsLoading(false);
            }
        }

        let timeoutId: number | undefined;
        if (isFirstRender.current) {
            fetchData();
        } else {
            timeoutId = setTimeout(() => fetchData(), debounceDelay);
        }

        isFirstRender.current = false;

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            abortController.abort();
            isAborted = true;
        };
    }, deps);

    return { responseJson, isLoading, error };
}
