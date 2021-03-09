import axios from "axios";

class LoginAndRegistrationService {
  login(user) {
    const url = "http://localhost:8080/login";
    const data = user;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(url, data, headers);
  }

  registerCustomer(applicationUser) {
    const url = "http://localhost:8080/api/v1/register/customer";
    const data = applicationUser;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.put(url, data, headers);
  }

  registerVendor(vendorId, applicationUser) {
    const url = "http://localhost:8080/api/v1/register/vendor";
    const data = { "vendorId": vendorId, applicationUser };
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.put(url, data, headers);
  }

}

export default new LoginAndRegistrationService();