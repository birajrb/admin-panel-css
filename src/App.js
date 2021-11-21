import styles from "./CssDemo.module.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Widgets from "./pages/Widgets";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notiNavigation, setNotiNavigation] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <Router>
      <div className={styles.container}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* sidebar */}
        <Sidebar isOpen={isSidebarVisible} setIsOpen={setIsSidebarVisible} />
        {/* navbar */}
        <div className={styles.containerBody}>
          <Navbar
            notiNavigation={notiNavigation}
            isSidebarVisible={isSidebarVisible}
            setIsSidebarVisible={setIsSidebarVisible}
          />
          <Switch>
            <Route path="/create" exact>
              <Create setNotiNavigation={setNotiNavigation} />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/widgets">
              <Widgets />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
