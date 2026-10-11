import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/assetUrl";

describe("External deployment asset URLs", () => {
  it("resolves platform asset paths against the public asset host", () => {
    expect(assetUrl("/__l5e/assets-v1/example/image.jpg")).toBe("https://digital-roots-builder.lovable.app/__l5e/assets-v1/example/image.jpg");
  });
  it("preserves absolute URLs and regular bundled files", () => {
    expect(assetUrl("https://example.org/image.jpg")).toBe("https://example.org/image.jpg");
    expect(assetUrl("/assets/image.jpg")).toBe("/assets/image.jpg");
  });
});