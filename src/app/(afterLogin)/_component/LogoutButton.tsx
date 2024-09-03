"use client";

import styles from "./logoutButton.module.css";
// import Image from "next/image";

export default function LogoutButton() {
  const me = {
    id: "zerohch0",
    image: "../../../../5Udwvqim.jpg",
    nickname: "제로초",
  };

  const handleLogout = () => {};

  return (
    <button className={styles.logOutButton} onClick={handleLogout}>
      <div className={styles.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
