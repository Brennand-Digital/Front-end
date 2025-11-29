export const getToken = () => localStorage.getItem("token");
export const isAuthenticated = () => !!getToken();
export const logout = () => localStorage.removeItem("token");
export const getEmail = () => localStorage.getItem("brennand_email");
export const isAdmin = () => getEmail() === "admin@admin.com";
