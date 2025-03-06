import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import FinancialRecordList from "../../components/FinancialRecordList";

const TransactionPage = () => {
    const { slug } = useParams();

    return (
        <Layout>
            <FinancialRecordList year={slug} />
        </Layout>
    );
};

export default TransactionPage;