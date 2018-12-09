import * as React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import deepPurple from '@material-ui/core/colors/pink'
import '~/App.css'

import { Card } from '~/pages/Card'
import { CardList } from '~/pages/CardList'
import { MoonPig } from '~comps/MoonPig'

const MainDiv = styled.div`
  color: ${deepPurple.A100}
  display: flex
  flex-direction: column
  align-items: center
  flex: 0 0
  height: 100vp
`

export const App = () => (
  <BrowserRouter>
    <MainDiv>
      <Link to="/reload">
        <MoonPig />
      </Link>

      <Route path="/reload" component={() => <Redirect to={'/'} />} />
      <Route path="/" exact={true} component={() => <CardList />} />
      <Route path="/card/:id" component={Card} />
    </MainDiv>
  </BrowserRouter>
)
