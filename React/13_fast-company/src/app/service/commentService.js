import httpService from "./httpService";

const commentEndpoind = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentEndpoind + payload._id,
            payload
        );
        return data;
    }
};

export default commentService;
