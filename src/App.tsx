import React, { FC } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { AppInit } from './AppInit';
import RelayEnvironment from './graphql/RelayEnvironment';

const App: FC = () => (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <AppInit />
    </RelayEnvironmentProvider>
)

export default App
