import React from "react";
import styles from "./staff.module.css";

import {ca} from "../public/configuration";

type Props = { withCA ?: boolean };

const Staff = ({ withCA = true }: Props) => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <h4>Instructors</h4>
          <ul>
            <li>
              <strong>Khaled A. Harras</strong>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:kharras@qatar.cmu.edu">kharras@qatar.cmu.edu</a>
            </li>
            <li>Phone: 4454-8617</li>
            <li>Office: 1020</li>
            <li>Office hours: By Appointment</li>
          </ul>
        </div>
        {withCA && (
          <div>
            <h4>Teaching Assistant</h4>
            <ul>
              <li>
                <strong>{ca.name}</strong>
              </li>
              <li>
                Email:{" "}
                <a href={"mailto:" + ca.email}>
                  {ca.email}
                </a>
              </li>
              <li>Phone: {ca.number}</li>
              <li>Office hours: {ca.oh}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Staff;
