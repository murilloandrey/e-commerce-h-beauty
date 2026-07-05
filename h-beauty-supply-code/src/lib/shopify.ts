const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch(query: string, variables?: Record<string, unknown>) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`Shopify request failed with status ${res.status}`);
  }
  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors[0].message ?? "Shopify request failed");
  }
  return json;
}

export async function getProducts() {
  const data = await shopifyFetch(`{
    products(first: 12) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          tags
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }`);
  return data.data.products.edges.map((e: any) => ({
    id: e.node.id,
    name: e.node.title,
    price: `$${parseFloat(e.node.priceRange.minVariantPrice.amount).toFixed(2)}`,
    img: e.node.images.edges[0]?.node.url ?? "/placeholder.jpg",
    alt: e.node.images.edges[0]?.node.altText ?? e.node.title,
    tag: e.node.tags[0] ?? "New",
    variantId: e.node.variants.edges[0]?.node.id,
  }));
}

export async function createCheckout(variantId: string) {
  const data = await shopifyFetch(
    `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          checkoutUrl
        }
        userErrors {
          message
        }
      }
    }
  `,
    { input: { lines: [{ merchandiseId: variantId, quantity: 1 }] } }
  );
  const result = data.data.cartCreate;
  if (result.userErrors?.length) {
    throw new Error(result.userErrors[0].message);
  }
  if (!result.cart?.checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL");
  }
  return result.cart.checkoutUrl as string;
}
