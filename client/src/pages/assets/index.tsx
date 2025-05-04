import { useUser } from "@clerk/clerk-react";
import BalanceView from "../../components/BalanceView";
const Asset = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>;
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-4 flex-col justify-center items-center py-6 px-12">
        {/* General User Statistics */}
        <div className="col-span-3 flex flex-col justify-start items-start h-full gap-10 mr-10">
          <p className="text-2xl font-semibold text-neutral-200">
            {`${user.firstName}'s Assets`}
          </p>
        </div>

        {/* Main Balance and Transactions */}
        <BalanceView className="col-span-1 " />
      </div>
    </div>
  );
};

export default Asset;
