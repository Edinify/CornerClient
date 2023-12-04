import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY_M0DAL_ACTION_TYPE,  } from "../../redux/actions-type";
import {getCategoryAction} from "../../redux/actions/categoryAction"
import CategoryData from "./components/CategoryData/CategoryData";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.category);
  const { coursesSearchValues } = useSelector((state) => state.searchValues);
  const [categoryPageNum, setCategoryPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();

  const openModal = () => {
    dispatch({
      type: CATEGORY_M0DAL_ACTION_TYPE.GET_CATEGORY_MODAL,
      payload: { data: {}, openModal: true },
    });
  };


  const getPageNumber = (pageNumber) => {
    setCategoryPageNum(pageNumber);
    dispatch(getCategoryAction(pageNumber))
  };
  const searchData = (e) => {
    e.preventDefault();
    // dispatch(getCoursesPaginationAction(1, coursesSearchValues));
    setCategoryPageNum(1);
  };

  useEffect(() => {
    if (coursesSearchValues) {
      // dispatch(getCoursesPaginationAction(1, coursesSearchValues));
    } else {
      // dispatch(getCoursesPaginationAction(1, ""));
    }

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
    dispatch(getCategoryAction(1))
  },[])

  return (
    <div className="details-page courses ">
      <GlobalHead
        searchData={searchData}
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      />
      <CategoryData
        categoryPageNum={categoryPageNum}
        getPageNumber={getPageNumber}
      />
    </div>
  );
};

export default CategoryPage;
