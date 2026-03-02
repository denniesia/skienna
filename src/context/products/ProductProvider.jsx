import { createContext, useEffect, useState } from "react";
import { productService } from "../../services";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { addProduct } from "../../services/productService";


export const ProductContext = createContext({
    products: [],
    loading: true,
    addProduct(productData) {},
    getUserProductById(productId) {},
    reloadProducts: async() => {},
    updateProduct(productId) {},
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

    const addProduct = async (productData) => {
        const user = auth.currentUser;
        if (!user) return;

        const newProduct = await productService.addProduct(user.uid, productData);
        setProducts((prev) => [newProduct, ...prev]);
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
    } , []);

    const updateProduct = async (productId, updatedData) => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            await productService.updateProduct(user.uid, productId, updatedData);

            setProducts((oldProducts) =>
                oldProducts.map((product) =>
                    product.id === productId
                        ? { ...product, ...updatedData }
                        : product
                )
            );
        } catch (err) {
            console.error("Error updating product", err);
        }
    };


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
        addProduct,
        getUserProductById, 
        reloadProducts,
        updateProduct,
        deleteProduct,
    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )

};

