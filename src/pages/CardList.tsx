import * as React from 'react'
import { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CardGrid } from '~comps/CardGrid'
import { cardsLink } from '~helper/links'
import { Product } from '~pages/types'

export function CardList() {
  const [cardList, setCardList] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(cardsLink)
      const json = await res.json()
      console.log(json)
      setCardList(json.Products)
    }
    fetchData()
  }, [])

  const pics = cardList.map(
    ({
      ProductImage: { Link: image },
      Reviews: reviews,
      ShortDescription: description,
      MoonpigProductNo: id,
    }) => ({
      image,
      reviews,
      description,
      id,
    })
  )

  return cardList.length ? (
    <CardGrid pics={pics} />
  ) : (
    <CircularProgress color="inherit" />
  )
}
