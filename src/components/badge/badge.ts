import styled from 'styled-components';
import { memo } from 'react';

export const Badge = memo(styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.secondary};
    height: 39px;
    padding: 0 12px;
    border-radius: 100px;
    font-size: 24px;
`);
