import * as React from 'react'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'
import { Image } from '~comps/Image'
import { SimpleCard } from '~types/ExtendedCard'

const Root = styled.div`
  text-align: center
  width: 80%
`

const ImgDiv = styled.div`
  display: flex
  flex-wrap: wrap
  justify-content: center
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
      <Divider />
      Tags: {props.DesignFeatureTags.map(tag => `#${tag}`).join(',')}
    </>,
    <>{`${DisplayName}: ${Price}${Currency}`}</>,
    <>
      <ImgDiv>
        {props.ImageUrls.map(({ ImageUrl: src }) => (
          <Image src={src} />
        ))}
      </ImgDiv>
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
