import axios from "axios";
import { v4 as uuid } from "uuid";
import { APP_BASE_URL } from "../Constants/Constants";

const API_URL = `${APP_BASE_URL}/appointment/`;
const Axios = axios.create({
  baseURL: API_URL,
});
const options = {
  headers: {
    appID: "BACKOFFICE",
    "Content-Type": "application/json",
    "X-Request-Id": `${uuid()}`,
    // "Accept-Language": i18next.language,
  },
};

class AppointmentManagementService {
  async fetchAppointmentByEmailId(payload) {
    const url = `unified/v1/get?emailId=${payload.emailId}`;
    const response = Axios.get(url, options);
    return response;
  }

  async fetchNextStepRole(payload) {
    const url = `fetch/next-assignee-role/${payload}`;
    const response = Axios.post(url, payload, options);
    return response;
  }
}

const appointmentManagement = new AppointmentManagementService();
export default appointmentManagement;
