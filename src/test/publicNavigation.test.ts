import { describe, expect, it } from "vitest";
import { groupPublicNavigation } from "@/lib/publicNavigation";

const item = (path: string) => ({ path, label_key: path });
describe("public menu grouping", () => {
  it("preserves active entries and their ordering within groups", () => {
    const groups = groupPublicNavigation([item("/"), item("/bitcoin"), item("/blog"), item("/services"), item("/actualites-tech"), item("/ressources")]);
    expect(groups.map(group => group.label_key)).toEqual(["/", "nav.solutions", "nav.publications", "/ressources"]);
    expect(groups[1].children?.slice(0, 2).map(child => child.path)).toEqual(["/bitcoin", "/services"]);
    expect(groups[3].children?.map(child => child.path)).toEqual(["/ressources", "/explorer"]);
  });
  it("does not expose disabled parents, hidden pages or their shortcuts", () => {
    expect(groupPublicNavigation([])).toEqual([]);
    const groups = groupPublicNavigation([item("/hebergement"), item("/programmes"), item("/explorer")]);
    expect(groups).toHaveLength(1);
    expect(groups[0].children?.map(child => child.path)).toEqual(["/hebergement"]);
  });
});