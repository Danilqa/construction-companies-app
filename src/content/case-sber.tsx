/* eslint-disable max-len */
import { memo } from 'react';
import * as React from 'react';
import { PageCase } from './case-page/case-page';
import { CaseImage } from './case-page/case-page.styles';

export const CaseSber = memo(() => (
    <PageCase
        title='nameproject'
        description='Svetlana Savenkova is a product designer. With main focus on innovative experience, strong and aesthetic UI, and creative thinking.'
        platform='ios'
        role='Designer'
        time='2020 - 2022'
    >
        <CaseImage/>
        <CaseImage/>
        <CaseImage/>
        <CaseImage/>
        <CaseImage/>
    </PageCase>
));
