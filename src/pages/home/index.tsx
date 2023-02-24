import { Link } from "react-router-dom";

const Home = () => (
    <>
    <p>Please click the button to start fill in the form</p>
    <Link to={"/contact"}>Start!</Link>
    </>
)

export default Home;