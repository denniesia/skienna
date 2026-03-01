import { auth } from "../../../FirebaseConfig";
import ProductForm from "../../components/products/ProductForm";
import { useProducts } from "../../context/products/useProducts";
import { productService } from "../../services";

export default function AddProductScreen({ navigation }) {
  const { addProduct } = useProducts();

  const handleAdd = async (formData) => {
    await addProduct(formData); // ✅ use context
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