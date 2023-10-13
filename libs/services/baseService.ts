import axios from "axios";

export type Response<R> = {
  statusCode: number;
  status: string;
  message: string;
  data?: R;
  code?: string;
}

const baseService = {
  fetch: async <R>(url: string, params?: any) => {
    try {
      const resp = await axios.get<Response<R>>(url, {
        params,
      });
      return resp?.data?.data;
    } catch(e) {
      console.error(e);
    }
  }
}

export default baseService;