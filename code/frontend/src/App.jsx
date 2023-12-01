import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetInfoQuery } from "./slices/authApiSlice";
import { useEffect } from "react";
import { setCredentials } from "./slices/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const { data: user, isLoading, error } = useGetInfoQuery();

  useEffect(() => {
    if (isLoading || !user || !user.user) return;
    dispatch(setCredentials({ ...user.user}));
  }, [user, dispatch, isLoading]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <main className="py-5 lg:py-10 lg:px-10 bg-white-fill">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
