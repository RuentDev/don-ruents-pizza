import { AnyAaaaRecord } from "dns";


export interface Variant {
  id: string;
  availableForSale?: boolean;
  barcode?: string
  compareAtPrice: {
    amount: string;
    currencyCode: string
  };
  image?: {
    url: string
  };
  priceV2?: {
    amount: string;
    currencyCode: string
  };
  title: string;
}

export interface Product {
  availableForSale: boolean;
  createdAt: string; // ISO 8601 date string
  description: string;
  featuredImage: {
    url: string;
  };
  handle: string;
  id: string;
  onlineStoreUrl: string | null;
  options: Array<{
    name: string;
    values: string[];
  }>;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    nodes: Variant[]
  };
  productType: string;
  publishedAt: string; // ISO 8601 date string
  tags: string[];
  title: string;
  totalInventory: number | null;
  updatedAt: string; // ISO 8601 date string
  vendor: string;
}


// CART

export interface CartInput {
  attributes: AttributeInput[]
  buyerIdentity: CartBuyerIdentityInput
  discountCodes?: string[]
  giftCardCodes?: string[]
  lines: CartLineInput[]
  metafields?: CartInputMetafieldInput[]
  note?: String
}

export interface AttributeInput {
  key: String
  value: String
}


export interface CartLineInput {
  attributes: AttributeInput[]
  merchandiseId: string
  quantity: number
  sellingPlanId: string
}

interface CartInputMetafieldInput {
  key: string
  type: string
  value: string
}

interface CartBuyerIdentityInput {
  companyLocationId: string
  countryCode: string
  customerAccessToken: String
  deliveryAddressPreferences: AnyAaaaRecord[]
  email: String
  phone: String
  preferences: any
}

