import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import MenuData from "./components/MenuData";
import { getMenusAction } from "../../redux/actions/menusAction";
import MenusHeader from "./components/MenusHeader";
import { useLocation } from "react-router-dom";
import SetData from "./components/SetCard/SetData";
import { getSetAction } from "../../redux/actions/setsAction";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { lastPage: menusLastPage } = useSelector((state) => state.menus);
  const { lastPage: setsLastPage } = useSelector((state) => state.menuSet);
  const [menuSetPageNum, setMenuSetPageNum] = useState(1);
  const [menusPageNum, setMenusPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();
  const location = useLocation();

  // sets




  const getPageNumber = (pageNumber) => {
    setMenusPageNum(pageNumber);
    dispatch(getMenusAction(pageNumber));
  };

  const getMenuSetPageNumber=(pageNumber)=>{
    setMenuSetPageNum(pageNumber);
    dispatch(getSetAction(pageNumber))
  }



  useEffect(() => {
    if (menusLastPage) {
      setMenusPageNum(menusLastPage);
    }
    else if (setsLastPage){
    setMenuSetPageNum(setsLastPage)
    }
  }, [menusLastPage,setsLastPage]);

  useEffect(() => {
    dispatch(getMenusAction(1));
  }, []);

  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);

  return (
    <div className="details-page courses ">
      <MenusHeader />
      {/* <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      /> */}
      {location.pathname === "/menus/menu" ? (
        <MenuData menusPageNum={menusPageNum} getPageNumber={getPageNumber} />
      ) : (
        <SetData getMenuSetPageNumber={getMenuSetPageNumber} menuSetPageNum={menuSetPageNum}  />
      )}
    </div>
  );
};

export default MenuPage;
