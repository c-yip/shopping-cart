import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";
import deleteSymbol from "../images/delete-symbol.png";

export default function Clothing() {
  const {
    storeData,
    storeItemId,
    cart,
    removeFromCart,
    addQuantity,
    subtractQuantity,
  } = useContext(Context);

  const { convertPrice } = useHooks();

  const [sum, setSum] = useState();

  return <h1 className="page-title">Clothing</h1>;
}
