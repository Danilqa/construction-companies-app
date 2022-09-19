import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './app';

const container = document.getElementById('app')!;
const root = ReactDOMClient.createRoot(container);
root.render(<App/>);
