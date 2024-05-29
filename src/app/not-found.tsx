import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex-col-center h-screen w-screen gap-40">
      <div className="flex-col-center gap-8">
        <div className="text-26 font-bold">페이지를 찾을 수 없습니다 🧐</div>
        <p className="text-center text-14 font-medium">
          찾으시려는 주소가 잘못 입력되었거나 <br />
          접근 권한이 없으므로 해당 페이지를 사용하실 수 없습니다.
        </p>
      </div>
      <Link href="/">
        <span className="text-14 font-medium text-primary underline">챌린지 보러 가기</span>
      </Link>
    </div>
  );
}

export default NotFound;
