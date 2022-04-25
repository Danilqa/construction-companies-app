import styled from 'styled-components';
import { memo } from 'react';

export const Footer = memo(styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`);
