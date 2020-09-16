import {
  React,
  Image,
  Button,
  useDispatch,
  Grid,
  useState,
} from "../../global";
import BLOG from "../../redux/actions/index";

const DesktopCard = ({ filteredBlogs, showModalForEdit }) => {
  const dispatch = useDispatch();

  const handlerForDelete = (blogForDelete) => {
    const id = blogForDelete.id;
    dispatch(BLOG.delete(id));
  };
  const colors = ["white", "silver"];
  return (
    <div>
      {filteredBlogs.map((data, index) => {
        const event = new Date(data.createdAt);
        return (
          <div
            id="blog"
            className="blogCard-container"
            key={index}
            style={{
              background: colors[index],
            }}
          >
            <Grid width={16}>
              <Grid.Column width={2}>
                <div className="blogCard-smallImage">
                  <Image
                    src={require("../../assets/no-found-image80x80.png")}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={11}>
                <h1>{data.title}</h1>
                <p>Posted date: {event.toUTCString()} by Some person</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <div className="blogCard-butons">
                  <Button secondary onClick={() => showModalForEdit(data)}>
                    Edit
                  </Button>
                  <Button secondary onClick={() => handlerForDelete(data)}>
                    Delete
                  </Button>
                </div>
              </Grid.Column>
            </Grid>
            <Grid width={16}>
              <Grid.Column width={16}>
                <div>
                  <big>{data.text}</big>
                </div>
              </Grid.Column>
            </Grid>
            <div className="blogCard-mediumImage">
              <Grid width={16}>
                <Grid.Column width={5}>
                  <div className="blogCard-mediumImage-right">
                    <Image
                      src={require("../../assets/no-found-image100x100.png")}
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={5}>
                  <div className="blogCard-mediumImage-center">
                    <Image
                      src={require("../../assets/no-found-image100x100.png")}
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={5}>
                  <div className="blogCard-mediumImage-left">
                    <Image
                      src={require("../../assets/no-found-image100x100.png")}
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopCard;
