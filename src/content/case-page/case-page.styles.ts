import styled from 'styled-components';
import { memo } from 'react';

export const CaseImage = memo(styled.div`
  width: 100%;
  height: 450px;
  background-color: #8C8C8C;
  margin-top: 39px;
  flex-shrink: 0;
`);

export const Footer = memo(styled.div`
  display: flex;
  flex-direction: row;
  height: 240px;
  padding-bottom: 48px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: flex-end;
`);
