import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'fd8f8e57-30ff-4cd5-b17b-a15c19849e71'
    },
    withCredentials: true
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUser(userId = 2) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            });
    },
    followUser(userId = 2) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
        });
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                return response.data;
         });
    }

}
