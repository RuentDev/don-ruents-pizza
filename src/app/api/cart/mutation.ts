import client from "@/utils/shopify";

export async function createCart() {
  const cartQuery = `
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


  const { data, errors } = await client.request(cartQuery);

  if (errors) {
    return errors
  }

  return data.cartCreate.cart

}

export async function addItemToCart(cartId: string, merchandiseId: string, quantity: number) {
  const cartQuery = `
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


  const { data, errors } = await client.request(cartQuery, {
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

  return data
}

export async function removeItemToCart(cartId: string, lineIds: string[]) {
  const cartQuery = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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
 `

 const { data, errors } = await client.request(cartQuery, {
    variables: {
      cartId,
      lineIds: lineIds,
    }
  });

  if (errors) {
    return errors
  }

  return data
}