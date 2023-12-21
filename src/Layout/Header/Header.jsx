import { useLocation } from "react-router-dom";

import NavbarProfile from "./components/NavbarProfile/NavbarProfile";
import { ReactComponent as MenuMobileIcon } from "../../assets/icons/mobile-menu.svg";
import { useDispatch } from "react-redux";
import { SIDEBAR_ACTION_TYPE } from "../../redux/actions-type";

export const Header = () => {
  const location = useLocation();
  // const [openMenu, setOpenMenu] = useState(true);
  const dispatch = useDispatch();

  // const handleOpenMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_ACTION_TYPE.SIDEBAR_OPEN_MODAL, payload: true });
  };

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/finance":
        return "Maliyyə";
      case "/finance/expenses":
        return "Maliyyə";
      case "/finance/incomes":
        return "Maliyyə";
      case "/category":
        return "Kateqoriya";
      case "/tables":
        return "Masalar";
      case "/warehouse":
        return "Anbar";
        case "/menus":
          return "Menyu";
          case "/menus/menu":
            return "Menyu"
            case "/menus/set":
              return "Menyu"
          case "/workers":
            return "İstifadəçi"
            case "/checks":
              return "Çeklər"
      default:
        return "";
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="header-content-container">
              <div className="header-context">
                <MenuMobileIcon onClick={openSidebar} />
                <h2>{pageTitle}</h2>
              </div>
              <div className="header-icons">
                <NavbarProfile />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
