import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard"; // Importando o componente de card

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Requisição para buscar os produtos
    axios
      .get("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Produtos Relacionados</h1>
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
