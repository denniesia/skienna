import { auth } from "../../../FirebaseConfig";
import ProductForm from "../../components/products/ProductForm";
import { productService } from "../../services";

export default function AddProductScreen({ navigation }) {

  const handleAdd = async (formData) => {
    const userId = auth.currentUser.uid;

    await productService.addProduct(userId, formData);
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