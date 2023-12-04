
// import SearchBar from "../components/searchBar"
import Filter from "../components/Filter";
import { ChipFilter } from "../components/ChipFilter";
// import { UserManagement } from "../components/UserManagement";


const InstructionPage = () => {
  return(
       <div className=" grid grid-cols-8 mt-5 items-stretch">  
        <div className="col-start-6 col-span-2 pr-5">
        <SearchBar/>
        </div>
        <div className="flex items-center">
        <Filter/>
        </div>
        <div className="col-start-1 col-span-4">
          <ChipFilter text="hahaha"/>
        </div>
        
      </div>


  )
   
};

export default InstructionPage;
