export interface PublicMenuEntry {
  label_key: string;
  path: string;
}

export interface PublicNavigationGroup extends PublicMenuEntry {
  children?: PublicMenuEntry[];
}

const groupDefinitions = [
  { label_key: "nav.solutions", paths: ["/services", "/hebergement", "/bitcoin"] },
  { label_key: "nav.publications", paths: ["/blog", "/actualites-tech"] },
  { label_key: "nav.company", paths: ["/a-propos", "/portfolio", "/equipe"] },
];

export function groupPublicNavigation(entries: PublicMenuEntry[]): PublicNavigationGroup[] {
  const emitted = new Set<string>();
  return entries.filter(entry => !["/programmes", "/explorer"].includes(entry.path)).flatMap(entry => {
    const definition = groupDefinitions.find(group => group.paths.includes(entry.path));
    if (definition) {
      if (emitted.has(definition.label_key)) return [];
      emitted.add(definition.label_key);
      const children = entries.filter(child => definition.paths.includes(child.path));
      if (children.some(child => child.path === "/services")) {
        children.push(
          { label_key: "core.name", path: "/services#sight-core" },
          { label_key: "bitlibera.navLabel", path: "/services#bitlibera" },
          { label_key: "qr.navLabel", path: "/services#qr-codes" },
        );
      }
      return [{ ...entry, label_key: definition.label_key, children }];
    }
    if (entry.path === "/ressources") {
      return [{ ...entry, children: [
        { label_key: "resources.title", path: "/ressources" },
        { label_key: "explore.title", path: "/explorer" },
      ] }];
    }
    return [entry];
  });
}