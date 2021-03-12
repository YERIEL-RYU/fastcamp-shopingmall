import React from 'react';

const Category = (props) => {
  const { name, img, to, alt } = props;

  return (
    <div className="card product">
      <img className="card-img-top" src={img} alt={alt} />
      <div className="card-body text-center p-2">
        <a href={to} className="item-title">
          {name}
        </a>
      </div>
    </div>
  );
};

export default Category;
