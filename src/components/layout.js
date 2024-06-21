import React from "react";
import HeaderComponent from "./header";
import SideNavComponent from "./sidenav";
import * as STYLE from "./styles/sidenavStyles";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <STYLE.SideNavWrapper>
        <SideNavComponent />
        <STYLE.MainPageArea>
          <STYLE.MainPageAreaContent>{children}</STYLE.MainPageAreaContent>
        </STYLE.MainPageArea>
      </STYLE.SideNavWrapper>
    </>
  );
};

export default Layout;
