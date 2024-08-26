// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <span>로고</span>
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h3>지금 가입하세요.</h3>
        <Link href="/i/flow/signup" style={{ border: "1px solid black" }}>
          계정 만들기
        </Link>
        <h5>이미 y-com에 가입하셨나요?</h5>
        <Link href="/login" style={{ border: "1px solid black" }}>
          로그인
        </Link>
      </div>
    </div>
  );
}
