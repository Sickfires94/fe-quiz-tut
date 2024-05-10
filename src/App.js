import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/authPage";
import UserPage from "./components/UserPage";
import AdminPage from "./components/AdminPage";
import { useSelector } from "react-redux";


function App() {

  const {loggedIn, role} = useSelector(state => state.user);
  return (
    <div className="App">
      {loggedIn ? (role === "admin" ? <AdminPage /> : <UserPage />) : <AuthPage />}
      
      <NotificationContainer/>
    </div>
  );
}



export default App;
