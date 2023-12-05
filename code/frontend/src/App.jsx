import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useGetInfoQuery } from "./slices/authApiSlice";
import { useEffect } from "react";
// import { setCredentials } from "./slices/authSlice";
import Filter from "./components/Filter";
import { Input, input } from "@material-tailwind/react";
import { ChipFilter } from "./components/ChipFilter";
import { useState } from "react";
import { Button } from "@material-tailwind/react";





const App = () => {
  
//  let filterApp=[];
 const [filter, setFilter] = useState([]);
  const handleClick = (newItem) => {  
    setFilter((prevState) => [...prevState, newItem]);
  const handleDel = (x) =>
  {
    setFilter(filter.filter((item)=>item !==x))
  }
  };
  const [inputMSSV, setMSSV] = useState("");

<<<<<<< HEAD
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
=======

  return (
    <>
     {/* console.log(filterApp); */}
      <div className="grid grid-cols-8 gap-4 pt-3">
        <div className="col-span-2 col-start-6 self-center">
          <Input label="Search" />
        </div>

        <div className="col-span-1 col-start-8 self-center">
          <Filter handleClick={handleClick} inputMSSV={inputMSSV} setMSSV={setMSSV}/>
        </div>
      </div>

      <div className="flex gap-x-2 ">
      {
          filter.map((item, index) => (
          <ChipFilter key={index} text={item} filter = {filter} handleDel ={(item)=>handleDel(item)}  />
        ))}
            
      </div>
>>>>>>> 4e1934bb8cb2e2c331af3bd8ff602ea0fde8eef0
    </>
  );
};

export default App;
