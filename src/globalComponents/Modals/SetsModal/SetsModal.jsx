import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  SETS_M0DAL_ACTION_TYPE,
} from "../../../redux/actions-type";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";
import WarehouseLists from "./components/WarehouseList";

const SetsModal = () => {
  const { setsModalData } = useSelector((state) => state.menuSetModal);
  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const [classIcon, setClassIcon] = useState(false);
  const inputArr = ["price", "name"];

  const { allWarehouses } = useSelector((state) => state.allWarehouses);
  const warehousesList = allWarehouses?.filter((ware) => ware.productName);
  const [selectedWarehouseName, setSelectedWarehouseName] = useState({
    products: [],
    price: '',
    name: "",
  });


  const [countData, setCountData] = useState({
    productCount: 0,
    productUnitAmount: 0,
  });
  const [warehouseNameOpen, setWarehouseNameOpen] = useState(false);

  const warehouseNameDropdown = () => {
    setWarehouseNameOpen(!warehouseNameOpen);
    setClassIcon(false);
  };
  const warehouseNameAddData = (item) => {
    // console.log(item)
    // setInputValue("product", item._id);
    // updateModalState("product", item._id);
    // dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setWarehouseNameOpen(false);
    setSelectedWarehouseName({
      ...selectedWarehouseName,
      products: [
        ...selectedWarehouseName.products,
        {
          product: item._id,
          productName: item.productName,
          productCount: '',
          productUnitAmount: '',
        },
      ],
    });
  };


  const closeModal = () => {
    dispatch({
      type: SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  console.log(setsModalData,"Data")

  useEffect(() => {
    if(setsModalData._id){
      const {name,price,products,_id} = setsModalData
      // console.log(name,price,products)
      setSelectedWarehouseName({
        ...selectedWarehouseName,
        name: name,
        price: price,
        products: products,
        id:_id
      });
      
    }
  }, [setsModalData])
  
  const updateModalState = (keyName, value) => {
    dispatch({
      type: SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL,
      payload: {
        data: {
          ...setsModalData,
          [keyName]: value,
        },
        openModal: true,
      },
    });
  };


  const formik = useFormik({
    initialValues: {
      productCount: setsModalData?.productCount
        ? setsModalData.productCount
        : "",
      productUnitAmount: setsModalData?.productUnitAmount
        ? setsModalData.productUnitAmount
        : "",
    },
    validationSchema: ValidationSchema,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues([
        {
          ...formik.values,
          [key]: value,
        },
      ]),
    [formik]
  );


  return (
    <div className="create-update-modal-con bonus-modal">
      <div className="create-update-modal ">
        <div className="create-update-modal-head">
          <h2>{setsModalData?._id ? "Menyu yenilə" : "Menyu yaradın"}</h2>
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
            <WarehouseLists
              setSelectedWarehouseName={setSelectedWarehouseName}
              products={selectedWarehouseName.products}
              selectedWarehouseName={selectedWarehouseName}
              setCountData={setCountData}
              countData={countData}
              warehouseNameDropdown={warehouseNameDropdown}
              warehouseNameOpen={warehouseNameOpen}
              setWarehouseNameOpen={setWarehouseNameOpen}
              warehouseNameAddData={warehouseNameAddData}
              warehousesList={warehousesList}
              formik={formik}
              setInputValue={setInputValue}
              setsModalData={setsModalData}
              updateModalState={updateModalState}
            />

            {inputArr.map((name, index) => (
              <InputField
                setSelectedWarehouseName={setSelectedWarehouseName}
                selectedWarehouseName={selectedWarehouseName}
                value={name==="name"?selectedWarehouseName.name : name==="price"? selectedWarehouseName.price : "" }
                key={index}
                inputName={name}
                setInputValue={setInputValue}
                formik={formik}
                setsModalData={setsModalData}
                updateModalState={updateModalState}
              />
            ))}
            {}
          </div>
        </Box>

        {setsModalData?._id ? (
          <SubmitBtn
            formik={formik}
            funcType="update"
            setsModalData={setsModalData}
            selectedWarehouseName={selectedWarehouseName}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            funcType="create"
            setsModalData={setsModalData}
            selectedWarehouseName={selectedWarehouseName}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </div>
      {/* {deleteModal && (
        <DeleteBonusModal type="bonus" setsModalData={setsModalData} deleteMod={handleDeleteModal} />
      )} */}
    </div>
  );
};

export default SetsModal;
