import * as HttpRequest from '~/utils/httpRequest';
export const getFollowing = async ({ page }) => {
    try {
        const res = await HttpRequest.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
