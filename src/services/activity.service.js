

export const getAllActivities = async (accessToken) => {
    try {
        const response = await fetch('http://localhost:8000/activity/', {
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
        const response = await fetch('http://localhost:8000/activity/', {
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