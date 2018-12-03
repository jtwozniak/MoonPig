import * as React from 'react'
import { useState, useEffect } from 'react'
import { cardsLink } from '~helper/links'

type CardList = any[]

export function CardList() {
  const [cardList, setCardList] = useState<CardList>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(cardsLink)
        const json = await res.json()
        console.log(json)
        setCardList(json.Products)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h2>CardList</h2>
      <div>
        {cardList.map((card, i) => (
          <div>Card {i}</div>
        ))}
      </div>
    </>
  )
}
