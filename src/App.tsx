import * as React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import deepPurple from '@material-ui/core/colors/pink'
import '~/App.css'

import { Card } from '~/pages/Card'
import { CardList } from '~/pages/CardList'

const MainDiv = styled.div`
  color: ${deepPurple.A100}
  display: flex
  flex-direction: column
  align-items: center
  flex: 0 0
  height: 100vp
`

const Image = styled.img`
  height: 100px;
`

export const App = () => (
  <BrowserRouter>
    <MainDiv>
      <Link to="/reload">
        <Image src="https://rlv.zcache.co.uk/flying_pig_moon_t_shirt-rada7f21ae3414ae381a2d3d8c8aaca65_k2gl9_307.jpg?rvtype=content" />
      </Link>

      <Route path="/reload" component={() => <Redirect to={'/'} />} />
      <Route path="/" exact={true} component={() => <CardList />} />
      <Route path="/card/:id" component={Card} />
    </MainDiv>
  </BrowserRouter>
)
