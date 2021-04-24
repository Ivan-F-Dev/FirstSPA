import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2b9715a1-d8ae-497a-9821-aa6cd69b6167"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(usersId) {
        return instance.post(`follow/${usersId}`).then(response => {
            return response.data;
        });
    },
    unfollow(usersId) {
        return instance.delete(`follow/${usersId}`).then(response => {
            return response.data;
        });
    },
    getFriends(currentPage = 1, pageSize = 10, friend = true) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
            .then(response => {
                return response.data;
            })
    },
}
export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        });
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => {
            return response.data;
        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data;
        });
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {headers:{'Content-Type' : 'multipart/form-data'}}).then(response => {
            return response.data;
        });
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile).then(response => {
            return response.data;
        });
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
    login(email, password, rememberMe= false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => {
            return response.data;
        });
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        });
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(response => {
            return response.data;
        });
    },
}