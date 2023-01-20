import React, { useEffect, useState } from "react";

const Panigation = (props: any) => {
  const { showPerPage, onPanigationChange, panigation, total } = props;
  const [currentPage, setCurrentPage] = useState<any>(1);
  const totalpage = Math.ceil(total / showPerPage) - 1;

  // for pages

  const pages: any = [];
  for (let i = 1; i <= totalpage; i++) {
    pages.push(i);
  }

  const onPageChange = (showPerPage: number) => {
    setCurrentPage(showPerPage);
  };

  const handlePageClick = (e: any) => {
    onPageChange(Number(e.target.id));
  };

  const pageNumbers = pages?.map((page: number) => {
    if (page <= panigation.end && page > panigation.start) {
      return (
        <li
          key={page}
          id={`${page}`}
          onClick={handlePageClick}
          className={currentPage === `${page}` ? "active" : ""}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  const onPrevClick = ()=>{
    if((currentPage-1) % currentPage === 0){
        panigation.end(panigation.end - currentPage);
        panigation.start(panigation.start - currentPage);
    }
    setCurrentPage((prev : any) => prev-1);
 }
 const onNextClick = ()=>{
  if(currentPage + 1 > panigation.end){
      panigation.end(panigation.end + currentPage);
      panigation.start(panigation.start + currentPage);
  }
  setCurrentPage((prev : any)=>prev+1);
}
  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > panigation.start) {
    pageIncrementEllipses = (
      <li onClick={() => onNextClick()}>&hellip;</li>
    );
  }
  let pageDecremenEllipses = null;
  if (panigation.end >= 1) {
    pageDecremenEllipses = (
      <li onClick={() => onPrevClick()}>&hellip;</li>
    );
  }

  useEffect(() => {
    const value = showPerPage * currentPage;
    onPanigationChange(value - showPerPage, value);
  }, [currentPage]);

  return (
    <>
      <div className="panigation">
        <button className="prev" onClick={() => onPrevClick()}>
          Previous
        </button>
        <span className="pager">
          <ul>
            {pageDecremenEllipses}
            {pageNumbers}
            {pageIncrementEllipses}
          </ul>
        </span>
        <button className="next" onClick={() => onNextClick()}>
          Next
        </button>
      </div>
    </>
  );
};

export default Panigation;
