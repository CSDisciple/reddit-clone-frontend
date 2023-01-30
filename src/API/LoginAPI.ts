import axios from "axios";
import { LoginType, AuthenticationResponse } from "./Interfaces/PostInterfaces";

const API_BASE_URL = "http://localhost:8080/api";
const loginURL = API_BASE_URL + "/auth/login";
let bearerToken: string;
let refreshToken: string;
class LoginAPI {
    logInToken(loginInfo: LoginType) {
        const configTwo = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };
        
        try {
            axios.post<AuthenticationResponse>(loginURL, loginInfo, configTwo).then((response) => {
                bearerToken = response.data.authenticationToken;
                refreshToken = response.data.refreshToken;
            })
        } catch (e) {
            alert(e);
        }

        return bearerToken;
    }
}
export default new LoginAPI();