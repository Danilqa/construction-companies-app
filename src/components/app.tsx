import * as React from 'react';
import { GlobalStyles } from '../styles/global.styles';
import { memo } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { CaseSber } from '../content/case-sber';
import { Home } from '../content/home/home';
import { CaseArrival } from '../content/case-arrival';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Init } from './app.styles';

export enum RouteType {
    CASE_ARRIVAL = 'cases/arrival',
    CASE_SBER = 'cases/sber'
}

export const App = memo(() => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Init>
                    <GlobalStyles/>
                    <HashRouter>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path={RouteType.CASE_ARRIVAL} element={<CaseArrival/>}/>
                            <Route path={RouteType.CASE_SBER} element={<CaseSber/>}/>
                        </Routes>
                    </HashRouter>
                </Init>
            </ThemeProvider>
        </React.Fragment>
    );
});
