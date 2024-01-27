export const statusOptions = {
    FORM: "form",
    SUBMITTING: "submitting",
    COMPLETED: "completed",
    ERROR: "error"
};

export const statusMessages = {
    COMPLETED: "Köszönjük jelentkezésedet.",
    ERROR: "A küldés során hiba történt."
};

export const validationMessages = {
    name: {
        required: "Név megadása kötelező",
        length: "A név hossza minimum 3, maximum karakter lehet"
    },
    email: {
        required: "Érvényes e-mail cím megadása kötelező"
    },
    message: {
        required: "Üzenet megadása kötelező",
        length: "Az üzenet hossza maximum 500 karakter lehet"
    },
};