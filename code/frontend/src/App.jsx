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
    if (isLoading) return;
    dispatch(setCredentials({ ...user.user._json }));
  }, [user, dispatch, isLoading]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
