import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./components/Dashboard";
import { FinancialRecordsProvider } from "./contexts/FinancialRecordContext";
import Transactions from "./pages/transactions";
import TransactionPage from "./pages/transactions/transactionPage";
import { FinancialBalanceProvider } from "./contexts/FinancialBalanceContext";
import Layout from "./components/Layout";
import Assets from "./pages/assets";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FinancialRecordsProvider>
              <FinancialBalanceProvider>
                <Layout>
                  <Dashboard />
                </Layout>
              </FinancialBalanceProvider>
            </FinancialRecordsProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route
          path="/transactions/:year/:month"
          element={
            <FinancialRecordsProvider>
              <TransactionPage />
            </FinancialRecordsProvider>
          }
        />
        <Route
          path="/assets"
          element={
            <FinancialRecordsProvider>
              <FinancialBalanceProvider>
                <Layout>
                  <Assets />
                </Layout>
              </FinancialBalanceProvider>
            </FinancialRecordsProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
