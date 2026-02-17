export const validateProduct = ({ name, brand, category, openedOn, expiresInMonths=null, notes=''}) => {

    if (!name) {
        return { valid: false, message: "Name is required." };
    }

    if (!brand) {
        return { valid: false, message: "Brand is required." };
    }

    if (!category) {
        return { valid: false, message: "Category is required." };
    }

    if (name.length < 5) {
        return { valid: false, message: "Name must be at least 5 characters." };
    }

    if (expiresInMonths && expiresInMonths < 0) {
        return { valid: false, message: "Please enter a valid number for 'Expires in' field." };
    }
    
    if (notes && notes.length < 10) {
        return { valid: false, message: "Notes must be at most 10 characters" };
    }
    return { valid: true };
};