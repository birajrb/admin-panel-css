import styles from "./CssDemo.module.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        {/* sidebar */}
        <Sidebar />
        {/* navbar */}
        <div className={styles.containerBody}>
          <Navbar />
          <Switch>
            <Route path="/create" exact>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
