import React from 'react'
import { Route, Router } from 'react-router-dom'
import Photos from '../page/Photos'

export default function Navigation() {
  return (
   <Router>
     <Switch>
        <Route path='/'> <Photos /></Route>
     </Switch>
   </Router>
  )
}
