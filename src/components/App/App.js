import classes from "./App.module.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DocList } from "../DocList/DocList";
import { Interface } from "../Interface/Interface";
import { Settings } from "../Settings/Settings";
import { DocDetail } from "../DocDetail/DocDetail";
import { Context } from "../../context";
import { CameraFilled, VideoCameraFilled } from "@ant-design/icons";

function App() {
  const [interfaceFlag, setInterfaceFlag] = useState(true);

  return (
    <>
      <Context.Provider value={{ setInterfaceFlag }}>
        <div className={classes.mainContainer}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <div className={classes.contentContainer}>
                  <div className={classes.interfaceContainer}>
                    <div className={classes.settingsContainer}>
                      <Settings interfaceFlag={interfaceFlag} />
                    </div>
                    {interfaceFlag ? (
                      <Interface icon={<CameraFilled />} />
                    ) : (
                      <Interface icon={<VideoCameraFilled />} />
                    )}
                  </div>
                  <div className={classes.docsContainer}>
                    <DocList />
                  </div>
                </div>
              </Route>
              <Route path="/document=:id" exact component={DocDetail} />
            </Switch>
          </Router>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
