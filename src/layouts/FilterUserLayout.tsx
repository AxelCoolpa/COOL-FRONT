import { Outlet } from "react-router-dom";
import PreFilterSection from "../components/sections/PreFilterSection";


const FilterUserLayout = () => {
    return (
      <PreFilterSection>
        <Outlet />
      </PreFilterSection>
    )
  }
  
  export default FilterUserLayout;