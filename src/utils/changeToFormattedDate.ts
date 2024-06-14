export const changeToFormattedDate = (dateString: string | undefined) => {
  // Date 객체 생성
  const date = new Date(dateString as string);

  // 특정 형식으로 변환 (예: YYYY-MM-DD HH:MM:SS)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  // const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return formattedDate;
};
