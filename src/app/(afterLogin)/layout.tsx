import { ReactNode } from "react";
import styles from "./layout.module.css";

type Props = { children: ReactNode };

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}></section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}></div>
        <main className={styles.main}>{children}</main>
        <section className={styles.rightSection}></section>
      </div>
    </div>
  );
}
