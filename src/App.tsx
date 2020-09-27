import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
// import Dashboard from './pages/Dashboard/index';
import Layout from './components/Layout/index';

import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Layout />
        </ThemeProvider>
    );
}

export default App;
