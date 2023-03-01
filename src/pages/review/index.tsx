import Pagination from "../../components/pagination";

const Review = () => (
  <>
    <h2>Review!</h2>
    <Pagination
      currentPage={3}
      numberOfPages={3}
      pageLinks={["/contact", "/pokemon", "/review"]}
    />
  </>
);

export default Review;
