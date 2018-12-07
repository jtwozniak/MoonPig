import * as React from 'react'
import styled from 'styled-components'
import { Link as RouteLink } from 'react-router-dom'
import { Link, Review } from '~pages/types'

export type ImgWithReview = {
  image: Link
  reviews: Review
  description: string
  id: string
}

const Div = styled.div`
  display: flex
  flex-direction: column
`

const CeneterDiv = styled.div`
  display: flex
  flex-direction: column
  
  img, div {
    align-self: center
    width: 300px
  }
  
  div {
    margin-top: 5px
    text-align: center
  }
`

const RouteLinkStyled = styled(RouteLink)`
  color: inherit
  text-decoration: none
`

export const SmallCard = ({
  image,
  reviews,
  description,
  id,
}: ImgWithReview) => (
  <RouteLinkStyled to={`/card/${id}`}>
    <Div>
      <CeneterDiv>
        <img src={image.Href} />
        <div>
          {reviews.AverageStarReviewRating &&
            `Rating (${Math.round(reviews.AverageStarReviewRating * 10) /
              10}) Counts (${reviews.ReviewCount})`}
        </div>
        <div>
          {description && description[0].toUpperCase() + description.slice(1)}
        </div>
      </CeneterDiv>
    </Div>
  </RouteLinkStyled>
)
