import styled from 'styled-components';
import { memo } from 'react';

export const Typography = {
    Paragraph: memo(styled.span`
        font-size: 36px;
    `),
    Header: memo(styled.span`
        font-size: 60px;
    `),
    Title: memo(styled.div`
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    `),
    Caption: memo(styled.div`
        font-size: 16px;
    `)
};
