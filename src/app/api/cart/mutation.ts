import client from "@/utils/shopify";

export async function createCart() {
  const productMutation = `
    mutation CreateCart{
      cartCreate {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;


  const { data, errors } = await client.request(productMutation);

  if (errors) {
    return errors
  }

  return data.cartCreate.cart

}



export async function addItemToCart(cartId: string, merchandiseId: string, quantity: number) {
  const productMutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;


  const { data, errors } = await client.request(productMutation, {
    variables: {
      cartId,
      lines: [
        {
          quantity: quantity,
          merchandiseId: merchandiseId,
        },
      ],
    }
  });

  if (errors) {
    return errors
  }

  console.log(data)
  return
}