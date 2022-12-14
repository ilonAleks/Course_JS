import httpService from "./httpService";
import localStorageService from "./localStorageService";

const userEndpoind = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoind);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndpoind + payload._id,
            payload
        );
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoind + localStorageService.getUserId()
        );
        return data;
    }
};

export default userService;
