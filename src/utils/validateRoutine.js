export const validateRoutine = ({ category, startedOn, name = '', notes = '' }) => {

     if (!category) {
        return { valid: false, message: "Category is required." };
    }

    if (!startedOn) {
        return { valid: false, message: "Start date is required." };
    }

    if (category === "Special" && !name) {
        return { valid: false, message: "Name is required for Special routines" };
    }

    if (category === "Special" && name.length < 5) {
        return { valid: false, message: "Name must be at most 5 characters" };
    }

    if (notes.length < 10) {
        return { valid: false, message: "Notes must be at least 10 characters" };
    }
    return { valid: true };
};