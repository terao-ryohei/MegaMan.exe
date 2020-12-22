import React from 'react';
import { css } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { BG } from './assets/parts/png';

export function App() {
  return (
    <div css={style}>
      <img className="bg" src={BG} alt="" />{' '}
      <Router>
        <Switch>{/* <Route path="/" component={Hello} /> */}</Switch>
      </Router>
    </div>
  );
}

const style = css`
  .bg {
    width: 100%;
    height: 100%;
  }
`;
