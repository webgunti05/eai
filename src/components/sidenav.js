import React from 'react';
import * as STYLE from './styles/sidenavStyles';
import globalIcons from '../configs/globalIcons'
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return(
        <>
          <STYLE.NavArea>
                <STYLE.NavAreaList>
                   <NavLink to="/dashboard">
                   <STYLE.NavAreaListImage 
                      src={globalIcons.SideNavIcons.DashboardIcon} 
                      alt='Dashboard' 
                    />
                   </NavLink>
                </STYLE.NavAreaList>

                <STYLE.NavAreaList>
                <NavLink to="/database">
                <STYLE.NavAreaListImage 
                      src={globalIcons.SideNavIcons.DataIcon} 
                      alt='Data Base' 
                    />
                  </NavLink>
                   
                </STYLE.NavAreaList>

                <STYLE.NavAreaList>
                <NavLink to="/pipelines" activeClassName='active'>
                <STYLE.NavAreaListImage 
                      src={globalIcons.SideNavIcons.PipesIcon} 
                      alt='Pipelines' 
                    />
                </NavLink>
                    
                </STYLE.NavAreaList>
          </STYLE.NavArea>
        </>
    )
}

export default SideNav;