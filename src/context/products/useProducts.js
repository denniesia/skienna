import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

export function useProducts() {
    const context = useContext(ProductContext);

    return context;
}