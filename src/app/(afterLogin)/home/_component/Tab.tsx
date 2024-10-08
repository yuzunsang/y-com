"use client";

import styles from "./tab.module.css";
import { useState } from "react";

export default function Tab() {
  // tab switching "rec" or "fol"
  // "rec" means recommended
  // "fol" means following
  const [tab, setTab] = useState("rec");

  const handleClickRec = () => {
    setTab("rec");
  };
  const handleClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>홈</div>
      <div className={styles.homeTab}>
        <div onClick={handleClickRec}>
          추천
          <div className={styles.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={handleClickFol}>
          팔로우 중
          <div className={styles.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
