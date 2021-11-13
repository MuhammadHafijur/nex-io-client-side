import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddCars from "../AddCars/AddCars";
import AddReview from "../AddReview/AddReview";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Pay from "../Pay/Pay";
import "./Dashboard.css";

const Dashboard = () => {
  const showSettings = (e) => {
    e.preventDefault();
  };

  let { path, url } = useRouteMatch();

  return (
    <div>
      <div class="sidebar">
      <NavLink to="/" className="text-5xl text-center text-gray-800 mb-8">NEX</NavLink>
        <a class="active" href="#home">
          Home
        </a>
        <Link to={`${url}`} id="home" className="menu-item font-bold" href="/">Dashboard</Link>
        <Link to={`${url}/makeAdmin`} id="home" className="menu-item font-bold" href="/">Make Admin</Link>
        <Link to={`${url}/addCars`} id="contact" className="menu-item font-bold">Add Cars</Link>
        <Link to={`${url}/pay`} id="about" className="menu-item font-bold" href="/about">Pay</Link>
        <Link to={`${url}/myOrders`} id="contact" className="menu-item font-bold" href="/contact">My Orders</Link>
        <Link to={`${url}/addReview`} id="contact" className="menu-item font-bold" href="/contact">Add Review</Link>
        <Link to={`${url}`} id="contact" className="menu-item font-bold" href="/contact">Logout</Link>
      </div>

      {/* <!-- Page content --> */}
      <div class="content">
      <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addCars`}>
                        <AddCars></AddCars>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div>
            <div>
            <Menu isOpen={ true }>
        <NavLink to="/" className="text-5xl text-center text-gray-800 mb-8">NEX</NavLink>
        <Link to={`${url}`} id="home" className="menu-item font-bold" href="/">Dashboard</Link>
        <Link to={`${url}/makeAdmin`} id="home" className="menu-item font-bold" href="/">Make Admin</Link>
        <Link to={`${url}/pay`} id="about" className="menu-item font-bold" href="/about">Pay</Link>
        <Link to={`${url}/myOrders`} id="contact" className="menu-item font-bold" href="/contact">My Orders</Link>
        <Link to={`${url}/reviews`} id="contact" className="menu-item font-bold" href="/contact">Reviews</Link>
        <Link to={`${url}`} id="contact" className="menu-item font-bold" href="/contact">Logout</Link>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
            </div>
            <div>


            <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */
}
//         </Switch>
//     </div>
// </div> */}
