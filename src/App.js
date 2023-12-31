import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routing } from "./routing";
import { ExpensesModal } from "./globalComponents/Modals/ExpensesModal/ExpensesModal";
import { CategoryModal } from "./globalComponents/Modals/CategoryModal/CategoryModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WarehouseModal } from "./globalComponents/Modals/WarehouseModal/WarehouseModal";
import { MenuModal } from "./globalComponents/Modals/MenuModal/MenuModal";
import {TablesModal} from "./globalComponents/Modals/TablesModal/TablesModal"
import {UserModal} from "./globalComponents/Modals/UserModal/UserModal"
import SetsModal from "./globalComponents/Modals/SetsModal/SetsModal";

function App() {
  const { expensesOpenModal } = useSelector((state) => state.expensesModal);
  const { warehouseOpenModal } = useSelector((state) => state.warehouseModal);
  const { menuOpenModal } = useSelector((state) => state.menuModal);
  const {tablesOpenModal} = useSelector(state=>state.tablesModal)
  const {categoryOpenModal} = useSelector(state=>state.categoryModal)
  const {userOpenModal} = useSelector(state=>state.userModal)
  const {setOpenModal} = useSelector(state=>state.menuSetModal)




  useEffect(() => {
    if (expensesOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [expensesOpenModal]);


  useEffect(() => {
    if (tablesOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [tablesOpenModal]);


  return (
    <div className="App">
      <Routing />
      {expensesOpenModal && <ExpensesModal />}
      {categoryOpenModal && <CategoryModal />}
      {warehouseOpenModal && <WarehouseModal />}
      {menuOpenModal && <MenuModal />}
      {tablesOpenModal && <TablesModal/>}
      {categoryOpenModal && <CategoryModal/>}
      {userOpenModal && <UserModal/>}
      {setOpenModal && <SetsModal/>}
      <ToastContainer />
    </div>
  );
}

export default App;
