import { useCallback, useState } from 'react';

interface Api<T> {
    value: Array<T>;
    add: (value: T) => void;
    remove: (value: T) => void;
    has: (value: T) => boolean;
}

export const useSet = <T>(initValue: Array<T>): Api<T> => {
    const [value, setValue] = useState(initValue);

    const add = useCallback((val: T) => {
        setValue(currentItems => Array.from(new Set([...currentItems, val])));
    }, []);

    const remove = useCallback((val: T) => {
        setValue(currentItems => currentItems.filter(item => item !== val));
    }, []);

    const has = useCallback((val: T) => value.includes(val), [value]);

    return {
        value,
        add,
        remove,
        has
    };
};
