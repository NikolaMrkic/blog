import { React, Component, Grid, Segment, Message, Button } from "../global";
import Header from "../components/Header/Header";
import BlogCart from "../components/Blog/BlogCard";
import ApplicationMessage from "../components/Message/AplicationMessage";
import CategoryCard from "../components/Category/CategoryCard";
class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="blogPost-container">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}></Grid.Column>

              <Grid.Column width={14}>
                <ApplicationMessage />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <CategoryCard />
              </Grid.Column>

              <Grid.Column width={14}>
                <BlogCart />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default BlogPosts;
