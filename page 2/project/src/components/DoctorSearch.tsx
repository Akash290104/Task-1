import React from "react";
import { IoLocationSharp } from "react-icons/io5"; // Import location icon
import styles from "../styles/DoctorSearch.styles.module.scss"; // Import styles
import { FaArrowRight } from "react-icons/fa";


const DoctorSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Find expert Doctors for an In-clinic session here
      </div>
      <div className={styles.search}>
          {/* <IoLocationSharp className={styles.icon} />
          <select>
            <option value="">Select Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select> */}
          <div className={styles.location}>
          <IoLocationSharp className={styles.icon}/>
          <select>
          <option value="">Select Location</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>
          </div>
        <div className={styles.searchBar}>
            <input type="text" placeholder="eg. Doctor, specialisation, clinic name"/>
            <FaArrowRight className={styles.arrow}/>
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;
