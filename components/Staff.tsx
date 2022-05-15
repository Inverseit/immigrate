import React from "react";
import styles from "./staff.module.css";

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
                <strong>Ulan Seitkaliyev</strong>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:useitkal@andrew.cmu.edu">
                  useitkal@andrew.cmu.edu
                </a>
              </li>
              <li>Phone: 5553-4637</li>
              <li>Office hours: By Appointment</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Staff;
