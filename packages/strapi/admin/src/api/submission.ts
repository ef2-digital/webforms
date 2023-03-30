import axiosInstance from "../../src/utils/axiosInstance";
import { AxiosResponse } from "axios";

const submissionRequests = {
  getSubmissions: async (): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/submissions`);
  },

  getSubmission: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/submission`, {
      params: { id: id },
    });
  },
};

export default submissionRequests;
