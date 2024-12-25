import React from "react";
import styles from "../styles/Filters.styles.module.scss";

const Filters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.option}>
          <select>
            <option value="">Expertise</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
        <div className={styles.option}>
          <select>
            <option value="">Gender</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
        <div className={styles.option}>
          <select>
            <option value="">Fees</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
        <div className={styles.option}>
          <select>
            <option value="">Languages</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
        <div className={styles.option}>
          <select className={styles.green}>
            <option value="">All filters</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
      </div>
      <div className={styles.line}>
        <hr />
      </div>
    </div>
  );
};

export default Filters;
