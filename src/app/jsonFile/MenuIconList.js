import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupIcon from "@mui/icons-material/Group";
import AddCard from "@mui/icons-material/AddCard";
import Profile from "../elementsApp/Profile/Profile";
import PackageRoute from "../elementsApp/packages/PackageRoute";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateForm from "../elementsApp/createAccount/CreateForm";
import VegList from "../elementsApp/vegList/VegList";
import Dashboard from "../elementsApp/dashboard/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "../elementsApp/Settings/Settings";
import FeedBack from "../elementsApp/feedBack/FeedBack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PayBill from "../elementsApp/payBill/PayBill";
import AdminPackage from "../elementsApp/bankBill/AdminPackage";
import ClientPageRoutes from "../elementsApp/CreateClient/ClientPageRoutes";
export default [
  {
    name: "Dashboard",
    Icon: <DashboardIcon />,
    path: "/dashboard",
    component: <Dashboard />,
    isMenu: true,
  },
  ,
  {
    name: "Veg List",
    Icon: <ListIcon />,
    path: "/vegList",
    component: <VegList />,
    isMenu: true,
  },
  {
    name: "Client list",
    Icon: <GroupIcon />,
    path: "/clientList",
    component: <ClientPageRoutes />,
    isMenu: true,
  },
  {
    name: "Create Fruit",
    Icon: <AddCircleIcon />,
    path: "/createFruit",
    component: <PackageRoute />,
    isMenu: true,
  },
  {
    name: "Create Sell Account",
    Icon: <AddBusinessIcon />,
    path: "/createSellAccount",
    component: <CreateForm />,
    isMenu: true,
  },
  {
    name: "Admin Package",
    Icon: <CurrencyRupeeIcon />,
    path: "/adminPackage",
    component: <AdminPackage />,
    isMenu: true,
  },
  {
    name: "Settings",
    Icon: <SettingsIcon />,
    path: "/Settings",
    component: <Settings />,
    isMenu: true,
  },
  {
    name: "Profile",
    Icon: <AddCard />,
    path: "/profile",
    component: <Profile />,
    isMenu: false,
  },
  {
    name: "FeedBack",
    Icon: <AddCard />,
    path: "/feedBack",
    component: <FeedBack />,
    isMenu: false,
  },
  {
    name: "payBill",
    Icon: <AddCard />,
    path: "/payBill",
    component: <PayBill />,
    isMenu: false,
  },
];
