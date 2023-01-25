import React, { useState } from "react";
import { createContext } from "react";

export const Shop = createContext();

//! Componente de orden superior HOC:Un Higher Order Component (HOC) es un patrón de diseño en React que permite reutilizar lógica de componentes a través de la abstracción de un componente existente en otro componente. Un HOC toma un componente como entrada y devuelve otro componente con lógica adicional. Es una técnica para compartir lógica entre componentes que no tienen una relación de jerarquía directa.

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const isInCart = isProductInCart(product.id);
    if (isInCart) {
      //Hacer algo
      //Primero vamos a encontra el producto repetido
      const productoRepetido = products.find(
        (element) => element.id === product.id
      );
      productoRepetido.quantity += product.quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, product]);
    }
  };

  const countCart = () => {
    let cantidadTotal = 0;
    for (const product of products) {
      cantidadTotal += product.quantity;
    }
    return cantidadTotal;
  };

  const isProductInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  return (
    <Shop.Provider value={{ products, addProduct, countCart }}>
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
