import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./components/Dashboard";
import { FinancialRecordsProvider } from "./contexts/FinancialRecordContext";
import Transactions from "./pages/transactions";
import TransactionPage from "./pages/transactions/transactionPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route
          path="/transactions/:slug"
          element={
            <FinancialRecordsProvider>
              <TransactionPage />
            </FinancialRecordsProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
