import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";

// Layouts
import PublicLayout from "@/components/PublicLayout";
import DashboardLayout from "@/components/DashboardLayout";

// Public pages
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Programs from "@/pages/Programs";
import ProgramDetail from "@/pages/ProgramDetail";
import Academy from "@/pages/Academy";
import Portfolio from "@/pages/Portfolio";
import Bitcoin from "@/pages/Bitcoin";
import Hosting from "@/pages/Hosting";
import Login from "@/pages/Login";
import ResetPassword from "@/pages/ResetPassword";
import NotFound from "@/pages/NotFound";

// Dashboard pages
import DashboardOverview from "@/pages/dashboard/DashboardOverview";
import DashboardArticles from "@/pages/dashboard/DashboardArticles";
import ArticleEditor from "@/pages/dashboard/ArticleEditor";
import DashboardPrograms from "@/pages/dashboard/DashboardPrograms";
import ProgramEditor from "@/pages/dashboard/ProgramEditor";
import DashboardUsers from "@/pages/dashboard/DashboardUsers";
import DashboardPortfolio from "@/pages/dashboard/DashboardPortfolio";
import PortfolioEditor from "@/pages/dashboard/PortfolioEditor";
import DashboardCategories from "@/pages/dashboard/DashboardCategories";
import DashboardMessages from "@/pages/dashboard/DashboardMessages";
import DashboardNewsletter from "@/pages/dashboard/DashboardNewsletter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public pages */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* Programs hidden from public site */}
              <Route path="/academie" element={<Academy />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/bitcoin" element={<Bitcoin />} />
              <Route path="/hebergement" element={<Hosting />} />
            </Route>

            {/* Auth pages (no layout) */}
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="articles" element={<DashboardArticles />} />
              <Route path="articles/:id" element={<ArticleEditor />} />
              <Route path="programmes" element={<DashboardPrograms />} />
              <Route path="programmes/:id" element={<ProgramEditor />} />
              <Route path="portfolio" element={<DashboardPortfolio />} />
              <Route path="portfolio/:id" element={<PortfolioEditor />} />
              <Route path="categories" element={<DashboardCategories />} />
              <Route path="messages" element={<DashboardMessages />} />
              <Route path="newsletter" element={<DashboardNewsletter />} />
              <Route path="utilisateurs" element={<DashboardUsers />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
