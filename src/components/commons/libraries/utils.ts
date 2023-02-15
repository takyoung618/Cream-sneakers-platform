export const getDate = (value: any) => {
  const start = new Date(value);
  const end = new Date(); // 현재 날짜
  const times = [
    { time: "분", milliSeconds: 1000 * 60 },
    { time: "시간", milliSeconds: 1000 * 60 * 60 },
    { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
    { time: "개월", milliSeconds: 1000 * 60 * 60 * 24 * 30 },
    { time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365 },
  ].reverse();

  return "방금 전";
};

export const localStorageDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
