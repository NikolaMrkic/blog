import { React, Component, Grid, Segment, Message, Button } from "../global";
import Header from "../components/Header/Header";
import BlogCart from "../components/Blog/BlogCard";
import ApplicationMessage from "../components/Message/AplicationMessage";
import CategoryCard from "../components/Category/CategoryCard";
class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
      blogForEdit: {},
      editabileForm: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(blog) {
    this.setState({
      isVisibleModal: true,
      blogForEdit: blog,
      editabileForm: true,
    });
  }

  render() {
    const { isVisibleModal, blogForEdit, editabileForm } = this.state;

    const blogPosts = [
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
    return (
      <div>
        <Header />
        <div className="blogPost-container">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}></Grid.Column>

              <Grid.Column width={14}>
                <ApplicationMessage
                  showModal={isVisibleModal}
                  blogForEdit={blogForEdit}
                  editabileForm={editabileForm}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <CategoryCard />
              </Grid.Column>

              <Grid.Column width={14}>
                <BlogCart blogs={blogPosts} showModal={this.showModal} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default BlogPosts;
