import { createContext, useEffect, useState } from "react";
import { productService } from "../../services";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";


export const ProductContext = createContext({
    products: [],
    loading: true,

});


export function ProductProvider({children}) {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const data = await productService.getUserProducts(user.uid);
                setProduct(data);
            } catch (err) {
                console.error("Error fetching products", err);
            } finally {
                setLoading(false);
            }
        });

        return unsubscribe;
    } , []);


    const contextValue = {
        products,
        loading,
    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )

};

