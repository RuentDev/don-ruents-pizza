import client from "@/libs/shopify";

export async function getShopDetails() {
  const shopQuery = `
    query shop {
      shop {
        name
        id
      }
    }
  `;

  const { data, errors, extensions } = await client.request(shopQuery);
}