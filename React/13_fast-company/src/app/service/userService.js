import httpService from "./httpService";

const userEndpoind = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoind);
        return data;
    }
};

export default userService;
