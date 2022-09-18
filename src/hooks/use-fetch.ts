import { DependencyList, useEffect, useState } from 'react';
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
    const [responseJson, setResponseJson] = useState<R>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect((): () => void => {
        const abortController = new AbortController();
        let isAborted = false;

        setError(undefined);
        setIsLoading(true);

        async function fetchData(): Promise<void> {
            try {
                const { signal } = abortController;
                const queryString = Object.keys(params)
                    .map(key => `${key}=${params[key]}`)
                    .join('&');

                console.log('fetch data', params);
                const res: R = await fetch(`${url}${queryString}`, { signal }).then(data => data.json());

                if (isAborted) {
                    return;
                }

                setResponseJson(res);
            } catch (e) {
                console.log('catch');
                if (isAborted) {
                    return;
                }

                setError(e);
            } finally {
                setIsLoading(false);
            }
        }

        const timeoutId = setTimeout(() => fetchData(), debounceDelay);

        return () => {
            clearTimeout(timeoutId);
            abortController.abort();
            isAborted = true;
        };
    }, deps);

    return { responseJson, isLoading, error };
}
