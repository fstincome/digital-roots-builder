import { describe, expect, it } from "vitest";
import { resourceCategories, resourceIdentity, totalResources } from "@/i18n/resourceItems";
import { toolboxCategories } from "@/i18n/toolboxItems";
import { extraResourceCategories } from "@/i18n/resourceItemsExtra";
import en from "@/i18n/locales/en.json";
import fr from "@/i18n/locales/fr.json";
import es from "@/i18n/locales/es.json";
import de from "@/i18n/locales/de.json";
import itLocale from "@/i18n/locales/it.json";
import ja from "@/i18n/locales/ja.json";
import sw from "@/i18n/locales/sw.json";

describe("Useful resources toolbox", () => {
  const items = resourceCategories.flatMap(category => category.items);
  const identities = new Set(items.map(item => resourceIdentity(item.url)));
  it("merges both supplementary collections without duplicate sites", () => {
    expect(totalResources).toBe(93);
    expect(identities.size).toBe(items.length);
    [...extraResourceCategories, ...toolboxCategories].flatMap(category => category.items).forEach(item => {
      expect(identities.has(resourceIdentity(item.url))).toBe(true);
    });
    expect(resourceIdentity("https://www.remove.bg/")).toBe(resourceIdentity("http://remove.bg"));
  });
  it("uses HTTPS and includes all seven descriptions and category labels", () => {
    items.forEach(item => {
      expect(item.url).toMatch(/^https:\/\//);
      expect(Object.keys(item.desc).sort()).toEqual(["de", "en", "es", "fr", "it", "ja", "sw"]);
      Object.values(item.desc).forEach(description => expect(description.trim().length).toBeGreaterThan(0));
    });
    [en, fr, es, de, itLocale, ja, sw].forEach(locale => {
      resourceCategories.forEach(category => expect(locale.resources.cat).toHaveProperty(category.key));
      expect(locale.resources.desc).toContain("{{count}}");
    });
  });
  it("corrects ambiguous provider links and includes the entire uploaded list", () => {
    const suppliedHosts = "unpaywall.org sci-hub.se openlibrary.org gutenberg.org coursera.org wolframalpha.com remove.bg cleanup.pictures tinywow.com ilovepdf.com photopea.com squoosh.app excalidraw.com carbon.now.sh regex101.com jsonformatter.org explainshell.com alternativeto.net haveibeenpwned.com 10minutemail.com privnote.com radio.garden endel.io mynoise.net justwatch.com archive.org web.archive.org similarweb.com uptimerobot.com pagespeed.web.dev tinypng.com cloudconvert.com diffchecker.com temp-mail.org obfuscator.io keybr.com monkeytype.com ankiweb.net notion.so obsidian.md raindrop.io todoist.com trello.com miro.com figma.com canva.com handbrake.fr localsend.org".split(" ");
    const hosts = new Set(items.map(item => new URL(item.url).hostname.replace(/^www\./, "")));
    suppliedHosts.forEach(host => expect(hosts.has(host)).toBe(true));
    expect(items.find(item => item.name === "yt-dlp")?.url).toBe("https://github.com/yt-dlp/yt-dlp");
  });
});