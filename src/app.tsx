import * as React from 'react';
import { SyntheticEvent, useCallback, useState } from 'react';
import { useFetch } from './hooks/use-fetch';
import { useArray } from './hooks/use-array';

export const App = (): JSX.Element => {
    const [query, setQuery] = useState('');
    const {
        value: filters,
        add: setFilter,
        remove: removeFilter,
        has: isFilterSelected
    } = useArray(['apple', 'orange', 'banana']);

    const { responseJson: items, isLoading, error } = useFetch(
        'http://localhost:3000',
        { query, filters },
        [query, filters],
        2000
    );

    const onQueryChanged = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;

        setQuery(value);
    }, []);

    const onFilterChanged = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
        const { checked, name } = event.currentTarget;
        if (checked) {
            setFilter(name);
        } else {
            removeFilter(name);
        }
    }, []);

    const keys = Object.keys(filters) as ['apple', 'orange', 'banana'];

    return (
        <>
            <input onChange={onQueryChanged}/>
            {items}
            {isLoading && 'loading'}
            {error && 'error'}
            {keys.map(key => <input name={key} type='checkbox' checked={isFilterSelected(key)} onChange={onFilterChanged}/>)}
        </>
    );
};
