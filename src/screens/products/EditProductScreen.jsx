import { Alert } from "react-native";
import { auth } from "../../../FirebaseConfig";
import ProductForm from "../../components/products/ProductForm";
import { useProducts } from "../../context/products/useProducts";

export default function EditProductScreen({ navigation, route }) {
    const { product } = route.params;
    const { updateProduct } = useProducts();

    const handleUpdate = async (formData) => {
        try {
            updateProduct(product.id, formData);
            Alert.alert("Success", "Product updated successfully");
            navigation.navigate('Product Details', { productId: product.id });
        } catch (error) {
            console.error("Update failed:", error);
            Alert.alert("Error", "Failed to update product. Please try again.");
        }
    };

    return (
        <ProductForm
            initialValues={product}
            onSubmit={handleUpdate}
            submitLabel="Update"
        />
    );
}