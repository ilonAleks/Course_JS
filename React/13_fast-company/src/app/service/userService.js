import httpService from "./httpService";

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
    }
};

export default userService;
