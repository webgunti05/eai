import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
    padding: 0px 15px;
    background-color: #fff;
    height:50px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #ddd;
`;

export const Logo = styled.div`
    width:30%;
    text-align:left;
    padding:13px 0px 0px 0px;
    font-size:20px;
    font-weight:bold;
`;

export const TopInfo = styled.ul`
    width:70%;
    display:flex;
    justify-content:flex-end;
    list-style:none;
    padding:0px;
    margin:0px;
`;

export const TopInfoList = styled.li`
    padding:13px 8px;
    cursor:pointer;
    & > div{
        position:relative;
        top:-5px;
    }
`;
export const TopInfoListImage = styled.img`
    height:24px;
`;