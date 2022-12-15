import httpService from "./httpService";

const commentEndpoind = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentEndpoind + payload._id,
            payload
        );
        return data;
    },
    getComments: async (pageId) => {
        const { data } = await httpService.get(commentEndpoind, {
            params: {
                orderBy: '"pageId"',
                equelTo: `"${pageId}"`
            }
        });
        return data;
    }
};

export default commentService;
