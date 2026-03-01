import ProductForm from "../../components/products/ProductForm";
import { useProducts } from "../../context/products/useProducts";


export default function AddProductScreen({ navigation }) {
    const { addProduct } = useProducts();

    const handleAdd = async (formData) => {
        addProduct(formData); 
        navigation.goBack();
    };
    return (
        <ProductForm
            initialValues={{}}
            onSubmit={handleAdd}
            submitLabel="Save"
        />
    );
}