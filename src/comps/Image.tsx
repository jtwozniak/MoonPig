import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Zoom from '@material-ui/core/Zoom'

type Props = {
  src: string
}

const Img = styled.img`
  margin: 10px;
`

export const Image = ({ src }: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Zoom in={loaded} timeout={1000}>
      <Img src={src} onLoad={() => setLoaded(true)} />
    </Zoom>
  )
}
