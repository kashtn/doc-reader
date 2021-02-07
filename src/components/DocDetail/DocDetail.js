import classes from "./DocDetail.module.scss";
import { useParams } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function DocDetail() {
  const { id } = useParams();

  return (
    <>
      <div className={classes.contentContainer}>
        <Link to="/" className={classes.link}>
          Back
        </Link>
        <div className={classes.infoContainer}>
          <div className={classes.infoContent}>
            <h4>Passport</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className={classes.infoContent}>
            <h4>Passport</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className={classes.infoContent}>
            <h4>Passport</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className={classes.infoContent}>
            <h4>Passport</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className={classes.infoContent}>
            <h4>Passport</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
        <div className={classes.checksContainer}>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
          <div className={classes.checkContent}>
            <CheckCircleOutlined
              style={{
                fontSize: "25px",
                color: "rgb(2, 191, 2)",
              }}
            />
            <h3>Checking title</h3>
          </div>
        </div>
        <div className={classes.imagesContainer}>
          <div className={classes.imageContent}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.esta-united.co.uk%2Fsites%2Fdefault%2Ffiles%2Fimage-and-text__field-image%2Fpassport-for-esta.jpg&f=1&nofb=1" />
            <p>
              InLorem Ipsum is simply dummy text of the printing and
              typesettingfo
            </p>
          </div>
          <div className={classes.imageContent}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.esta-united.co.uk%2Fsites%2Fdefault%2Ffiles%2Fimage-and-text__field-image%2Fpassport-for-esta.jpg&f=1&nofb=1" />
            <p>
              InLorem Ipsum is simply dummy text of the printing and
              typesettingfo
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
