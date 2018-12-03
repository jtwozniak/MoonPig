import * as React from 'react'
import { render } from 'react-dom'
import { App } from '~/App'
import { enableCorsAnywhere } from '~helper/cors-anywhere'

enableCorsAnywhere()
render(<App />, document.getElementById('app'))
