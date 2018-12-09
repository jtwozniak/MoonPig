export const corsUrl = `http://cors-anywhere.herokuapp.com/`
export const decorateLink = (url: string) => `${corsUrl}${url}`

export const cardsLink = decorateLink(
  'search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job'
)

export const getCardLink = (id: string) =>
  decorateLink(`moonpig.com/uk/api/product/product/?mpn=${id}`)
