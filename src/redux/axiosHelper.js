import axios from "axios";
import { notification } from "antd";
import { clearToken } from "../helpers/utility";
import { history } from "./store";
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Gets the headers.
 *
 */
const getHeaders = () => {
    let authToken = localStorage.auth_token ? localStorage.auth_token : null;

    let config = {
        headers: {
            Accept: "application/json"
        }
    };
    if (authToken) {
        config.headers.Authorization = authToken;
    }

    return config;
};

const checkError = error => {
    if (error.response && error.response.data) {
        let { data } = error.response;
        if (data.error) {
            // let description = formatValidation(data.error);
            // notification["error"]({
            //     message: data.message,
            //     description: description
            // });
        } else {
            notification["error"]({
                message: data.message
            });
        }
    } else {
        notification["error"]({
            message: error.message
        });
    }
    if (error.response) {
        if (error.response.status === 401) {
            clearToken();
            history.push("/");
        }
    }
};

const successMessage = (message = "Success") => {
    notification.success({
        message
    });
};

/**
 * Get call from Axios
 *
 * @param      {String}  url
 * @return     {Promise}
 */
const axiosGet = async url => {
    try {
        return await axios.get(`${BASE_URL}/${url}`, getHeaders());
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};
/**
 * Post request from axios
 *
 * @param      {(Array|Object)}  data
 * @param      {String}          url
 * @return     {Promise}
 */
const axiosPost = async (data, url) => {
    try {
        let request = await axios.post(
            `${BASE_URL}/${url}`,
            data,
            getHeaders()
        );
        if (request.data && request.data.message) {
            await successMessage(request.data.message);
        }
        return request;
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

/**
 * Update request from axios.
 *
 * @param      {(Object|Array)}  data
 * @param      {String}          url
 * @return     {Promise}
 */
const axiosPut = async (data, url) => {
    try {
        let request = await axios.put(`${BASE_URL}/${url}`, data, getHeaders());

        if (request.data && request.data.message) {
            await successMessage(request.data.message);
        }
        return request;
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

/**
 * Save request from axios
 *
 * @param      {Object}  oldTask
 * @param      {Object}  newTask
 * @param      {String}  url
 */
const axiosSave = async (oldTask, newTask, url) => {
    try {
        let request = await axios.put(
            `${BASE_URL}/${url}`,
            {
                id: oldTask.id,
                task: newTask
            },
            getHeaders()
        );
        if (request.data && request.data.message) {
            await successMessage(request.data.message);
        }
        return request;
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

/**
 * Delete call from axios
 *
 * @param      {Object}  taskToDelete
 * @param      {String}  url
 * @return     {Promise}
 */
const axiosDelete = async (taskToDelete, url) => {
    let request = await axios.delete(
        `${BASE_URL}/${url}/${taskToDelete}`,
        getHeaders()
    );

    if (request.data && request.data.message) {
        await successMessage(request.data.message);
    }
    return request;
};

export { axiosGet, axiosPost, axiosDelete, axiosSave, axiosPut };
