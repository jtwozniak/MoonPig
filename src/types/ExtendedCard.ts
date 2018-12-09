type ImageUrl = {
  ImageUrl: string
}

type Size = {
  Currency: string
  Kind: {
    Name: string
  }
  Price: number
  DisplayName: string
}

export type SimpleCard = {
  SizeName: string
  Description: string
  DesignFeatureTags: string[]
  ImageUrls: ImageUrl[]
  Size: Size
  Title: string
}
