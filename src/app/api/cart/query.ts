import client from "@/utils/shopify";

export async function getCartItems(id: string) {
  try {
    const cartQuery = `
    query Cart($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
        estimatedCost {
          totalAmount {
            amount
          }
        }
        lines(first: 100) {
          edges {
            node {
              quantity
              estimatedCost {
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  title
                  product {
                    title
                  }
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    } 
  `;


    const { data, errors } = await client.request(cartQuery, {
      variables: {
        cartId: id
      }
    });


    if (errors) {
      return {
        error: errors
      }
    }

    return data.cart

  } catch (error) {

  }
}