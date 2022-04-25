import styled from 'styled-components';
import { memo } from 'react';

const Case = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  padding: 30px;
  color: ${props => props.theme.color.tertary};
  background-color: ${props => props.theme.color.secondary};
  font-size: 60px;
  box-sizing: border-box;
`;

export const Cases = {
    List: memo(styled.div`
      display: grid;
      grid-template-rows: repeat(2, 350px);
      grid-template-columns: repeat(2, 350px);
      justify-content: center;
      align-items: center;
      margin: auto;
    `),
    Item: {
        Background: memo(styled.div`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `),
        Transparent: memo(styled(Case)`
          background-color: transparent;
        `),
        TypeA: memo(styled(Case)`
          border-radius: 30px;
          justify-content: flex-start;
        `),
        TypeB: memo(styled(Case)`
          border-radius: 30px;
        `),
        TypeC: memo(styled(Case)`
          border-radius: 50%;
        `),
        Content: memo(styled.span`
          z-index: 2;
        `)
    }
};
