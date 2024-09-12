import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import ProtectedRoute from "./routes/ProtectedRoute";
import Appbar from "./components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />} path='/dashboard' />
        </Route>
        <Route element={<SendMoney />} path='/send' />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
