import { React, Link } from "../../global";

const categoryTitle = "Blog Categories";

const CategoryCard = (props) => {
  const categories = [
    {
      link: "/category_1",
      categoryName: "Category 1",
    },
    {
      link: "/category_2",
      categoryName: "Category 2",
    },
    {
      link: "/category_3",
      categoryName: "Category 3",
    },
  ];

  return (
    <div>
      <div className="categoryCard">
        <div className="categoryCard-categories">
          <p>{categoryTitle}</p>
          {categories.map((data, index) => {
            return (
              <div key={index}>
                <Link className="link" to={data.link}>
                  {data.categoryName}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
