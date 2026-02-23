export const validateRegisterCredentials = ({ name, email, password, confirmPassword }) => {
    const errors = {};

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    
    if (!trimmedName) {
        errors.name = 'Name is required'
    } else if (name.length < 3) {
        errors.name = 'Name must contain at least 3 characters.'
    }

    if (!trimmedEmail) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        errors.email = "Please enter a valid email address";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }  else if (!/\d/.test(password)) {
        errors.password = "Password must contain at least one digit";
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Please confirm your password'
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Password does not match initial one"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};