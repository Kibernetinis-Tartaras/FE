import axios from "axios"
import { LoginProps } from "../Dto/LoginProps";
import { SignupProps }from "../Dto/SignupProps";

const API_URL = "http://localhost:7112/api/user";

class AuthService {
    login(loginProps: LoginProps) {
        return axios
          .post(API_URL + "/login", {loginProps})
          .then(response => {
            if (response.data.userId) {
              sessionStorage.setItem("user", JSON.stringify(response.data.userId));
            }
    
            return response.data;
          });
    }
    
    logout() {
        sessionStorage.removeItem("user");
        sessionStorage.clear();
    }
    
    register(signupProps: SignupProps){
        return axios.post(API_URL + "/register", {signupProps})
            .then(response => response.data);
    }
    
    getCurrentUser() {
        return sessionStorage.getItem('user');
    }

    doesExist(userId: string) {
        return axios
          .post(API_URL + "/exists", {
            userId : userId
          })
          .then(response => {
            return response.data;
          })
    }
}

export default new AuthService();