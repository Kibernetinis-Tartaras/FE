import AuthService from "../Services/authService";

export const useUserValidation = () => {
  const currentUser = AuthService.getCurrentUser();
  if (!currentUser) {
    return false;
  }
  if (currentUser) {
    if (!AuthService.doesExist(currentUser)) {
        return false;
    }
  }
  return true;
};
