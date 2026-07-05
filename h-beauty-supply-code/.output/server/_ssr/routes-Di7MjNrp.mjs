import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Menu, i as Music2, n as ShoppingBag, o as MapPin, r as Plus, s as Instagram, t as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Di7MjNrp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var domain = "h-beauty-supply-2.myshopify.com";
var token = "b24eed4e0d70a126eb42c199c64ce035";
var endpoint = `https://${domain}/api/2024-01/graphql.json`;
async function shopifyFetch(query) {
	return (await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Shopify-Storefront-Access-Token": token
		},
		body: JSON.stringify({ query })
	})).json();
}
async function getProducts() {
	return (await shopifyFetch(`{
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
  }`)).data.products.edges.map((e) => ({
		id: e.node.id,
		name: e.node.title,
		price: `$${parseFloat(e.node.priceRange.minVariantPrice.amount).toFixed(2)}`,
		img: e.node.images.edges[0]?.node.url ?? "/placeholder.jpg",
		alt: e.node.images.edges[0]?.node.altText ?? e.node.title,
		tag: e.node.tags[0] ?? "New",
		variantId: e.node.variants.edges[0]?.node.id
	}));
}
function useProducts() {
	const [products, setProducts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		getProducts().then(setProducts).catch(() => setError("Failed to load products")).finally(() => setLoading(false));
	}, []);
	return {
		products,
		loading,
		error
	};
}
var logo_default = "/assets/logo-B3U5E1jT.png";
var hero_default = "/assets/hero-CHqKzrGU.jpg";
var cat_wigs_default = "/assets/cat-wigs-B6bIvvo3.jpg";
var cat_crochet_default = "/assets/cat-crochet-CFGquC6T.jpg";
var cat_extensions_default = "/assets/cat-extensions-jw-Kt4Wy.jpg";
var cat_braiding_default = "/assets/cat-braiding-D-pjCYHH.jpg";
var cat_accessories_default = "/assets/cat-accessories-BpD2Lfv0.jpg";
var p1_default = "/assets/p1-B5iOdDxR.jpg";
var p2_default = "/assets/p2-Fq7LOKhf.jpg";
var p3_default = "/assets/p3-l6lzKXgb.jpg";
var p4_default = "/assets/p4-BYyqA4By.jpg";
var p5_default = "/assets/p5-CIocL8zy.jpg";
var p6_default = "/assets/p6-Bn9BO37a.jpg";
var NAV = [
	{
		label: "Wigs",
		href: "#wigs"
	},
	{
		label: "Crochet Hair",
		href: "#crochet"
	},
	{
		label: "Extensions",
		href: "#extensions"
	},
	{
		label: "Braiding Hair",
		href: "#braiding"
	},
	{
		label: "Accessories",
		href: "#accessories"
	}
];
var CATEGORIES = [
	{
		name: "Wigs",
		img: cat_wigs_default,
		href: "#wigs"
	},
	{
		name: "Crochet Hair",
		img: cat_crochet_default,
		href: "#crochet"
	},
	{
		name: "Extensions",
		img: cat_extensions_default,
		href: "#extensions"
	},
	{
		name: "Braiding Hair",
		img: cat_braiding_default,
		href: "#braiding"
	},
	{
		name: "Accessories",
		img: cat_accessories_default,
		href: "#accessories"
	}
];
var STATIC_PRODUCTS = [
	{
		name: "Silk Straight 24\" Lace Front",
		price: "$149",
		tag: "Bestseller",
		img: p1_default
	},
	{
		name: "Honey Body Wave 22\" Wig",
		price: "$179",
		tag: "New",
		img: p2_default
	},
	{
		name: "Passion Twist Crochet 18\"",
		price: "$18",
		tag: "Restock",
		img: p3_default
	},
	{
		name: "Clip-In Extensions Set 24\"",
		price: "$89",
		tag: "Bundle",
		img: p4_default
	},
	{
		name: "Pre-Stretched Braid — Pink",
		price: "$8",
		tag: "Trending",
		img: p5_default
	},
	{
		name: "Hold-Down Edge Control",
		price: "$12",
		tag: "Staff Pick",
		img: p6_default
	}
];
var MARQUEE = [
	"Glow Starts Here",
	"Spring TX",
	"Katy TX",
	"Wigs",
	"Crochet Hair",
	"Extensions",
	"Braiding Hair",
	"Edge Control",
	"Same-Day Pickup"
];
function Index() {
	const { products: shopifyProducts, loading } = useProducts();
	const PRODUCTS = shopifyProducts.length > 0 ? shopifyProducts : STATIC_PRODUCTS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "H Beauty Supply",
								className: "h-9 w-9 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline font-serif text-lg tracking-tight",
								children: "H Beauty"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden lg:flex items-center justify-center gap-7 text-sm",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "text-muted-foreground hover:text-[color:var(--hot-pink)] transition-colors",
								children: n.label
							}, n.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Menu",
								className: "lg:hidden h-10 w-10 grid place-items-center rounded-full border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"aria-label": "Cart",
								className: "relative h-10 w-10 grid place-items-center rounded-full btn-pink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full bg-white text-[10px] font-bold text-[color:var(--hot-pink)] grid place-items-center",
									children: "2"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden border-y border-white/10 bg-black py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex whitespace-nowrap animate-marquee",
						children: [
							...MARQUEE,
							...MARQUEE,
							...MARQUEE,
							...MARQUEE
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mx-6 text-sm uppercase tracking-[0.25em] font-bold text-[color:var(--hot-pink)]",
							children: [
								t,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-6 text-white/30",
									children: "✦"
								})
							]
						}, i))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-widest text-white/70 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--hot-pink)] animate-pulse" }), "Houston · Spring · Katy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-serif text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight",
									children: [
										"Glow",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic",
											children: "Starts"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "holo-text",
											children: "Here."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg text-muted-foreground max-w-md",
									children: "Houston's go-to beauty supply for wigs, crochet hair, extensions, braiding hair, and everything to lay them down."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#products",
										className: "btn-pink inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider",
										children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#locations",
										className: "btn-outline-pink inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider",
										children: ["Find a Store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 bg-[radial-gradient(circle_at_30%_30%,#ec4899_0%,transparent_60%),radial-gradient(circle_at_70%_70%,#9333ea_0%,transparent_60%)] blur-3xl opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-[2rem] overflow-hidden holo-border glow-pink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_default,
									alt: "Lace front wig on display",
									width: 1280,
									height: 1600,
									className: "w-full h-auto aspect-[4/5] object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-black/60 backdrop-blur-md px-4 py-3 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-widest text-white/60",
											children: "Featured"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-lg",
											children: "Body Wave Lace 22\""
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "btn-pink h-12 w-12 grid place-items-center rounded-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5" })
									})]
								})]
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-white/10 bg-gradient-to-r from-[#ec4899]/10 via-transparent to-[#9333ea]/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6",
					children: [
						{
							n: "4.6",
							l: "Stars",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[color:var(--hot-pink)] text-[color:var(--hot-pink)]" })
						},
						{
							n: "889",
							l: "Reviews"
						},
						{
							n: "7.3K",
							l: "TikTok Followers"
						},
						{
							n: "826K",
							l: "Video Views"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center md:justify-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-4xl sm:text-5xl holo-text",
								children: s.n
							}), s.i]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: s.l
						})]
					}, s.l))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "categories",
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-8 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2",
						children: "Shop the categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl sm:text-6xl leading-none",
						children: [
							"Find your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic holo-text",
								children: "look"
							}),
							"."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#products",
						className: "hidden sm:inline text-sm text-muted-foreground hover:text-white",
						children: "View all →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4",
					children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.href,
						className: `group relative overflow-hidden rounded-2xl bg-card border border-white/10 aspect-[3/4] ${i === 0 ? "col-span-2 md:col-span-1 row-span-1" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.img,
								alt: c.name,
								loading: "lazy",
								width: 800,
								height: 800,
								className: "absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[color:var(--hot-pink)]/30 mix-blend-color" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-xl sm:text-2xl",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-8 w-8 rounded-full grid place-items-center bg-white/10 backdrop-blur border border-white/20 group-hover:bg-[color:var(--hot-pink)] transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})]
							})
						]
					}, c.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "products",
				className: "mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between mb-8 gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2",
						children: "Featured drops"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl sm:text-6xl leading-none",
						children: [
							"This week's ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "must-have"
							}),
							"."
						]
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group rounded-3xl bg-white text-neutral-900 overflow-hidden flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square bg-neutral-100 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.name,
								loading: "lazy",
								width: 700,
								height: 800,
								className: "h-full w-full object-cover group-hover:scale-105 transition duration-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full bg-black text-white",
								children: p.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5 flex flex-col gap-3 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-base sm:text-lg leading-tight text-neutral-900",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold shrink-0",
										children: p.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-xs text-neutral-500",
									children: [[
										0,
										1,
										2,
										3,
										4
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-[color:var(--hot-pink)] text-[color:var(--hot-pink)]" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1",
										children: "(128)"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn-pink mt-auto w-full py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider",
									children: "Add to Cart"
								})
							]
						})]
					}, p.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				style: { background: "linear-gradient(135deg,#ec4899,#db2777 60%,#9333ea)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.4em] text-white/80",
							children: "Viral on TikTok"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-white",
							children: [
								"826K views on one video",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "underline decoration-wavy decoration-white/70 underline-offset-8",
									children: "nowhere"
								}),
								" to buy online."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/90 max-w-2xl mx-auto text-lg",
							children: "Until now. Shop the styles you keep seeing on your For You page—straight from Houston."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#products",
								className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition",
								children: ["Shop the Drop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "locations",
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2",
						children: "Come see us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl sm:text-6xl",
						children: [
							"Two Houston ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic holo-text",
								children: "locations"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-4 sm:gap-6",
					children: [{
						city: "Spring, TX",
						addr: "25823 I-45 N, Spring, TX 77380",
						hours: "Mon–Sat 10a–8p · Sun 12–6p"
					}, {
						city: "Katy, TX",
						addr: "1234 Katy Fwy, Katy, TX 77494",
						hours: "Mon–Sat 10a–8p · Sun 12–6p"
					}].map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "holo-border rounded-3xl p-6 sm:p-8 bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)]",
									children: "Store"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-3xl sm:text-4xl mt-2",
									children: loc.city
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 w-12 rounded-full grid place-items-center btn-pink shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: loc.addr }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: loc.hours })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "btn-outline-pink px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider",
									children: "Get Directions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+1",
									className: "px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/15 hover:bg-white/5",
									children: "Call"
								})]
							})
						]
					}, loc.city))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-white/10 bg-black",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[1.5fr_1fr_1fr] gap-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo_default,
										alt: "H Beauty Supply",
										className: "h-10 w-10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-2xl",
										children: "H Beauty Supply"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground max-w-sm",
									children: "Houston's go-to beauty supply for wigs, crochet, extensions & braiding hair. Family-owned. Locally loved."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "TikTok",
										className: "h-11 w-11 grid place-items-center rounded-full border border-white/15 hover:btn-pink hover:border-transparent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "Instagram",
										className: "h-11 w-11 grid place-items-center rounded-full border border-white/15 hover:btn-pink hover:border-transparent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-white/50 mb-4",
								children: "Shop"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm",
								children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: n.href,
									className: "text-muted-foreground hover:text-[color:var(--hot-pink)]",
									children: n.label
								}) }, n.label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-white/50 mb-4",
								children: "Visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Spring, TX" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Katy, TX" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#locations",
										className: "hover:text-[color:var(--hot-pink)]",
										children: "Store hours"
									}) })
								]
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" H Beauty Supply · Houston, TX"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "holo-text font-bold uppercase tracking-widest",
							children: "Glow starts here"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
