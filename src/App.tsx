import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import RouteEnum from './constants/RouteEnum';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BaseTheme } from './MuiConfig';

const HomePage = lazy(() => import('./pages/home/HomePage'));

export type AppProps = {
  history: any;
};
const App: React.FC<AppProps> = ({ history }: AppProps) => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={BaseTheme}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <Suspense fallback={<LoadingIndicator isActive={true} />}>
            <Switch>
              <Route exact={true} path={RouteEnum.Home} component={HomePage} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
};
export default App;
