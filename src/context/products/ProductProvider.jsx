import { createContext, useEffect, useState } from "react";
import { productService } from "../../services";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";


export const ProductContext = createContext({
    products: [],
    loading: true,
    getUserProductById(productId) {},
    reloadProducts: async() => {},
    deleteProduct(userId, productId) {},
});


export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProducts = async(userId) => {
        setLoading(true);
        try {
            const data = await productService.getUserProducts(userId);
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products", err)
        } finally {
            setLoading(false);
        }
    }

    const reloadProducts = async() => {
        const user = auth.currentUser;

        if (user) {
            await loadProducts(user.uid)
        }
    }; 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (user) {
                await loadProducts(user.uid)
            } else {
                setProducts([]);
                setLoading(false);
            }
        });

        return unsubscribe;
    } , [products]);

    const getUserProductById = (productId) => {
        return products.find(p => p.id === productId);
    }

    const deleteProduct = async(productId) => {
        const user = auth.currentUser;
        if (!user) return;
        
        try {
            await productService.deleteProduct(user.uid, productId);
            setProducts((oldProducts) => oldProducts.filter(product => product.id !== productId));
        } catch(err) {
            console.error("Error deleting product", err);
        }
    }


    const contextValue = {
        products,
        loading,
        getUserProductById, 
        reloadProducts,
        deleteProduct,
    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )

};

