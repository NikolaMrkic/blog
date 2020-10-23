import { React, isMobile } from "../../../global";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MoblieCard";

const BlogCard = (props) => {
  const { showModalForEdit } = props;

  let blogs = props.blogs;
  let search = props.search;

  if (blogs && blogs.length > 0) {
    let filteredBlogs = blogs.filter((blog) => {
      return blog.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (!isMobile) {
      return (
        <div>
          <DesktopCard
            filteredBlogs={filteredBlogs}
            showModalForEdit={showModalForEdit}
          />
        </div>
      );
    } else {
      return (
        <div>
          <MobileCard
            filteredBlogs={filteredBlogs}
            showModalForEdit={showModalForEdit}
          />
        </div>
      );
    }
  } else {
    return (
      <div className="container">
        <p>No blogs</p>
      </div>
    );
  }
};

export default BlogCard;
