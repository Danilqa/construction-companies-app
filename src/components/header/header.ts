import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';
import * as React from 'react';

interface Props {
    isNotFirst?: boolean;
}

export const Header = React.memo(styled.h1<Props>`
    font-size: ${size(20)};
    margin-left: 6px;
    margin-bottom: ${size(Theme.sizeRatio * 8)};
    font-weight: bold;
`);
