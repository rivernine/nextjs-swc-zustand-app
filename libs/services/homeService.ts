import baseService from "./baseService";

const homeService = {
  fetchSample: async () => {
    const resp = await baseService.fetch<any>("/sample");
    return resp;
  },
}

export default homeService;