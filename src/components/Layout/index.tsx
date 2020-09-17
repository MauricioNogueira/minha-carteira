import React from 'react';

import { Grid } from  './styles';

import MainHeader from '../MainHeader/index';
import Content from '../Content/index';
import Aside from '../Aside/index';

const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    );
}

export default Layout;