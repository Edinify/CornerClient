import React, { useCallback, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import {
  DROPDOWN_NAME_ACTION_TYPE,
  MENU_M0DAL_ACTION_TYPE,
} from "../../../redux/actions-type";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import CategoryLists from "./components/CategoryList";
import WarehouseLists from "./components/WarehouseLists";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";

export const MenuModal = () => {
  const dispatch = useDispatch();
  const { menusModalData } = useSelector((state) => state.menuModal);
  const { category } = useSelector((state) => state.category);
  const { warehouses } = useSelector((state) => state.warehouses);
  const categoryList = category?.filter((category) => category?.name);
  const [selectedCategoryName, setSelectedCategoryName] = useState();
  const [categoryNameOpen, setCategoryNameOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [classIcon, setClassIcon] = useState(false);
  const inputArr = ["price", "unitAmount"];

  const warehousesList = warehouses?.filter((ware) => ware.productName);
  const [selectedWarehouseName, setSelectedWarehouseName] = useState({
    productName: "",
  });
  const [warehouseNameOpen, setWarehouseNameOpen] = useState(false);

  console.log(menusModalData, "menus modal data");

  const formik = useFormik({
    initialValues: {
      category: menusModalData?.category ? menusModalData.category : "",
      productName: menusModalData?.product ? menusModalData.product : "",
      price: menusModalData?.price ? menusModalData.price : "",
      unitAmount: menusModalData?.unitAmount ? menusModalData.unitAmount : "",
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

  const categoryNameDropdown = () => {
    setCategoryNameOpen(!categoryNameOpen);
    setClassIcon(false);
  };

  const warehouseNameDropdown = () => {
    setWarehouseNameOpen(!warehouseNameOpen);
    setClassIcon(false);
  };
  const categoryNameAddData = (item) => {
    setInputValue("category", item.key);
    updateModalState("category", item);
    dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setCategoryNameOpen(false);
    setSelectedCategoryName(item);
  };
  const warehouseNameAddData = (item) => {
    setInputValue("product", item._id);
    updateModalState("product", item._id);
    dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setWarehouseNameOpen(false);
    setSelectedWarehouseName(item);
  };

  const updateModalState = (keyName, value) => {
    console.log(selectedCategoryName, "bla blba");
    dispatch({
      type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
      payload: {
        data: {
          ...menusModalData,
          [keyName]: value,
        },
        openModal: true,
      },
    });
  };
  const closeModal = () => {
    dispatch({
      type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  useEffect(() => {
    if (menusModalData?._id) {
      if (menusModalData?.category) {
        setSelectedCategoryName(menusModalData.category);
      }
    }
  }, []);
  useEffect(() => {
    if (menusModalData?._id) {
      if (menusModalData?.product) {
        setSelectedWarehouseName({
          ...selectedWarehouseName,
          productName: menusModalData.product.productName,
        });
      }
    }
  }, []);

  useEffect(() => {
    setSelectedWarehouseName({
      productName: "",
    });
  }, [selectedCategoryName]);

  return (
    <div className="create-update-modal-con bonus-modal">
      <div className="create-update-modal ">
        <div className="create-update-modal-head">
          <h2>{menusModalData?._id ? "Menyu yenilə" : "Menyu yaradın"}</h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={(e) => e.preventDefault()}
          component="form"
          sx={{
            maxW_idth: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="create-update-modal-form">
            <CategoryLists
              setSelectedCategoryName={setSelectedCategoryName}
              selectedCategoryName={selectedCategoryName}
              categoryNameDropdown={categoryNameDropdown}
              categoryNameOpen={categoryNameOpen}
              setCategoryNameOpen={setCategoryNameOpen}
              categoryNameAddData={categoryNameAddData}
              categoryList={categoryList}
              formik={formik}
            />
            <WarehouseLists
              setSelectedWarehouseName={setSelectedWarehouseName}
              selectedWarehouseName={selectedWarehouseName}
              warehouseNameDropdown={warehouseNameDropdown}
              warehouseNameOpen={warehouseNameOpen}
              setWarehouseNameOpen={setWarehouseNameOpen}
              warehouseNameAddData={warehouseNameAddData}
              warehousesList={warehousesList}
              selectedCategoryName={selectedCategoryName}
              formik={formik}
            />

            {inputArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                setInputValue={setInputValue}
                formik={formik}
                menusModalData={menusModalData}
                updateModalState={updateModalState}
              />
            ))}
          </div>
        </Box>

        {menusModalData?._id ? (
          <SubmitBtn
            formik={formik}
            funcType="update"
            menusModalData={menusModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            funcType="create"
            menusModalData={menusModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </div>
      {/* {deleteModal && (
        <DeleteBonusModal type="bonus" menusModalData={menusModalData} deleteMod={handleDeleteModal} />
      )} */}
    </div>
  );
};
