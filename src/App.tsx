import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import { NotFoundPage } from './page/NotFoundPage';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Goods } from './page/Goods';
import { Store } from './page/Store';
import { Ratings } from 'page/Ratings';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/goods" component={Goods} />
            <Route path="/sells" component={Store} />
            <Route path="/ratings" component={Ratings} />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
};

export default App;
