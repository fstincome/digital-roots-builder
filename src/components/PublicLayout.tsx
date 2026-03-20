import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import ScrollProgress from "./ScrollProgress";

const PublicLayout = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <ScrollProgress />
    <PublicNavbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <PublicFooter />
  </div>
);

export default PublicLayout;
