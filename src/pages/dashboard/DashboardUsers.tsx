import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Shield, Trash2 } from "lucide-react";

interface UserRow {
  user_id: string;
  email: string;
  full_name: string | null;
  roles: string[];
}

const DashboardUsers = () => {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUsers = async () => {
    // Get all profiles
    const { data: profiles } = await supabase.from("profiles").select("user_id, full_name");
    const { data: roles } = await supabase.from("user_roles").select("user_id, role");

    if (profiles) {
      const usersMap = profiles.map((p) => ({
        user_id: p.user_id,
        email: "", // We can't access auth.users directly from client
        full_name: p.full_name,
        roles: (roles || []).filter((r) => r.user_id === p.user_id).map((r) => r.role),
      }));
      setUsers(usersMap);
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const toggleRole = async (userId: string, role: "admin" | "editor" | "user", hasRole: boolean) => {
    if (hasRole) {
      await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
    } else {
      await supabase.from("user_roles").insert({ user_id: userId, role });
    }
    toast({ title: hasRole ? "Rôle retiré" : "Rôle ajouté" });
    fetchUsers();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Utilisateurs</h1>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : users.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">Aucun utilisateur enregistré.</p>
      ) : (
        <div className="space-y-3">
          {users.map((u) => (
            <div key={u.user_id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
              <div>
                <p className="font-medium text-foreground">{u.full_name || "Sans nom"}</p>
                <p className="text-xs text-muted-foreground font-mono">{u.user_id.slice(0, 8)}...</p>
              </div>
              <div className="flex items-center gap-2">
                {(["admin", "editor", "user"] as const).map((role) => {
                  const has = u.roles.includes(role);
                  return (
                    <Button key={role} variant={has ? "default" : "outline"} size="sm" onClick={() => toggleRole(u.user_id, role, has)}
                      className="text-xs">
                      {role === "admin" && <Shield size={12} className="mr-1" />}
                      {role}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardUsers;
