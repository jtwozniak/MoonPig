import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import deepPurple from '@material-ui/core/colors/pink'

import { Card } from '~/pages/Card'
import { CardList } from '~/pages/CardList'

const MainDiv = styled.div`
  background: black
  color: ${deepPurple.A100}
`

export const App = () => (
  <Router>
    <MainDiv>
      <nav>
        <Link to="/">Cards</Link>
      </nav>

      <Route path="/" exact={true} component={CardList} />
      <Route path="/card/:id" component={Card} />
    </MainDiv>
  </Router>
)
