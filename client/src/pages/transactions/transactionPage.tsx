import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import FinancialRecordList from "../../components/FinancialRecordList";

const TransactionPage = () => {
  const { year, month } = useParams();
  
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src="/1114362.png"
          className="absolute inset-0 z-10 h-screen w-full object-cover"
        />
        <FinancialRecordList year={Number(year)} month={Number(month)}/>
      </div>
    </Layout>
  );
};

export default TransactionPage;
