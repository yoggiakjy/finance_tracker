import { Link } from "react-router-dom";
import { NavigationItemType } from "../lib/globalTypes";
import { UserButton } from "@clerk/clerk-react";

const NavigationBar = ({
  NavigationItems,
}: {
  NavigationItems: NavigationItemType[];
}) => {
  return (
    <nav className="sticky z-100 top-0 w-full flex justify-center items-center">
      <div className="relative w-full flex justify-center items-center py-6 px-12">
        {/* Logo */}
        <p className="absolute top-6 left-12 text-neutral-100 text-2xl font-bold uppercase">
          Ignito
        </p>

        <div className="flex justify-center items-center gap-12">
          {NavigationItems.map((item) => (
            <Link key={item.title} to={item.link}>
              <p className="text-[16px] font-light text-neutral-100">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="absolute top-6 right-12 flex justify-center items-center">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
