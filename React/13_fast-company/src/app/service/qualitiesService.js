import httpService from "./httpService";

const qualityEndpoind = "quality/";

const qualitiesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoind);
        return data;
    }
};

export default qualitiesService;
