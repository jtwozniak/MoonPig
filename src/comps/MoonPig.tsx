import { useState } from 'react'
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  rotateCounter: number
  src: string
  onClick: React.MouseEventHandler<HTMLImageElement>
}

const Image = styled(({ rotateCounter, ...props }: Props) => (
  <img {...props} />
))`
  height: 100px
  transition-duration: 0.8s
  transition-property: transform
  transform: rotate(${props => props.rotateCounter * 360}deg)
` as React.ComponentType<Props>

export const MoonPig = () => {
  const [rotate, setRotate] = useState(0)
  return (
    <Image
      rotateCounter={rotate}
      onClick={() => setRotate(rotate + 1)}
      src="https://rlv.zcache.co.uk/flying_pig_moon_t_shirt-rada7f21ae3414ae381a2d3d8c8aaca65_k2gl9_307.jpg?rvtype=content"
    />
  )
}
