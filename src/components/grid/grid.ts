import styled from 'styled-components';
import { memo } from 'react';

export const Grid = {
    Container: memo(styled.div<{ size: number }>`
        display: grid;
        grid-template-columns: repeat(${({ size }) => size}, 1fr);
    `),
    Cell: memo(styled.div<{ start: number, end: number }>`
        grid-column-start: ${({ start }) => start || 1};
        grid-column-end: ${({ end }) => end || 1};
    `)
};
