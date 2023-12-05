import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { changePasswordReducer } from "./reducers/changePasswordReducer";
import datePickerReducer from "./reducers/datepickerReducer";
import { dropdownReducer } from "./reducers/dropdownReducer";
import { dropdownNameErrReducer } from "./reducers/dropdownNameErrReducer";
import { userReducer } from "./reducers/userReducer";
import { shownavReducer } from "./reducers/shownavReducer";
import { weeksBetweenSelectedDatesReducer } from "./reducers/weeksBetweenSelectedDatesReducer";
import { searchValuesReducer } from "./reducers/searchValuesReducer";
import forgotPasswordReducer from "./reducers/forgetPasswordReducer";
import { expensesReducer } from "./reducers/expensesPaginationReducer";
import { allCoursesReducer } from "./reducers/allCoursesReducer";
import { expensesModalReducer } from "./reducers/expensesModalReducer";
import { sidebarOpenReducer } from "./reducers/sidebarOpenReducer";
import { financeFilterReducer } from "./reducers/financeFilterReducer";
import { financeReducer } from "./reducers/financeReducer";
import { tablesReducer } from "./reducers/tablesReducer";
import { tablesModalReducer } from "./reducers/tablesModalReducer";
import { warehouseReducer } from "./reducers/warehouseReducer";
import { warehouseModalReducer } from "./reducers/warehouseModalReducer";
import { menuReducer } from "./reducers/menuReducer";
import { menuModalReducer } from "./reducers/menuModalReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { categoryModalReducer } from "./reducers/categoryModalReducer";
import { userAuthReducer } from "./reducers/userAuthReducer";
import { funcComponentReducer } from "./reducers/funcComponentReducer";
import { userCodeReducer } from "./reducers/userCodeReducer";
import {UserModalReducer} from "./reducers/userModalReducer"
import { userTablesReducer } from "./reducers/userTablesReducer";
import { menuUserReducer } from "./reducers/menuUserReducer";
import { checkReducer } from "./reducers/checkReducer";
import { userCheckReducer } from "./reducers/userCheckReducer";

const initialState = {};
const reducers = combineReducers({
  auth: authReducer,
  changePass: changePasswordReducer,
  datepicker: datePickerReducer,
  dropdownName: dropdownReducer,
  dropdownNameError: dropdownNameErrReducer,
  user: userReducer,
  show: shownavReducer,
  weeksBetweenSelectedDates: weeksBetweenSelectedDatesReducer,
  searchValues: searchValuesReducer,
  financeData: financeReducer,
  forgetPassword: forgotPasswordReducer,
  expensesData: expensesReducer,
  allCourses: allCoursesReducer,
  expensesModal: expensesModalReducer,
  openSidebar: sidebarOpenReducer,
  funcComponent:funcComponentReducer,
  financeDateFilter: financeFilterReducer,

  // corner
  tables: tablesReducer,
  tablesModal: tablesModalReducer,
  warehouses: warehouseReducer,
  warehouseModal: warehouseModalReducer,
  menus: menuReducer,
  menuModal: menuModalReducer,
  category: categoryReducer,
  categoryModal: categoryModalReducer,
  userAuth: userAuthReducer,
  userCode:userCodeReducer,
  userModal:UserModalReducer,
  userTables:userTablesReducer,
  menuUser:menuUserReducer,
  checks:checkReducer,
  userCheck:userCheckReducer
});
// test

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
