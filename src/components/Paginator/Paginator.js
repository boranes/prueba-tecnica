import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import StyledDefaultLink from "../../styled-components/Links/StyledDefaultLink";
import StyledPaginator from "../../styled-components/Paginator/StyledPaginator";

const Paginator = ({ totalPages, currentPage, setCurrentPage }) => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const pagesToShow = 3;

  const printArrow = (showArrow, icon, callback) => {
    return showArrow ? (
      <>
        <li>
          <StyledDefaultLink padding="5px" to="#" onClick={() => callback()}>
            <FontAwesomeIcon className="arrow-icon" icon={icon} />
          </StyledDefaultLink>
        </li>
      </>
    ) : (
      <></>
    );
  };

  const buildPaginator = () => {
    let min = 0;
    let max = 0;

    /* On the center */
    if (showPrevArrow && showNextArrow) {
      min = Math.ceil(currentPage - pagesToShow / 2);
      max = Math.floor(currentPage + pagesToShow / 2) + 1;
    }

    /* Near the beginning */
    if (!showPrevArrow) {
      min = 1;
      max = min + pagesToShow;
    }

    /* Near the end */
    if (!showNextArrow) {
      min = totalPages > pagesToShow ? totalPages - pagesToShow + 1 : 1;
      max = totalPages + 1;
    }

    return [...Array(totalPages + 1).keys()].slice(min, max).map((numPage) => {
      const activeClass = numPage === currentPage ? "active" : "";
      return (
        <li key={numPage}>
          <StyledDefaultLink
            padding="5px"
            to="#"
            onClick={() => setCurrentPage(numPage)}
            className={activeClass}
          >
            {numPage}
          </StyledDefaultLink>
        </li>
      );
    });
  };

  useEffect(() => {
    setShowPrevArrow(currentPage >= pagesToShow && totalPages > pagesToShow);
    setShowNextArrow(
      currentPage <= totalPages - pagesToShow + 1 && totalPages > pagesToShow
    );
  }, [currentPage, totalPages]);

  return (
    <StyledPaginator>
      {printArrow(showPrevArrow, faAnglesLeft, () => setCurrentPage(1))}
      {printArrow(showPrevArrow, faAngleLeft, () =>
        setCurrentPage(currentPage - 1)
      )}
      {buildPaginator()}
      {printArrow(showNextArrow, faAngleRight, () =>
        setCurrentPage(currentPage + 1)
      )}
      {printArrow(showNextArrow, faAnglesRight, () =>
        setCurrentPage(totalPages)
      )}
    </StyledPaginator>
  );
};

export default Paginator;
