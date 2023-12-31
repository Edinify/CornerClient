import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FinanceDateFilter from "./components/FinanceDateFilter/FinanceDateFilter";
import FinanceChart from "./components/FinanceChart/FinanceChart";
import FinanceStatistics from "./components/FInanceStatistics/FinanceStatistics";
import FinanceDataHead from "./components/FinanceDataHead/FinanceDataHead";
import FinanceData from "./components/FinanceData/FinanceData";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import { getExpensesAction } from "../../redux/actions/expensesAction";

const FinancePage = () => {
  const dispatch = useDispatch();
  const { changeShowNav } = useCustomHook();

  useEffect(() => {
    changeShowNav(false)
    return () => {
      changeShowNav(true)
    };
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getExpensesAction(1))
  },[])
  return (
    <div className="finance-page">
      <div className="finance-top">
        <div className="left">
          <FinanceDateFilter />
          <FinanceChart />
        </div>

        <div className="right">
          <FinanceStatistics />
        </div>
      </div>

      <div className="finance-bottom">
        <FinanceDataHead />
        <FinanceData />
      </div>
    </div>
  );
};

export default FinancePage;
