import httpService from "./httpService";

const qualityEndpoind = "quality/";

const qualitiesService = {
    get: async () => {
        const { data } = await httpService.get(qualityEndpoind);
        return data;
    }
};

export default qualitiesService;
