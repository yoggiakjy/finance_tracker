import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Transactions = () => {
  const years = ["2024", "2025"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src="/public/1114362.png"
          className="absolute inset-0 z-10 h-screen w-full object-cover"
        />
        <div className="relative z-50 w-full flex flex-col justify-center items-center text-center mt-[8rem]">
          <p className="text-3xl font-light">View your transaction history.</p>

          {years.map((year, index) => (
            <div key={index} className="my-[1rem]">
              <p>{year}</p>
              <div className="grid grid-cols-3 gap-3">
                {months.map((month, index) => (
                  <Link key={index} to={`/transactions/${year}/${index+1}`}>
                    {month}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
