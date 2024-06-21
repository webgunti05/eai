import styled from "@emotion/styled";

export const SideNavWrapper = styled.div`
   display:flex;
`;
export const NavArea = styled.ul`
   width:50px;
   height:calc(100vh - 50px);
   background-color:#f5f5f5;
   margin:0px;
   padding:0px 0px 0px 0px;
   border-right:1px solid #ddd;
`;
export const NavAreaList = styled.li`
    cursor:pointer;
    &>a{
    padding:12px 8px;
    display:block;
    &:hover{
    background-color:#ddd;
    }
    }
    
    
`;
export const NavAreaListImage = styled.img`
    height:24px;
`;

export const MainPageArea = styled.div`
    width: calc(100% - 50px);
    background-color:#eee;
    box-sizing:border-box;
`;
export const MainPageAreaContent = styled.div`
    margin:20px;
    
    background-color:#fff;
    
`;