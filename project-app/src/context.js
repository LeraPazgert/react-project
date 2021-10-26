import React, { useState, useEffect, useCallback } from "react";
import { ARTS, detailProduct } from "./constans/arts";
export const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [state, setState] = useState({
    storeProducts: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    editOpen: false,
    editProduct: detailProduct,
    orderOpen: false,
    isAdmin: false,
  });

  useEffect(() => {
    let storeProducts = [];
    ARTS.forEach(item => {
      const singleItem = { ...item };
      storeProducts = [...storeProducts, singleItem];
    });
    setState(
      { ...state, storeProducts }
    );
  }, []);
  const admin = () => {
    setState(
      { ...state, isAdmin: true }
    );
  }
  const user = () => {
    setState(
      { ...state, isAdmin: false }
    );
  };
  const getItem = id => {
    const product = state.storeProducts.find(item => item.id === id);
    return product;
  };
  const handleDetail = (id) => () => {
    const product = getItem(id);
    setState(
      {
        ...state,
        detailProduct: product
      }
    );
  };
  const addToCart = id => {
    let tempProducts = [...state.storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.countInCart = 1;
    const price = product.price;
    product.total = price;
    setState({
      ...state,
      storeProducts: [...tempProducts],
      detailProduct: { ...product }
    });
    setCart([...cart, product]);
  };
  useEffect(() => {
    addTotals()
  }, [state, cart]);
  const openModal = id => {
    const product = getItem(id);
    setState(
      { ...state, modalProduct: product, modalOpen: true }
    );
  };
  const closeModal = () => {
    setState(
      { ...state, modalOpen: false }
    );
  };
  const increment = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.countInCart = product.countInCart + 1;
    product.total = product.countInCart * product.price;
    setCart(tempCart);
  };
  const decrement = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.countInCart = product.countInCart - 1;
    if (product.countInCart === 0) {
      removeItem(id);
    } else {
      product.total = product.countInCart * product.price;
      setCart(tempCart);
    }
  };
  const getTotals = useCallback(() => {
    let total = 0;
    cart.map(item => (total += item.total));
    let productsInCart = 0;
    cart.map(item => (productsInCart += item.countInCart));
    return {
      total,
      productsInCart
    };
  }, [cart]);

  const addTotals = () => {
    const totals = getTotals();
    setCartTotal(totals.total);
    setCartProducts(totals.productsInCart);
  };

  const removeItem = id => {
    let tempProducts = [...state.storeProducts];
    let tempCart = [...cart];
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.countInCart = 0;
    removedProduct.total = 0;
    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });
    setState({
      ...state,
      storeProducts: [...tempProducts]
    });
    setCart(tempCart);
  };
  const deleteItem = (id) => () => {
    let tempProducts = [...state.storeProducts];
    tempProducts = tempProducts.filter(item => {
      return item.id !== id;
    });
    setState({
      ...state,
      storeProducts: [...tempProducts],
      editOpen: false
    });
  };
  const openEdit = id => {
    const product = getItem(id);
    setState(
      { ...state, editProduct: product, editOpen: true }
    );
  };
  const closeEdit = () => {
    setState(
      { ...state, editOpen: false }
    );
  };
  const onEdit = (editedItems) => {
    let tempProducts = [...state.storeProducts];
    tempProducts = tempProducts.map(item => {
      if (item.id === editedItems.id) {
        return { ...editedItems }
      } return item;
    });
    setState({
      ...state, storeProducts: tempProducts, editOpen: false
    })
  };
  const onAdd = (obj) => {
    let tempProducts = [...state.storeProducts];
    let newItem = obj
    setState(
      {
        ...state,
        storeProducts: [...tempProducts, newItem]
      });
  };
  const openOrder = () => {
    setState(
      { ...state, orderOpen: true }
    );
  };
  const closeOrder = () => {
    setState(
      {
        ...state,
        orderOpen: false
      }
    );
    setCart([]);
  };
  return (
    <ProductContext.Provider
      value={{
        ...state,
        cart,
        cartProducts,
        cartTotal,
        handleDetail,
        addToCart,
        increment,
        decrement,
        removeItem,
        deleteItem,
        openModal,
        closeModal,
        openEdit,
        closeEdit,
        onEdit,
        onAdd,
        openOrder,
        closeOrder,
        admin,
        user,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
