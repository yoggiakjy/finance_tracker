import { NavigationItems } from "../lib/data";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden min-h-screen border flex flex-col bg-zinc-950">
      <NavigationBar NavigationItems={NavigationItems} />
      {children}
    </div>
  );
};

export default Layout;
