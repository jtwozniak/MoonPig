import * as React from 'react'
import { useState, useEffect } from 'react'
import { CardGrid } from '~comps/CardGrid'
import { LoadingWrapper } from '~comps/LoadingWrapper'
import { fetchJSON } from '~helper/fetchJSON'
import { cardsLink } from '~helper/links'
import { Product } from '~/types/Product'

export function CardList() {
  const [cardList, setCardList] = useState<Product[]>([])

  useEffect(() => {
    // effect can be async but it's not typed correctly in react alpha
    // having internal async function is a trick for TS
    async function fetchData() {
      const { Products } = await fetchJSON<{ Products: Product[] }>(cardsLink)
      setCardList(Products)
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

  return (
    <LoadingWrapper condition={!!cardList.length}>
      <CardGrid pics={pics} />
    </LoadingWrapper>
  )
}
