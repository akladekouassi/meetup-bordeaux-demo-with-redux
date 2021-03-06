import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import RouteEnum from './constants/RouteEnum';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { BaseTheme, jss } from './MuiConfig';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));

type AppProps = {
  history: any;
};
const App: React.FC<AppProps> = ({ history }: AppProps) => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={BaseTheme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <ConnectedRouter history={history}>
            <Suspense fallback={<LoadingIndicator isActive={true} />}>
              <Switch>
                <Route exact={true} path={RouteEnum.Home} component={HomePage} />
              </Switch>
            </Suspense>
          </ConnectedRouter>
        </StylesProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
};
export default App;
