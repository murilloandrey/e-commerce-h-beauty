import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useProducts } from "@/hooks/useShopify";
import { createCheckout } from "@/lib/shopify";
import { Toaster } from "@/components/ui/sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingBag, Menu, Star, MapPin, Instagram, Music2, Plus, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import catWigs from "@/assets/cat-wigs.jpg";
import catCrochet from "@/assets/cat-crochet.jpg";
import catExtensions from "@/assets/cat-extensions.jpg";
import catBraiding from "@/assets/cat-braiding.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Wigs", href: "#wigs" },
  { label: "Crochet Hair", href: "#crochet" },
  { label: "Extensions", href: "#extensions" },
  { label: "Braiding Hair", href: "#braiding" },
  { label: "Accessories", href: "#accessories" },
];

const CATEGORIES = [
  { name: "Wigs", img: catWigs, href: "#wigs" },
  { name: "Crochet Hair", img: catCrochet, href: "#crochet" },
  { name: "Extensions", img: catExtensions, href: "#extensions" },
  { name: "Braiding Hair", img: catBraiding, href: "#braiding" },
  { name: "Accessories", img: catAccessories, href: "#accessories" },
];

const STATIC_PRODUCTS: { id?: string; name: string; price: string; tag: string; img: string; variantId?: string }[] = [
  { name: "Silk Straight 24\" Lace Front", price: "$149", tag: "Bestseller", img: p1 },
  { name: "Honey Body Wave 22\" Wig", price: "$179", tag: "New", img: p2 },
  { name: "Passion Twist Crochet 18\"", price: "$18", tag: "Restock", img: p3 },
  { name: "Clip-In Extensions Set 24\"", price: "$89", tag: "Bundle", img: p4 },
  { name: "Pre-Stretched Braid — Pink", price: "$8", tag: "Trending", img: p5 },
  { name: "Hold-Down Edge Control", price: "$12", tag: "Staff Pick", img: p6 },
];

const MARQUEE = [
  "Glow Starts Here", "Spring TX", "Katy TX", "Wigs", "Crochet Hair",
  "Extensions", "Braiding Hair", "Edge Control", "Same-Day Pickup",
];

