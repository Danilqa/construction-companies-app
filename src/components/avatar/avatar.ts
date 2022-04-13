import styled from 'styled-components';
import { size } from '../../styles/mixins';
import * as React from 'react';

export const Avatar = React.memo(styled.div`
    width: ${size(120)};
    height: ${size(120)};
    margin-bottom: 50px;
    background-image: url('/assets/avatar.jpg');
    background-size: cover;
    border-radius: 50%;
`);
