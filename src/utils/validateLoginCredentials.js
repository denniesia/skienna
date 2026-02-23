export const validateLoginCredentials = ({ email, password }) => {
    const errors = {};

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        errors.email = "Please enter a valid email address";
    }

    if (!password) {
        errors.password = "Password is required";
    } 

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};