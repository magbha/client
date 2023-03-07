import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "../Dnavbar/style.css";
import Dnavbar from "../Dnavbar/Dnavbar";
import "../style.css"
import Bnavbar from "../Dnavbar/Bnavbar";

const Dsidebar = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);


  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f8f9fa",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
   {width > 500 ? <div>   <CDBSidebar textColor="#fff" backgroundColor="#f8f9fa">
   <CDBSidebarHeader
     prefix={
       <i className="fa fa-bars fa-large" style={{ color: "black" }}></i>
     }
   >
     <a
       href="/"
       className="text-decoration-none"
       style={{ color: "black" }}
     >
       StRoom
     </a>
   </CDBSidebarHeader>

   <CDBSidebarContent className="sidebar-content">
     <CDBSidebarMenu>
       <NavLink  to="/dash" className={({ isActive }) => isActive? "active": ''}>
         <CDBSidebarMenuItem
           
           icon="tachometer-alt"
           style={{ color: "black" }}
         >
           Dashboard
         </CDBSidebarMenuItem>
       </NavLink>
       <NavLink  to="/branches"     className={({ isActive }) => isActive? "active": ''}    >
         <CDBSidebarMenuItem icon="home" style={{ color: "black" }}>
           Branches
         </CDBSidebarMenuItem>
       </NavLink>
       <NavLink  to="/Team"     className={({ isActive }) => isActive? "active": ''}    >
         <CDBSidebarMenuItem icon="users" style={{ color: "black" }}>
           Team
         </CDBSidebarMenuItem>
       </NavLink>
       <NavLink  to="/products"     className={({ isActive }) => isActive? "active": ''}    >
         <CDBSidebarMenuItem icon="box" style={{ color: "black" }}>
            Items
         </CDBSidebarMenuItem>
       </NavLink>

       
     </CDBSidebarMenu>
   </CDBSidebarContent>
 </CDBSidebar>

 </div> : null }
 <div className="dcorner">
 {width > 500 ?  <Dnavbar />  : <Bnavbar/>}
 {children}
</div>
    </div>
  );
};

export default Dsidebar;
