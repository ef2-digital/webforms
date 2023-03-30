import axiosInstance from "../../src/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { FormType } from "../utils/types";

const formRequests = {
  getForms: async (): Promise<AxiosResponse> => {
    const data = axiosInstance.get(`/api/webforms/forms`);

    return data;
  },

  getForm: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/form`, {
      params: { id: id },
    });
  },

  getFormSubmissions: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/form/submissions`, {
      params: { id: id },
    });
  },

  getSubmission: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/submission`, {
      params: { id: id },
    });
  },

  getModel: async () => {
    return await axiosInstance.get(`/api/webforms/form/model`);
  },

  saveForm: async (data: FormType): Promise<AxiosResponse> => {
    return await axiosInstance.post(`/api/webforms/form`, data);
  },

  deleteForm: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.delete("/api/webforms/form", {
      params: { id: id },
    });
  },

  getHandlers: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get("/api/webforms/form/handlers", {
      params: { id: id },
    });
  },
};

export default formRequests;
