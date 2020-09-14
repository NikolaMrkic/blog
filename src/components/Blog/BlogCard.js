import { React, Grid, Button, Image, useDispatch, _ } from "../../global";
import BLOG from "../../redux/actions/index";

const BlogCard = (props) => {
  const { showModalForEdit } = props;
  const dispatch = useDispatch();

  const handlerForDelete = (blogForDelete) => {
    const id = blogForDelete.id;
    dispatch(BLOG.delete(id));
  };

  let blogs = props.blogs;
  let search = props.search;
  if (blogs) {
    // sortedBlogs = _.orderBy(sortedBlogs, "updatedAt", "desc");
    let filteredBlogs = blogs.filter((blog) => {
      return blog.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <div>
        {filteredBlogs.map((data, index) => {
          return (
            <div className="blogCard-container" key={data.id}>
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
                  <p>Posted date: {data.createdAt} by Some person</p>
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
  } else {
    return <div></div>;
  }
};

export default BlogCard;
