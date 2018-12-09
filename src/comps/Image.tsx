import * as React from 'react'
import { useState } from 'react'
import Zoom from '@material-ui/core/Zoom'

type Props = {
  src: string
}

export const Image = ({ src }: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Zoom in={loaded} timeout={1000}>
      <img src={src} onLoad={() => setLoaded(true)} />
    </Zoom>
  )
}
