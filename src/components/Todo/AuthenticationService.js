import axios from "axios"


class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log("AuthenticationService.registerSucessfulLogin()");

        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

        sessionStorage.setItem("authenticatedUser", username);
        sessionStorage.setItem("password", password);

        this.setupAxiosInterceptors(basicAuthHeader);
    }

    registerSuccessfulLoginForJwt(username,token) {
        console.log("AuthenticationService.registerSuccessfulLoginForJwt()");

        sessionStorage.setItem('authenticatedUser', username);

        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token) {
        return "Bearer " +  token;
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
        sessionStorage.removeItem("password");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");

        // return user !== null;

        if (user === null)
            return false;

        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("authenticatedUser");

        if (user === null)
            return "";
        else
            return user;
    }

    setupAxiosInterceptors(token) {
        // let username = "user";
        // let password = "123";
        //
        // let basciAuthenticationHeader = "Basic " + window.btoa(username + ":" + password);

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    // config.headers.authorization = basicAuthHeader;
                    config.headers.authorization = token;
                }

                return config;
            }
        )
    }

    executeJwtAuthenticationService(username, password){
        return axios.post("http://localhost:8080/authenticate", {
            username,
            password
        });
    }
}


export default new AuthenticationService();
