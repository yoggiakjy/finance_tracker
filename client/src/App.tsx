import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./components/Dashboard";
import { FinancialRecordsProvider } from "./contexts/FinancialRecordContext";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
