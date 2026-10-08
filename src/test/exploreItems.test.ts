import { describe, expect, it } from "vitest";
import { exploreCategories } from "@/i18n/exploreItems";

describe("Internet discoveries", () => {
  const items = exploreCategories.flatMap(category => category.items);
  it("includes 50 distinct HTTPS sites", () => {
    expect(items).toHaveLength(50);
    expect(new Set(items.map(item => item.url)).size).toBe(50);
    items.forEach(item => expect(item.url).toMatch(/^https:\/\//));
  });
  it("has descriptions in all seven languages", () => {
    items.forEach(item => {
      expect(Object.keys(item.desc).sort()).toEqual(["de", "en", "es", "fr", "it", "ja", "sw"]);
      Object.values(item.desc).forEach(description => expect(description.length).toBeGreaterThan(0));
    });
  });
});
