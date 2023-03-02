import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, name, category, description, image } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <span className="card-read">read more</span>
                    <img src={image} alt="image" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
