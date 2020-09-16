import { React, Component, Grid, connect, isMobile } from "../global";
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
      search: "",
    };
    this.showModalForEdit = this.showModalForEdit.bind(this);
    this.clsoeModal = this.clsoeModal.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
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

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { blogsArray } = this.props;
    const { isVisibleModal, blogForEdit, editabileForm, search } = this.state;
    if (!isMobile) {
      return (
        <div>
          <Header search={search} updateSearch={this.updateSearch} />
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
                    blogsMessage={blogsArray}
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
                    search={search}
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
    } else {
      return (
        <div>
          <Header search={search} updateSearch={this.updateSearch} />
          <div className="blogPost-container">
            <div className="wrapper-message">
              <ApplicationMessage
                clsoeModal={isVisibleModal}
                showModal={isVisibleModal}
                blogForEdit={blogForEdit}
                editabileForm={editabileForm}
              />
            </div>
            <div>
              <CategoryCard />
            </div>
            <div>
              <BlogCard
                search={search}
                blogs={blogsArray}
                clsoeModal={this.clsoeModal}
                showModalForEdit={this.showModalForEdit}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const fetchingBlogSuccess = state.blogState.success;
  // Redux Store --> Component
  if (fetchingBlogSuccess) {
    const blogsArray = state.blogState.blogs.resultData;
    const blogsMessage = state.blogState.message;
    return {
      blogsArray: blogsArray,
      message: blogsMessage,
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
