import { MouseEvent, useState } from "react";
import PaginationsPresenter from "./Paginations.presenter";
import { IPaginations01Props } from "./Paginations.types";

export default function PaginationsContainer(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);

  // 글 개수를 10으로 나눈 값에 올림
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  // 이전페이지는 -10
  const onClickPrevPage = () => {

    // StartPage가 1일 때, 이전 페이지는 클릭시 작동x
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  // 다음페이지는 +10
  const onClickNextPage = () => {

    // start 페이지가 last 페이지보다 작을 때만 실행
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivedPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationsPresenter
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
