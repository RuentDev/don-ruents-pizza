import client from "@/utils/shopify";
import type { Product } from '@/utils/types';


export async function getAllProducts(): Promise<Product[]> {
  const productQuery = `{
    products (first: 8) {
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
        variants(first: 1) {
          nodes {
            id
            title
            priceV2 {
              amount
              currencyCode
            }
          }
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

export async function getProductsByCollectionHandle(handle: string) {

  const productQuery = `
    query Collection($handle: String) {
      collection(handle: $handle) {
        handle
        products(first: 4) {
          nodes {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              url
            }
            totalInventory
            availableForSale
            vendor
            createdAt
            updatedAt
            publishedAt
            onlineStoreUrl
          }
        }
      }
    }
  `;

  const { data, errors, extensions } = await client.request(productQuery, {
    variables: {
      handle: handle,
    },
  });

  return data.collection.products.nodes


}
