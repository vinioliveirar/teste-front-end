import React from "react";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <img src={product.photo} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{product.descriptionShort}</p>
      <span>{`R$ ${product.price.toFixed(2)}`}</span>
    </div>
  );
};

export default ProductCard;
