import { Alert } from "react-native";
import { auth } from "../../../FirebaseConfig";
import ProductForm from "../../components/products/ProductForm";
import { productService } from "../../services";

export default function EditProductScreen({ navigation, route }) {
    const { product } = route.params;

    const handleUpdate = async (formData) => {
        try {
            const user = auth.currentUser;
            if (!user) {
                Alert.alert("Error", "You must be logged in");
                return;
            }
            
            await productService.updateProduct(user.uid, product.id, formData);
            Alert.alert("Success", "Product updated successfully");
            navigation.goBack();
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