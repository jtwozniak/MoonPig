import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '~/App.css'
import { Card } from '~/pages/Card'
import { CardList } from '~/pages/CardList'

export const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Cards</Link>
      </nav>

      <Route path="/" exact component={CardList} />
      <Route path="/card/:id" component={Card} />
    </div>
  </Router>
)
