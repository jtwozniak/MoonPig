import * as React from 'react'
import styled from 'styled-components'
import { Link as RouteLink } from 'react-router-dom'
import { Link, Review } from '~types/Product'

export type ImgWithReview = {
  image: Link
  reviews: Review
  description: string
  id: string
}

const RouteLinkStyled = styled(RouteLink)`
  color: inherit
  text-decoration: none
  
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

export const SmallCard = ({
  image,
  reviews,
  description,
  id,
}: ImgWithReview) => (
  <RouteLinkStyled to={`/card/${id}`}>
    <img src={image.Href} />
    <div>
      {reviews.AverageStarReviewRating &&
        `Rating (${Math.round(reviews.AverageStarReviewRating * 10) /
          10}) Counts (${reviews.ReviewCount})`}
    </div>
    <div>
      {description && description[0].toUpperCase() + description.slice(1)}
    </div>
  </RouteLinkStyled>
)
