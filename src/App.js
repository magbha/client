import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import DashboardPage from "./Components/Dashboard/DashboardPage";
import BranchesPage from "./Pages/BranchesPage/BranchesPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ItemPage from "./Pages/ProductsPage/ItemPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import IsAuthRoute from "./Pages/ProtectedRoutes/IsAuthRoutes";
import Sign from "./Pages/Sign/Sign";
import SignIn from "./Pages/Sign/SignIn";
import TeamPage from "./Pages/TeamPage/TeamPage";
import { lazy , Suspense } from "react";

const AuthRoutes = lazy(() => import ("./Pages/ProtectedRoutes/AuthRoutes"))



function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<IsAuthRoute/>}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={  <Suspense fallback={ <h1>Loading...</h1> }  ><AuthRoutes/></Suspense> }>
          <Route path="/dash" element={<DashboardPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:_id" element={<ItemPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
