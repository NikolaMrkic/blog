import { React } from "../global";
import Header from "../components/Header/Header";
const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <p style={{ color: "red" }}>Not Found Page</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
