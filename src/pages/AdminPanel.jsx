import { Switch, Route } from "react-router-dom";
import Footer from "../components/admin/components/Footer";
import Sidebar from "../components/admin/components/Sidebar";
import Dashboard from "../components/admin/Dashboard";
import Users from "../components/admin/User";
import Services from "../components/admin/Service";
import UserProfile from "../components/admin/UserProfile";
import ServiceDetail from "../components/admin/ServiceDetail";
const AdminPanel = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path={"/admin-panel"}>
            <Dashboard />
          </Route>

          <Route path={"/admin-panel/users/userprofile/:id"}>
            <UserProfile />
          </Route>
          <Route path={"/admin-panel/users"}>
            <Users />
          </Route>
          <Route path="/admin-panel/services/servicedetail/:id">
            <ServiceDetail />
          </Route>
          <Route path={"/admin-panel/services"}>
            <Services />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default AdminPanel;
