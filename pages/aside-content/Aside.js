import React from "react";
import styles from "../../styles/Aside.module.css";
import Title from "../components/Title";

const Aside = () => {
  return (
    <div className={styles.content}>
      <Title styles={styles.title} />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        doloribus corrupti, aspernatur suscipit temporibus, iste blanditiis
        eveniet sunt consectetur esse maxime etiam eaque, vero non minus rem
        consequuntur nesciunt consectetur.
      </p>
    </div>
  );
};

export default Aside;
