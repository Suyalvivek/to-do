// Validates that name starts with a letter, followed by letters/numbers/underscores (3–16 chars)
export function validateName(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    return regex.test(str) ? "" : "invalid";
}

// Validates description is at least 3 characters long and alphanumeric (same rule as name)
export function validateDesc(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_ ]{2,}$/; // allows spaces too
    return regex.test(str) ? "" : "invalid";
}

// Validates numeric ID (1–5 digits)
export function validateId(str) {
    const regex = /^[0-9]{1,5}$/;
    return regex.test(str) ? "" : "invalid";
}

// Ensures date is not empty
export function validateDate(str) {
    return str.trim() ? "" : "invalid";
}

// Ensures time is not empty
export function validateTime(str) {
    return str.trim() ? "" : "invalid";
}

// Checks if photo URL is valid (http/https)
export function validatePhoto(str) {
    try {
        const url = new URL(str);
        return (url.protocol === "http:" || url.protocol === "https:") ? "" : "invalid";
    } catch {
        return "invalid";
    }
}