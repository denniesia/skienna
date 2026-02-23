export const validateRoutine = ({ category, startedOn, name = '', notes = '' }) => {

     if (!category) {
        return { isValid: false, message: "Category is required." };
    }

    if (!startedOn) {
        return { isValid: false, message: "Start date is required." };
    }

    if (category === "Special" && !name) {
        return { isValid: false, message: "Name is required for Special routines" };
    }

    if (category === "Special" && name.length < 5) {
        return { isValid: false, message: "Name must be at most 5 characters" };
    }

    if (notes && notes.length < 10) {
        return { isValid: false, message: "Notes must be at least 10 characters" };
    }
    return { isValid: true };
};