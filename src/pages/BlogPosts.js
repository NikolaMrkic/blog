import { React, Component, Grid, connect } from "../global";
import Header from "../components/Header/Header";
import BlogCard from "../components/Blog/BlogCard";
import ApplicationMessage from "../components/Message/AplicationMessage";
import CategoryCard from "../components/Category/CategoryCard";
import BLOG from "../redux/actions/index";

class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
      blogForEdit: {},
      editabileForm: false,
    };
    this.showModalForEdit = this.showModalForEdit.bind(this);
    this.clsoeModal = this.clsoeModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const closeModalAfterUpdate = newProps.getBlogsAction.type;
    const successReturning = newProps.getBlogsAction.payload.fetching;
    const typeForReturningBlogs = "BLOG_GET";
    if (closeModalAfterUpdate === typeForReturningBlogs && successReturning) {
      this.setState({
        isVisibleModal: false,
        editabileForm: false,
      });
    }
  }

  showModalForEdit(blog) {
    this.setState({
      isVisibleModal: true,
      blogForEdit: blog,
      editabileForm: true,
    });
  }

  clsoeModal() {
    this.setState({
      isVisibleModal: false,
    });
  }

  render() {
    const { blogsArray } = this.props;
    const { isVisibleModal, blogForEdit, editabileForm } = this.state;
    return (
      <div>
        <Header />
        <div className="blogPost-container">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}></Grid.Column>

              <Grid.Column width={14}>
                <ApplicationMessage
                  clsoeModal={isVisibleModal}
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
                <BlogCard
                  blogs={blogsArray}
                  clsoeModal={this.clsoeModal}
                  showModalForEdit={this.showModalForEdit}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const fetchingBlogSuccess = state.blogState.success;
  console.log("state", state);
  // Redux Store --> Component
  if (fetchingBlogSuccess) {
    const blogsArray = state.blogState.blogs.resultData;

    return {
      blogsArray: blogsArray,
    };
  }
};

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return {
    getBlogsAction: dispatch(BLOG.request()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts);
