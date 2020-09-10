import { React, Grid, Button, Image } from "../../global";

const BlogCard = (props) => {
  const { showModal } = props;
  if (props.blogs) {
    return (
      <div>
        {props.blogs.map((data, index) => {
          return (
            <div className="blogCard-container" key={data.index}>
              <Grid width={16}>
                <Grid.Column width={2}>
                  <div className="blogCard-smallImage">
                    <Image
                      src={require("../../assets/no-found-image80x80.png")}
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={11}>
                  <title>{data.title}</title>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </Grid.Column>
                <Grid.Column width={3}>
                  <div className="blogCard-butons">
                    <Button secondary onClick={() => showModal(data)}>
                      Edit
                    </Button>
                    <Button secondary>Delete</Button>
                  </div>
                </Grid.Column>
              </Grid>

              <Grid width={16}>
                <Grid.Column width={16}>
                  <div>
                    <big>{data.description}</big>
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
