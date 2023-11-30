import React, { useEffect, useState } from "react";
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
import { getCategoryAction } from "../../../redux/actions/categoryAction";
import { getWarehouseAction } from "../../../redux/actions/wareHouseAction";
import WarehouseLists from "./components/WarehouseLists";

export const MenuModal = () => {
  const dispatch = useDispatch();
  const { menusModalData } = useSelector((state) => state.menuModal);
  const { category } = useSelector((state) => state.category);
  const {warehouses} = useSelector(state=>state.warehouses);
  const categoryList = category?.filter((category) => category?.name);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [categoryNameOpen, setCategoryNameOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [classIcon, setClassIcon] = useState(false);
  const inputArr = [ "price", "unitAmount"];


  const warehousesList = warehouses?.filter(ware=>ware.productName)
  const [selectedWarehouseName, setSelectedWarehouseName] = useState("");
  const [warehouseNameOpen, setWarehouseNameOpen] = useState(false);


  console.log(menusModalData,"menu")


  const categoryNameDropdown = () => {
    setCategoryNameOpen(!categoryNameOpen);
    setClassIcon(false);
  };

  const warehouseNameDropdown=()=>{
    setWarehouseNameOpen(!warehouseNameOpen)
    setClassIcon(false)
  }
  const categoryNameAddData = (item) => {
    updateModalState("category", item);
    dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setCategoryNameOpen(false);
    setSelectedCategoryName(item);
  };
  const warehouseNameAddData=(item)=>{
    console.log(item,"product")
    updateModalState("product",item._id);
    dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setWarehouseNameOpen(false);
    setSelectedWarehouseName(item)
  }

  const updateModalState = (keyName, value) => {
    dispatch({
      type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
      payload: {
        data: {
          ...menusModalData,
          category: selectedCategoryName?.name,
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
    if (menusModalData?._id && category) {
      if (menusModalData.category) {
        setSelectedCategoryName(
          category.filter((item) => item._id === menusModalData.category)[0]
        );
      }
    }
  }, [category]);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getWarehouseAction())
  }, []);

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
            />
            <WarehouseLists
            setSelectedWarehouseName={setSelectedWarehouseName}
            selectedWarehouseName = {selectedWarehouseName}
            warehouseNameDropdown={warehouseNameDropdown}
            warehouseNameOpen={warehouseNameOpen}
            setWarehouseNameOpen={setWarehouseNameOpen}
            warehouseNameAddData={warehouseNameAddData}
            warehousesList={warehousesList}

            />

            {inputArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                menusModalData={menusModalData}
                updateModalState={updateModalState}
              />
            ))}
          </div>
        </Box>

        {menusModalData?._id ? (
          <SubmitBtn
            funcType="update"
            menusModalData={menusModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
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
