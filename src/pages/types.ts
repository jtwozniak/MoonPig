export type Link = {
  Href: string
  Method: string
  Rel: string
  Title: string
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
  Price: {
    Value: number
    Currency: string
  }
  ProductCategory: {
    ProductCategoryId: number
    Name: string
  }
  ProductCategoryGroupSeoPath: string
  ProductId: number
  ProductImage: {
    Link: Link
    MimeType: string
  }
  ProductLink: Link
  Reviews: {
    MinReviewData: number
    MaxReviewData: number
    AverageStarReviewRating: number
    ReviewCount: number
  }
  SeoPath: string
  ShortDescription: string
  SoldOut: number
  Title: string
  TradingFaces: number
}
