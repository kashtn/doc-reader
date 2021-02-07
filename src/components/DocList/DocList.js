import { Link } from "react-router-dom";
import classes from "./DocList.module.scss";

export function DocList() {
  let docs = [
    {
      name: "Паспорт",
      id: 1,
    },
    {
      name: "Паспорт1",
      id: 2,
    },
    {
      name: "Паспорт2",
      id: 3,
    },
    {
      name: "Паспорт3",
      id: 4,
    },
    {
      name: "Паспорт4",
      id: 5,
    },
    {
      name: "Паспорт5",
      id: 6,
    },
    {
      name: "Паспорт6",
      id: 7,
    },
  ];

  return (
    <>
      <div className={classes.docsContent}>
        <h3>Отсканированные ранее документы:</h3>
        {docs.map((doc) => (
          <div className={classes.docContainer}>
            <Link className={classes.link} to={`/document=${doc.id}`}>
              <p>{doc.name}</p>
            </Link>
            <p className={classes.text}>{`Дата сканирования: ${new Date()}`}</p>
          </div>
        ))}
      </div>
    </>
  );
}
