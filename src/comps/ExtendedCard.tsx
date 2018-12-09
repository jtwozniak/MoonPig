import * as React from 'react'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'
import { Image } from '~comps/Image'
import { SimpleCard } from '~types/ExtendedCard'

const Root = styled.div`
  text-align: center
  width: 80%
`

const Img = styled(Image)`
  margin: 10px 5px
  width: 40%
`

export const ExtendedCard = ({
  Size: {
    Kind: { Name },
    Currency,
    Price,
    DisplayName,
  },
  ...props
}: SimpleCard) => {
  const parts = [
    Name,
    <div dangerouslySetInnerHTML={{ __html: props.Description }} />, // dangerouslySetInnerHTML - Description contains html
    <>
      <br />
      Tags: {props.DesignFeatureTags.map(tag => `#${tag}`).join(',')}
    </>,
    <>{`${DisplayName}: ${Price}${Currency}`}</>,
    <>
      {props.ImageUrls.map(({ ImageUrl: src }) => (
        <Img src={src} />
      ))}
    </>,
  ]

  return (
    <Root>
      {parts.map(part => (
        <>
          {part}
          <Divider light />
        </>
      ))}
    </Root>
  )
}
