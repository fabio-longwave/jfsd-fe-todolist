import {config} from '../../config.js'

export const getAllActivities = async (accessToken) => {
    try {
        const response = await fetch(`${config.api.BASE_URL}${config.api.ACTIVITY}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`},
        });
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error, 'Activities Error')
        throw Error(error)
    }
}

export const addActivity = async (activity, accessToken) => {
    try {
        const response = await fetch(`${config.api.BASE_URL}${config.api.ACTIVITY}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`},
            body: JSON.stringify(activity)
        });
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error, 'Adding Activity Error')
        throw Error(error)
    }
}

export const deleteActivity = async (activityId, accessToken) => {
    try {
        const response = await fetch(`${config.api.BASE_URL}${config.api.ACTIVITY}/${activityId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`},
        });
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error, 'Delete Activity Error')
        throw Error(error)
    }
}

export const changeActivityStatus = async (activityId, status, accessToken) => {
    try {
        const response = await fetch(`${config.api.BASE_URL}${config.api.ACTIVITY}/${activityId}/${config.api.status[status.toUpperCase()]}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`},
        });
        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error, 'Set Activity status Error')
        throw Error(error)
    }
}