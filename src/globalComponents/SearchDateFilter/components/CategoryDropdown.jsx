import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-down-dropdown.svg";

const CategoryDropdown = ({ changeCategory,categoryData}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const getCategory = (category) => {

    setSelectedCategory(category.name);
    setOpenDropdown(false);
    changeCategory(category._id)
  };
  

  return (
    <div className={`global-category-dropdown category-dropdown ${openDropdown ? "active" : ""}`}>
      <div
        className="dropdown-head"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <h2>
          {selectedCategory ? selectedCategory : "Bütün kateqoriyalar"}
        </h2>{" "}
        <div className="arrow-icon">
          <ArrowIcon />
        </div>
      </div>

      <div className="dropdown-body">
        <ul>
          {categoryData.map((item, index) => (
            <li key={item._id} onClick={() => getCategory(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryDropdown;
