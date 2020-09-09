import { React } from "../global";
import Header from "../components/Header/Header";
const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
