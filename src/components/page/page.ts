import { memo } from 'react';
import styled from 'styled-components';

export const Page = {
    Container: memo(styled.div`
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 20px;
    `),
    Sidebar: memo(styled.div`
        width: 200px;
        height: 100%;
        flex-shrink: 0;
    `),
    Content: memo(styled.div`
        display: flex;
    `)
};
