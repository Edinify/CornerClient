import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  USER_M0DAL_ACTION_TYPE,  } from "../../redux/actions-type";
import {getCategoryAction} from "../../redux/actions/categoryAction"
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import UserData from "./components/UserData";
import { getUserAction } from "../../redux/actions/userAuthAction";

const UserPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.category);
  const { coursesSearchValues } = useSelector((state) => state.searchValues);
  const [categoryPageNum, setCategoryPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();

  const openModal = () => {
    dispatch({
      type: USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,
      payload: { data: {}, openModal: true },
    });
  };



  useEffect(() => {

    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setCategoryPageNum(lastPage);
    }
  }, [lastPage]);

  useEffect(()=>{
    dispatch(getUserAction())
  },[])

  return (
    <div className="details-page courses ">
      <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      />
      <UserData
        categoryPageNum={categoryPageNum}
      />
    </div>
  );
};

export default UserPage;
