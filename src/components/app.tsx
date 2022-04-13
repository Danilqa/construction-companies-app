import * as React from 'react';
import { GlobalStyles } from '../styles/global.styles';
import { Page } from './page/page';
import { memo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CaseA } from '../content/case-a';
import { Home } from '../content/home';
import { CaseB } from '../content/case-b';
import { Avatar } from './avatar/avatar';
import { Header } from './header/header';

enum RouteType {
    CASE_A = 'cases/lol',
    CASE_B = 'cases/kek'
}

export const App = memo(() => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <Page.Container>
                <BrowserRouter>
                    <Page.Sidebar>
                        <Avatar/>
                        <Header>
                            S V E T I L N I C<br/>
                            W I T H - L O V E
                        </Header>

                        <Link to='/'>Home</Link><br/>
                        <Link to={RouteType.CASE_A}>Case LOL</Link><br/>
                        <Link to={RouteType.CASE_B}>Case KEK</Link>
                    </Page.Sidebar>
                    <Page.Content>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<Home/>}/>
                                <Route path={RouteType.CASE_A} element={<CaseA/>}/>
                                <Route path={RouteType.CASE_B} element={<CaseB/>}/>
                            </Route>
                        </Routes>
                    </Page.Content>
                </BrowserRouter>
            </Page.Container>
        </React.Fragment>
    );
});
