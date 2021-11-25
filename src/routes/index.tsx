import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Start from '../pages/start/index';
import Quiz from '../pages/quiz/index';
import Result from '../pages/result/index';

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
