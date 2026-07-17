import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export type TeamMember = {
  id: string;
  full_name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  email: string | null;
  skills: string[] | null;
  journey: string | null;
};

const TeamGrid = ({ limit }: { limit?: number }) => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    let q = supabase
      .from("team_members")
      .select("id, full_name, role, bio, photo_url, linkedin_url, email, skills, journey")
      .eq("is_active", true)
      .order("display_order", { ascending: true });
    if (limit) q = q.limit(limit);
    q.then(({ data }) => setMembers((data as TeamMember[]) || []));
  }, [limit]);

  if (members.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <motion.button
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(m)}
            className="group text-left rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="aspect-square bg-muted overflow-hidden">
              {m.photo_url ? (
                <img
                  src={m.photo_url}
                  alt={m.full_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <User className="text-primary/40" size={64} />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {m.full_name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              <span className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground group-hover:border-primary/50 group-hover:text-primary transition-all">
                <User size={14} /> Open bio
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="h-28 w-28 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                  {selected.photo_url ? (
                    <img src={selected.photo_url} alt={selected.full_name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <User className="text-primary/50" size={40} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <DialogHeader className="text-left space-y-1">
                    <DialogTitle className="text-2xl">{selected.full_name}</DialogTitle>
                    <DialogDescription className="text-primary font-medium">{selected.role}</DialogDescription>
                  </DialogHeader>
                  {selected.linkedin_url && (
                    <a
                      href={selected.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all text-xs"
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {selected.bio && (
                <div className="mt-5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Biographie</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selected.bio}
                  </p>
                </div>
              )}

              {selected.skills && selected.skills.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Compétences clés</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selected.journey && (
                <div className="mt-5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Parcours</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selected.journey}
                  </p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamGrid;
