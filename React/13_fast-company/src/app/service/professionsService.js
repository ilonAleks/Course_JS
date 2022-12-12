import httpService from "./httpService";

const professionsEndpoind = "profession/";

const professionsService = {
    get: async () => {
        const { data } = await httpService.get(professionsEndpoind);
        return data;
    }
};

export default professionsService;
