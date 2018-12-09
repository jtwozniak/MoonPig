import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { ExtendedCard } from '~comps/ExtendedCard'
import { LoadingWrapper } from '~comps/LoadingWrapper'
import { fetchJSON } from '~helper/fetchJSON'
import { getCardLink } from '~helper/links'

type Props = RouteComponentProps<{
  id: string
}>

export const Card = ({
  match: {
    params: { id },
  },
}: Props) => {
  const [card, setCard] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      const resp = await fetchJSON<any>(getCardLink(id))
      setCard(resp)
    }
    fetchData()
  }, [])

  return (
    <LoadingWrapper condition={!!card}>
      <ExtendedCard {...card} />
    </LoadingWrapper>
  )
}
