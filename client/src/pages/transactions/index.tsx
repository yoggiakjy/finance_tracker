import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Transactions = () => {
    const years = ["2024", "2025"];
    return (
        <Layout>
            <div className="w-full flex flex-col justify-center items-center text-center mt-[8rem]">
                <p className="text-3xl font-light">View your transaction history.</p>
                
                {years.map((year) => (
                    <Link to={`/transactions/${year}`}>{year}</Link>
                ))}
            </div>
        </Layout>
    );
};

export default Transactions;