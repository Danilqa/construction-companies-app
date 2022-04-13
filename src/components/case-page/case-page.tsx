import { memo, ReactNode } from 'react';
import { CasePageContainer, Content, Title } from './case-page.styles';
import * as React from 'react';

interface Props {
    title: string;
    children: ReactNode;
}

export const CasePage = memo<Props>(({ title, children }) => (
    <CasePageContainer>
        <Title>{title}</Title>
        <Content>{children}</Content>
    </CasePageContainer>
));
