export const validateProduct = ({ name, brand, category, openedOn='', expiresInMonths=null, notes=''}) => {

    if (!name) {
        return { isValid: false, message: "Name is required." };
    }

    if (!brand) {
        return { isValid: false, message: "Brand is required." };
    }

    if (!category) {
        return { isValid: false, message: "Category is required." };
    }

    if (name.length < 5) {
        return { isValid: false, message: "Name must be at least 5 characters." };
    }

    if (expiresInMonths && expiresInMonths < 0) {
        return { isValid: false, message: "Please enter a valid number for 'Expires in' field." };
    }
    
    if (notes && notes.length < 10) {
        return { isValid: false, message: "Notes must be at least 10 characters" };
    }
    return { isValid: true };
};