# Architecture rules
- Public website collections use the shared Resources page renderer with separate typed datasets and translation namespaces, so collections stay consistent without duplicating presentation.
- The public Resources navigation entry groups collection links in an accessible dropdown and mobile disclosure, preserving the CMS-controlled parent visibility and ordering.
- Public navigation grouping is derived from active CMS entries with a shared pure grouping function; child visibility and ordering remain CMS-controlled, and product shortcuts depend on the Services entry being active.
- Branded product sections are reusable components shared by Home and Services to keep product copy and destinations consistent.
- Product images backed by Lovable asset pointers use the shared asset URL resolver with the public Lovable origin so external deployments do not request platform-only paths from their own host.
- Useful resource datasets merge by category and normalized host/path identity, with totals interpolated into translations, so new lists cannot duplicate existing sites or leave stale counts.
- Country facts use a bundled, attributed REST Countries snapshot and isolated translation labels; filtering stays client-side so data remains available without an external API call.