import Dashboard from "../components/provider/Dashboard";
import Footer from "../components/provider/components/Footer";
import Sidebar from "../components/provider/components/Sidebar";
import { Switch, Route } from "react-router-dom";
import AddService from "../components/provider/AddService";
import Service from "../components/provider/Service";
const ProviderPanel = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path={"/provider-panel"}>
            <Dashboard />
          </Route>
          <Route exact path={"/provider-panel/add"}>
            <AddService />
          </Route>
          <Route exact path={"/provider-panel/services"}>
            <Service />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default ProviderPanel;
