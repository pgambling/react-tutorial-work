import React from 'react';
import { browserHistory, Router, Route } from 'react-router';

const Home = React.createClass({
  render() {
    return (<div>Hello world</div>)
  }
})

export const makeRoutes = () => (
  <Router>
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Router>
)

export default makeRoutes
