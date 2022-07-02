import Home from "./Home";
import SideBar from "./Sidebar";
import Modal from "./Modal";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Home />
      <Modal />
      <SideBar />
    </Fragment>
  );
}

export default App;
