import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      <Header role={role} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
