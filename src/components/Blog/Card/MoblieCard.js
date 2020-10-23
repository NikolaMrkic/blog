import { React, Image, Button, useDispatch } from "../../../global";
import BLOG from "../../../redux/actions/index";

const MobileCard = ({ filteredBlogs, showModalForEdit }) => {
  const dispatch = useDispatch();

  const handlerForDelete = (blogForDelete) => {
    const id = blogForDelete.id;
    dispatch(BLOG.delete(id));
  };

  return (
    <div>
      {filteredBlogs.map((data, index) => {
        let color = index % 2 === 0 ? "white" : "silver";
        return (
          <div
            className="blogCard-container"
            key={index}
            style={{
              background: color,
            }}
          >
            <div className="blogCard-smallImage">
              <Image src={require("../../../assets/no-found-image80x80.png")} />
              <div className="blogCard-butons">
                <Button secondary onClick={() => showModalForEdit(data)}>
                  Edit
                </Button>
                <Button secondary onClick={() => handlerForDelete(data)}>
                  Delete
                </Button>
              </div>
            </div>

            <h1>{data.title}</h1>
            <p>Posted date: {data.createdAt} by Some person</p>

            <div>
              <big>{data.text}</big>
            </div>
            <div className="blogCard-mediumImage">
              <div className="blogCard-mediumImage-right">
                <Image
                  src={require("../../../assets/no-found-image100x100.png")}
                />
              </div>
              <div className="blogCard-mediumImage-center">
                <Image
                  src={require("../../../assets/no-found-image100x100.png")}
                />
              </div>
              <div className="blogCard-mediumImage-left">
                <Image
                  src={require("../../../assets/no-found-image100x100.png")}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCard;
