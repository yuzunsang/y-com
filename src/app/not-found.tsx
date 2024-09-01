import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <span>이 페이지는 존재하지 않습니다. 올바른 경로로 다시 접근하세요.</span>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default NotFound;
