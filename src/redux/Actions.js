import axios from "axios";
import { ACCESS_KEY, PHOTOS_URL, GET_RANDOM_TOPIC_PHOTO, TOPICS_URL, GET_TOPIC_DETAIL, RANDOM_PHOTOS_URL, SEARCH_URL, GET_TOPICS, SEARCH_PHOTOS, CLEAR_SEARCH_DATA, SEARCH_ERROR } from "./Constants";




// export const loadPhotos = () => {
//     return async (dispatch) => {
//         try {
//             let query = `${PHOTOS_URL}?client_id=${ACCESS_KEY}`;
//             let response = await axios.get(query);
//             response = await response.data;
//             dispatch({ type: LOAD_PHOTOS, payload: response })
//         } catch (err) {
//             console.log("Error, loadPhoto Action : ", err)
//             dispatch({ type: SEARCH_ERROR, payload: err.message })
//         }
//     }
// }

export const searchPhotos = (searchTxt, page) => {
    let query = (searchTxt === undefined)
        ? `${PHOTOS_URL}/?client_id=${ACCESS_KEY}&page=${page}`
        : `${SEARCH_URL}/?client_id=${ACCESS_KEY}&query=${searchTxt}&page=${page}`
    return async (dispatch) => {
        try {
            let response = await axios.get(query);
            response = await response.data;
            (searchTxt === undefined)
                ? dispatch({ type: SEARCH_PHOTOS, payload: response })
                : dispatch({ type: SEARCH_PHOTOS, payload: response.results })

        } catch (err) {
            console.log("Error, searchPhotos Action : ", err)
            dispatch({ type: SEARCH_ERROR, payload: err.message })
        }
    }
}

export const clearSearchData = () => {
    return {
        type: CLEAR_SEARCH_DATA
    }
}

export const getTopics = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${TOPICS_URL}?client_id=${ACCESS_KEY}&per_page=0`)
            response = await response.data;
            dispatch({ type: GET_TOPICS, payload: response })
        } catch (err) {

        }
    }
}

export const getTopicDetail = (topicDetail) => {
    return {
        "type": GET_TOPIC_DETAIL,
        "payload": topicDetail
    }
}

export const getRandomTopicPhoto = (topicDetail) => {
    return async (dispatch) => {

        try {
            let query = `${RANDOM_PHOTOS_URL}/?client_id=${ACCESS_KEY}&topic=${topicDetail.title}`
            let response = await axios.get(query);
            response = await response.data;
            dispatch({ type: GET_RANDOM_TOPIC_PHOTO, payload: response })
        } catch (err) {
            console.log(err);
        }
    }
}