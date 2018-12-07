import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { SmallCard, ImgWithReview } from '~comps/SmallCard'

type Props = {
  pics: ImgWithReview[]
}

export const CardGrid = ({ pics }: Props) => (
  <Grid container spacing={24}>
    {pics.map(cardProps => (
      <Grid item lg={4} sm={6}>
        <SmallCard {...cardProps} />
      </Grid>
    ))}
  </Grid>
)
