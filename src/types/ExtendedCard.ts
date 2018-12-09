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

const cardData = {
  Name: 'LDAY017',
  SizeName: 'Square Card',
  AvailableSizes: [
    {
      AvailableSubstrates: null,
      Category: {
        Id: 1,
        Name: 'Greeting Cards',
      },
      Currency: '£',
      Description: 'SqL',
      DisplayOrder: 6,
      Id: 79,
      Kind: {
        Category: {
          Id: 1,
          Name: 'Greeting Cards',
        },
        Id: 1,
        Name: 'Greeting Card',
      },
      MinimumBundle: 1,
      Name: 'Large Square Card',
      PostageSize: {
        Id: 1,
        Name: 'Letter',
      },
      Price: 5.99,
      Weights: {
        EnvelopeWeight: 15.0,
        ItemWeight: 80.0,
      },
      DisplayName: 'Large Square Card',
      DefaultNoOfPages: 4,
      CanPrepay: false,
    },
  ],
  Description:
    "You'd Better Not Get A New Work Bestie Personalised New Job Card   Once you've personalised your card or uploaded a photo, and used the handwriting feature on the app, it's time to make their day even brighter by adding flowers and a gift!",
  DesignFeatureTags: ['Portrait'],
  ImageUrls: [
    {
      ImageNo: 1,
      ImageUrl:
        'https://assets.moonpig.com/api/images/Cardshop/1/product/LDAY017/1',
    },
    {
      ImageNo: 2,
      ImageUrl:
        'https://assets.moonpig.com/api/images/Cardshop/1/product/LDAY017/2',
    },
    {
      ImageNo: 3,
      ImageUrl:
        'https://assets.moonpig.com/api/images/Cardshop/1/product/LDAY017/3',
    },
    {
      ImageNo: 4,
      ImageUrl:
        'https://assets.moonpig.com/api/images/Cardshop/1/product/LDAY017/4',
    },
  ],
  IsCustomisable: true,
  Metadata: { Default: false, Quality: 0 },
  MoonpigProductNo: 'LDAY017',
  Pages: [
    {
      PageNo: 1,
      Template: {
        FontColors: null,
        FontOptions: null,
        FontSizes: null,
        Height: 0.0,
        Id: 61652,
        ImageObjects: null,
        ShapeObjects: null,
        TextCustomisations: null,
        TextObjects: null,
        Width: 0.0,
        XBleed: 0.0,
        YBleed: 0.0,
      },
    },
    {
      PageNo: 2,
      Template: {
        FontColors: null,
        FontOptions: null,
        FontSizes: null,
        Height: 0.0,
        Id: 61706,
        ImageObjects: null,
        ShapeObjects: null,
        TextCustomisations: null,
        TextObjects: null,
        Width: 0.0,
        XBleed: 0.0,
        YBleed: 0.0,
      },
    },
    {
      PageNo: 3,
      Template: {
        FontColors: null,
        FontOptions: null,
        FontSizes: null,
        Height: 0.0,
        Id: 61707,
        ImageObjects: null,
        ShapeObjects: null,
        TextCustomisations: null,
        TextObjects: null,
        Width: 0.0,
        XBleed: 0.0,
        YBleed: 0.0,
      },
    },
    {
      PageNo: 4,
      Template: {
        FontColors: null,
        FontOptions: null,
        FontSizes: null,
        Height: 0.0,
        Id: 61698,
        ImageObjects: null,
        ShapeObjects: null,
        TextCustomisations: null,
        TextObjects: null,
        Width: 0.0,
        XBleed: 0.0,
        YBleed: 0.0,
      },
    },
  ],
  ProductCategoryGroup: {
    Name: 'Personalised Cards',
    PageUrl: 'https://www.moonpig.com/uk/personalised-cards',
    SeoPath: 'personalised-cards/',
  },
  ProductId: '73046',
  ProductUrl:
    'https://www.moonpig.com/uk/personalised-cards/youd-better-not-get-a-new-work-bestie-personalised-new-job-card/lday017',
  RangeId: 18097,
  Rank: 9999,
  SeoPath: 'Youd-Better-Not-Get-A-New-Work-Bestie-Personalised-New-Job-Card',
  Size: {
    AvailableSubstrates: [],
    Category: { Id: 1, Name: 'Greeting Cards' },
    Currency: '£',
    Description: 'Sqr',
    DisplayOrder: 5,
    Id: 13,
    Kind: {
      Category: { Id: 1, Name: 'Greeting Cards' },
      Id: 1,
      Name: 'Greeting Card',
    },
    MinimumBundle: 1,
    Name: 'Square Card',
    PostageSize: { Id: 1, Name: 'Letter' },
    Price: 3.29,
    Weights: { EnvelopeWeight: 12.0, ItemWeight: 20.0 },
    DisplayName: 'Square Card',
    DefaultNoOfPages: 4,
    CanPrepay: false,
  },
  SoldOut: false,
  SupplierNo: '',
  ThumbnailUrl:
    'https://d1xkhapf8f3lxw.cloudfront.net/api/images/Cardshop/1/product/LDAY017',
  Title: "You'd Better Not Get A New Work Bestie Personalised New Job Card",
  AdditionalInfo: '',
  IsMultipack: false,
  UndeliverableDates: [],
  InStock: true,
  OccasionId: 125,
  PageCountOverride: null,
  ProductCategoryId: 1,
  PublishedOnSite: true,
  StyleId: 19,
  SupplierId: 4973,
}
