import { Link } from "react-router-dom";
import { v4 } from "uuid";
import './pagination.style.css';

interface PaginationProps {
  currentPage: number;
  numberOfPages: number;
  pageLinks: string[];
}

const Pagination = ({
  currentPage,
  numberOfPages,
  pageLinks,
}: PaginationProps) => {
  const pages = Array(numberOfPages).fill(0).map(Number.call, Number);
  const pagesWithLinks = new Map();
  pages?.map((page: number | unknown, index: number) => {
      pagesWithLinks.set(page, pageLinks[index])
  });

  return (
      <nav role="navigation" aria-label="Pagination Navigation">
      <ul>
        {pages?.map((page: number | unknown) => (
          <li key={v4()}>
            <Link
              className="navigation"
              to={pagesWithLinks.get(page)}
              aria-label={`Current Page, ${currentPage}`}
              aria-current={currentPage === page}
            >
              {(page as number) + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
