import { NavigationItems } from "../lib/data";
import NavigationBar from "./NavigationBar";

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen border flex flex-col">
            <NavigationBar NavigationItems={NavigationItems}/>
            {children}
        </div>
    );
};

export default Layout;