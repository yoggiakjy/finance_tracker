import { Link } from "react-router-dom";
import { NavigationItemType } from "../lib/globalTypes";
import { UserButton } from "@clerk/clerk-react";

const NavigationBar = ({
  NavigationItems,
}: {
  NavigationItems: NavigationItemType[];
}) => {
  return (
    <nav className="sticky z-100 top-0 w-full flex justify-center items-center backdrop-blur-sm">
      <div className="w-full flex justify-between items-center border-b-[1px] border-gray-500 py-2 px-8">
        <div className="flex justify-center items-center gap-12">
          {NavigationItems.map((item) => (
            <Link key={item.title} to={item.link}>
              <p className="text-lg font-light text-neutral-100">{item.title}</p>
            </Link>
          ))}
        </div>
        <UserButton/>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
