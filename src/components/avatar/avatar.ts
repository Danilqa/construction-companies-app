import styled from 'styled-components';
import { size } from '../../styles/mixins';
import * as React from 'react';

export const Avatar = React.memo(styled.div`
    width: ${size(210)};
    height: ${size(210)};
    margin-bottom: 33px;
    background-image: url('/assets/avatar.png');
    background-size: cover;
`);
