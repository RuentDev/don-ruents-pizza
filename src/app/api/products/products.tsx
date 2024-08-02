import client from "@/utils/shopify";

export default async function getAllProducts() {
  const productQuery = `{
    products (first: 10) {
      nodes {
        id
        handle
        title
        tags
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
        }
        productType
        totalInventory
        availableForSale
        vendor
        createdAt
        updatedAt
        publishedAt
        onlineStoreUrl
        options {
          id
          name
          values
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`;


  const { data } = await client.request(productQuery)

  return data.products.nodes
}