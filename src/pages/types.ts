export type Link = {
  Href: string
  Method: string
  Rel: string
  Title: string
}

export type Review = {
  MinReviewData: number
  MaxReviewData: number
  AverageStarReviewRating: number
  ReviewCount: number
}

export type Price = {
  Value: number
  Currency: string
}

export type ProductCategory = {
  ProductCategoryId: number
  Name: string
}

export type Product = {
  CardShopId: number
  DefaultSizeId: number
  DirectSmile: boolean
  IsCustomisable: number // why not boolean?
  IsLandscape: number // boolean?
  IsMultipack: number // boolean?
  MoonpigProductNo: string
  PhotoUploadCount: number
  Price: Price
  ProductCategory: ProductCategory
  ProductCategoryGroupSeoPath: string
  ProductId: number
  ProductImage: {
    Link: Link
    MimeType: string
  }
  ProductLink: Link
  Reviews: Review
  SeoPath: string
  ShortDescription: string
  SoldOut: number
  Title: string
  TradingFaces: number
}
