import { React, Grid, Card, Segment, Button, Image } from "../../global";

const blogs = [
  {
    title: "Blog Post 1",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Blog Post 2",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    title: "Blog Post 3",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const BlogCard = (props) => {
  return (
    <div>
      {blogs.map((data, index) => {
        console.log("data", data);
        console.log("index", index);
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
                  <Button secondary>Edit</Button>
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
};

export default BlogCard;
