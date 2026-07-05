const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch(query: string) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query }),
  });
  return res.json();
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
  const data = await shopifyFetch(`
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${variantId}", quantity: 1 }]
      }) {
        checkout {
          webUrl
        }
      }
    }
  `);
  return data.data.checkoutCreate.checkout.webUrl;
}
