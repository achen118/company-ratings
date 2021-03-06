import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './appContainer';

const Root = ({ store }) => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

export default Root;