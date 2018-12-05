import * as React from 'react'
import { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
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

  return (
    <>
      <h2>CardList</h2>
      <br />
      <div>
        {cardList.length ? (
          cardList.map((card, i) => <div key={String(i)}>Card {i}</div>)
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  )
}
