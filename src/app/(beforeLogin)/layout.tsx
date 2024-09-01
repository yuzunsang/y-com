import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// localhost:3000일 때
// children => (beforeLogin)/page.tsx, modal => @modal/default.tsx

// 인터셉팅 라우트
// localhost:3000/i/flow/login일 때
// children => (beforeLogin)/i/flow/login/page.tsx
// modal => LoginModal.tsx
