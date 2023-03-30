import axiosInstance from "../../src/utils/axiosInstance";
import { AxiosResponse } from "axios";

const handlerRequests = {
  getHandler: async (id: number): Promise<AxiosResponse> => {
    return await axiosInstance.get(`/api/webforms/handler`, {
      params: { id: id },
    });
  },

  toggleStatus: async (
    id: number,
    enabled: boolean
  ): Promise<AxiosResponse> => {
    return await axiosInstance.post(`/api/webforms/handler/enabled`, {
      id: id,
      enabled: enabled,
    });
  },
};

export default handlerRequests;
