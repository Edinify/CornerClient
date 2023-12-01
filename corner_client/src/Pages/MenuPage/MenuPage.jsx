import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import MenuData from "./components/MenuData";
import { getMenusAction} from "../../redux/actions/menusAction";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.coursesPagination);
  const { coursesSearchValues } = useSelector((state) => state.searchValues);
  const [menusPageNum, setMenusPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();



  const openModal = () => {
    dispatch({
      type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  // const getPageNumber = (pageNumber) => {
  //   setMenusPageNum(pageNumber);
  //   if (coursesSearchValues) {
  //     dispatch(getCoursesPaginationAction(pageNumber, coursesSearchValues));
  //   } else {
  //     dispatch(getCoursesPaginationAction(pageNumber, ""));
  //   }
  // };

  useEffect(() => {


    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setMenusPageNum(lastPage);
    }
  }, [lastPage]);


  useEffect(()=>{
    dispatch(getMenusAction())
  },[])

  return (
    <div className="details-page courses ">
      <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      />
      <MenuData
        menusPageNum={menusPageNum}
        // getPageNumber={getPageNumber}
      />
    </div>
  );
};

export default MenuPage;
