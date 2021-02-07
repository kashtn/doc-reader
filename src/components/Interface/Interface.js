import classes from "./Interface.module.scss";
import { Switch } from "antd";
import "antd/dist/antd.css";

export function Interface({ icon }) {
  return (
    <>
      <div className={classes.interfaceContainer}></div>
      <div className={classes.controlsContainer}>
        <div className={classes.switchContainer}>
          <h4>Sraud</h4>
          <Switch
            checkedChildren="detected"
            unCheckedChildren="clean"
            defaultChecked={false}
          />
        </div>
        <div className={classes.iconContainer}>
          <button className={classes.iconBtn}>{icon}</button>
        </div>
        <div className={classes.galleryContainer}></div>
      </div>
    </>
  );
}
