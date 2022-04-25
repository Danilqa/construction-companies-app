import { memo } from 'react';
import styled from 'styled-components';

export const Section = {
    Container: memo(styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      background-color: ${props => props.theme.color.primary};
      box-sizing: border-box;
      overflow-y: scroll;
    `),
    Content: memo(styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 62px 32px;
      box-sizing: border-box;
    `)
};
