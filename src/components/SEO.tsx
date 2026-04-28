import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, any>;
}

const SITE_URL = "https://sightafrica.bi";
const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8b8043c3-93ca-4442-9eb5-70239c7d72a8/id-preview-686bc2fc--f5aaa088-4e51-4ddf-b6e0-7c0a692ba5ce.lovable.app-1773582805114.png";

const upsertMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({ title, description, image, type = "website", jsonLd }: SEOProps) => {
  const location = useLocation();
  const url = `${SITE_URL}${location.pathname}`;
  const img = image || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:image"]', "property", "og:image", img);

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", img);

    // JSON-LD
    const existing = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, img, url, type, jsonLd]);

  return null;
};

export default SEO;
