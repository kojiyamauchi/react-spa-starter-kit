/*
  Routes.
*/

// Import React.
import React from 'react'

// Import Route & Switch on React Router DOM.
import { Route, Switch } from 'react-router-dom'

// Import Components.
import TopPage from '@/pages/TopPage'
import SecondPage from '@/pages/SecondPage'
import ThirdPage from '@/pages/ThirdPage'
import OtherPage from '@/pages/OtherPage'

// Component.
export default () => (
  <Switch>
    <Route exact path="/react-spa-starter-kit/" component={TopPage} />
    <Route exact path="/react-spa-starter-kit/second" component={SecondPage} />
    <Route exact path="/react-spa-starter-kit/third" component={ThirdPage} />
    <Route exact path="/react-spa-starter-kit/third/other" component={OtherPage} />
  </Switch>
)