function Index() {
  const { products: shopifyProducts, loading } = useProducts();
  const PRODUCTS = shopifyProducts.length > 0 ? shopifyProducts : STATIC_PRODUCTS;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkingOutId, setCheckingOutId] = useState<string | null>(null);

  async function handleAddToCart(product: (typeof PRODUCTS)[number]) {
    if (!product.variantId) return;
    setCheckingOutId(product.variantId);
    try {
      const checkoutUrl = await createCheckout(product.variantId);
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't start checkout. Please try again.");
    } finally {
      setCheckingOutId(null);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="H Beauty Supply" className="h-9 w-9 object-contain" />
            <span className="hidden sm:inline font-serif text-lg tracking-tight">H Beauty</span>
          </a>
          <nav className="hidden lg:flex items-center justify-center gap-7 text-sm">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-muted-foreground hover:text-[color:var(--hot-pink)] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 justify-end">
            <button aria-label="Menu" onClick={() => setMobileMenuOpen(true)} className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-white/10">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#products" aria-label="Cart" className="relative h-10 w-10 grid place-items-center rounded-full btn-pink">
              <ShoppingBag className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="font-serif">H Beauty Supply</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base border-b border-white/10 text-muted-foreground hover:text-[color:var(--hot-pink)] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* HERO */}
      <section id="top" className="relative pt-16">
        {/* marquee */}
        <div className="relative overflow-hidden border-y border-white/10 bg-black py-3">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="mx-6 text-sm uppercase tracking-[0.25em] font-bold text-[color:var(--hot-pink)]">
                {t} <span className="mx-6 text-white/30">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-widest text-white/70 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--hot-pink)] animate-pulse" />
                Houston · Spring · Katy
              </div>
              <h1 className="font-serif text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight">
                Glow<br />
                <span className="italic">Starts</span> <span className="holo-text">Here.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Houston's go-to beauty supply for wigs, crochet hair, extensions, braiding hair, and everything to lay them down.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#products" className="btn-pink inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider">
                  Shop Now <ShoppingBag className="h-4 w-4" />
                </a>
                <a href="#locations" className="btn-outline-pink inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider">
                  Find a Store <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[radial-gradient(circle_at_30%_30%,#ec4899_0%,transparent_60%),radial-gradient(circle_at_70%_70%,#9333ea_0%,transparent_60%)] blur-3xl opacity-60" />
              <div className="relative rounded-[2rem] overflow-hidden holo-border glow-pink">
                <img src={hero} alt="Lace front wig on display" width={1280} height={1600} className="w-full h-auto aspect-[4/5] object-cover" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="rounded-2xl bg-black/60 backdrop-blur-md px-4 py-3 border border-white/10">
                    <div className="text-[10px] uppercase tracking-widest text-white/60">Featured</div>
                    <div className="font-serif text-lg">Body Wave Lace 22"</div>
                  </div>
                  <button className="btn-pink h-12 w-12 grid place-items-center rounded-full">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-gradient-to-r from-[#ec4899]/10 via-transparent to-[#9333ea]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "4.6", l: "Stars", i: <Star className="h-4 w-4 fill-[color:var(--hot-pink)] text-[color:var(--hot-pink)]" /> },
            { n: "889", l: "Reviews" },
            { n: "7.3K", l: "TikTok Followers" },
            { n: "826K", l: "Video Views" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="font-serif text-4xl sm:text-5xl holo-text">{s.n}</div>
                {s.i}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2">Shop the categories</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-none">Find your <span className="italic holo-text">look</span>.</h2>
          </div>
          <a href="#products" className="hidden sm:inline text-sm text-muted-foreground hover:text-white">View all →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-white/10 aspect-[3/4] ${i === 0 ? "col-span-2 md:col-span-1 row-span-1" : ""}`}
            >
              <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[color:var(--hot-pink)]/30 mix-blend-color" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div className="font-serif text-xl sm:text-2xl">{c.name}</div>
                <div className="h-8 w-8 rounded-full grid place-items-center bg-white/10 backdrop-blur border border-white/20 group-hover:bg-[color:var(--hot-pink)] transition">
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2">Featured drops</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-none">This week's <span className="italic">must-have</span>.</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.id ?? p.name} className="group rounded-3xl bg-white text-neutral-900 overflow-hidden flex flex-col">
              <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                {p.img ? (
                  <img src={p.img} alt={p.name} loading="lazy" width={700} height={800} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-pink-200 via-fuchsia-100 to-purple-200" />
                )}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full bg-black text-white">{p.tag}</span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-base sm:text-lg leading-tight text-neutral-900">{p.name}</h3>
                  <div className="font-bold shrink-0">{p.price}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-[color:var(--hot-pink)] text-[color:var(--hot-pink)]" />)}
                  <span className="ml-1">(128)</span>
                </div>
                <button
                  onClick={() => handleAddToCart(p)}
                  disabled={!p.variantId || checkingOutId === p.variantId}
                  className="btn-pink mt-auto w-full py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider disabled:opacity-60 inline-flex items-center justify-center gap-2"
                >
                  {!p.variantId ? (
                    "Sold Out"
                  ) : checkingOutId === p.variantId ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Adding...
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VIRAL SECTION */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ec4899,#db2777 60%,#9333ea)" }}>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-white/80">Viral on TikTok</div>
          <h2 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-white">
            826K views on one video<span className="italic">—</span><br />
            and <span className="underline decoration-wavy decoration-white/70 underline-offset-8">nowhere</span> to buy online.
          </h2>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Until now. Shop the styles you keep seeing on your For You page—straight from Houston.
          </p>
          <div className="mt-10">
            <a href="#products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
              Shop the Drop <ShoppingBag className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)] mb-2">Come see us</div>
          <h2 className="font-serif text-4xl sm:text-6xl">Two Houston <span className="italic holo-text">locations</span>.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { city: "Spring, TX", addr: "25823 I-45 N, Spring, TX 77380", hours: "Mon–Sat 10a–8p · Sun 12–6p" },
            { city: "Katy, TX", addr: "1234 Katy Fwy, Katy, TX 77494", hours: "Mon–Sat 10a–8p · Sun 12–6p" },
          ].map((loc) => (
            <div key={loc.city} className="holo-border rounded-3xl p-6 sm:p-8 bg-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--hot-pink)]">Store</div>
                  <h3 className="font-serif text-3xl sm:text-4xl mt-2">{loc.city}</h3>
                </div>
                <div className="h-12 w-12 rounded-full grid place-items-center btn-pink shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div>{loc.addr}</div>
                <div>{loc.hours}</div>
              </div>
              <div className="mt-6 flex gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.addr)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-pink px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="H Beauty Supply" className="h-10 w-10" />
                <span className="font-serif text-2xl">H Beauty Supply</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm">
                Houston's go-to beauty supply for wigs, crochet, extensions & braiding hair. Family-owned. Locally loved.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="TikTok" className="h-11 w-11 grid place-items-center rounded-full border border-white/15 hover:btn-pink hover:border-transparent transition">
                  <Music2 className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram" className="h-11 w-11 grid place-items-center rounded-full border border-white/15 hover:btn-pink hover:border-transparent transition">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Shop</div>
              <ul className="space-y-2 text-sm">
                {NAV.map(n => <li key={n.label}><a href={n.href} className="text-muted-foreground hover:text-[color:var(--hot-pink)]">{n.label}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Visit</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Spring, TX</li>
                <li>Katy, TX</li>
                <li><a href="#locations" className="hover:text-[color:var(--hot-pink)]">Store hours</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
            <div>© {new Date().getFullYear()} H Beauty Supply · Houston, TX</div>
            <div className="holo-text font-bold uppercase tracking-widest">Glow starts here</div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
