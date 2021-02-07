import classes from "./Settings.module.scss";
import {
  SettingFilled,
  VideoCameraFilled,
  CameraFilled,
} from "@ant-design/icons";
import { useContext } from "react";
import { Context } from "../../context";

export function Settings({ interfaceFlag }) {
  const { setInterfaceFlag } = useContext(Context);

  function changeMode() {
    setInterfaceFlag((prev) => !prev);
  }
  return (
    <>
      <div className={classes.settingsContent}>
        <button onClick={changeMode}>
          {interfaceFlag ? <VideoCameraFilled /> : <CameraFilled />}
        </button>
        <button>
          <SettingFilled />
        </button>
      </div>
    </>
  );
}
