import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Home,
  HotelsList,
  MapView,
  RestaurantsList,
  AttractionsList,
  SearchResult,
  Signup,
  Login,
  UserProfile,
  UpdateProfile,
  List,
  ServiceDetail,
  PageNotFound,
  Favorites,
  Review,
  AdminPanel,
  ProviderPanel,
} from "./pages";
import { PlaceDetails } from "./pages/templates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        {/* <Route path={"/map"}>
          <MapView />
        </Route> */}

        <Route exact path={"/favorites"}>
          <Favorites />
        </Route>

        {/* <Route exact path={"/hotels"}>
          <HotelsList />
        </Route>
        <Route exact path={"/attractions"}>
          <AttractionsList />
        </Route> */}
        <Route path={"/search"}>
          <SearchResult />
        </Route>
        <Route exact path={"/list/:id/review"}>
          <Review />
        </Route>
        <Route path={"/list/:id"}>
          <ServiceDetail />
        </Route>
        <Route path={"/admin-panel"}>
          <AdminPanel />
        </Route>
        <Route path={"/provider-panel"}>
          <ProviderPanel />
        </Route>
        <Route exact path={"/:type/:id"}>
          <PlaceDetails />
        </Route>
        <Route path={"/signup"}>
          <Signup />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/update-profile">
          <UpdateProfile />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default App;
