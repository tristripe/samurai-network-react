import * as axios from 'axios';
import {setCurrentPage} from "../redux/usersReducer";

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
    unfollowUser(userId = 2) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId = 2) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {return instance.get(`auth/me`)}
}
