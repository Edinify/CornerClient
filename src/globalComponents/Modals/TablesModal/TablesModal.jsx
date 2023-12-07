import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { Box } from "@mui/material";
import {
  COURSES_MODAL_ACTION_TYPE,
  TABLES_M0DAL_ACTION_TYPE,
} from "../../../redux/actions-type";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";
import SubmitBtn from "./components/SubmitBtn";
// import Status from "./components/Status";
import InputField from "./components/InputField";
import Category from "./components/Category";
// import CategoryInput from "./components/CategoryInput";

export const TablesModal = () => {
  const dispatch = useDispatch();
  const { tablesModalData } = useSelector((state) => state.tablesModal);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const inputArr = ["deposit", "oneMinutePrice", "tableNumber", "name"];

  const selectedCategoryList = [
    { key: "vip otaq", name: "Vip Otaq" },
    { key: "oyun masası", name: "Oyun masası" },
    { key: "sadə masa", name: "Sadə masa" },
  ];


  const categoryDropdown = () => {
    setCategoryOpen(!categoryOpen);
  };
  const categoryAddData = (item) => {
    setInputValue("category", item.key);
    updateModalState("category", item.key);
    setCategoryOpen(false);
    setSelectedCategory(item);
  };

  useEffect(() => {
    if (tablesModalData?._id) {
      if (tablesModalData.category) {
        setSelectedCategory({
          name: selectedCategoryList.filter(
            (item) => item.key === tablesModalData.category
          )[0]?.name,
        });
      }
    }
  }, []);

  // formik
  const formik = useFormik({
    initialValues: {
      category: tablesModalData?.category ? tablesModalData?.category : "",
      tableNumber: tablesModalData?.tableNumber
        ? tablesModalData?.tableNumber
        : "",
      name: tablesModalData?.name ? tablesModalData?.name : "",
    },
    validationSchema: ValidationSchema,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const updateModalState = (keyName, value) => {
    dispatch({
      type: TABLES_M0DAL_ACTION_TYPE.GET_TABLES_MODAL,
      payload: {
        data: { ...tablesModalData, [keyName]: value },
        openModal: true,
      },
    });
  };
  const closeModal = () => {
    dispatch({
      type: TABLES_M0DAL_ACTION_TYPE.GET_TABLES_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  // useEffect(() => {
  //   if (tablesModalData?._id) {
  //     if (tablesModalData.category) {
  //       setSelectedCategory({
  //         name: selectedCategoryList.filter(
  //           (item) => item.key === tablesModalData.category
  //         )[0]?.name,
  //       });
  //     }
  //   }
  // }, []);


  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>{tablesModalData?._id ? "Masa yenilə" : "Masa yaradın"}</h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={(e) => e.preventDefault()}
          component="form"
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="create-update-modal-form">
            <Category
              selectedCategory={selectedCategory}
              categoryDropdown={categoryDropdown}
              categoryOpen={categoryOpen}
              selectedCategoryList={selectedCategoryList}
              categoryAddData={categoryAddData}
            />
            {inputArr.map((name, i) => (
              <InputField
                key={i}
                tablesModalData={tablesModalData}
                formik={formik}
                updateModalState={updateModalState}
                inputName={name}
                setInputValue={setInputValue}
              />
            ))}
          </div>
        </Box>

        {tablesModalData?._id ? (
          <SubmitBtn
            formik={formik}
            tablesModalData={tablesModalData}
            funcType="update"
            closeModal={closeModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            tablesModalData={tablesModalData}
            funcType="create"
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};
