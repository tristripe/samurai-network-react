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
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`  + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {return instance.get(`auth/me`)}
}
