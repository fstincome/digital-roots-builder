// Lovable asset paths are served by Lovable, not by external hosts such as Vercel.
const ASSET_ORIGIN = "https://digital-roots-builder.lovable.app";

export function assetUrl(url: string): string {
  return url.startsWith("/__l5e/assets-v1/") ? `${ASSET_ORIGIN}${url}` : url;
}