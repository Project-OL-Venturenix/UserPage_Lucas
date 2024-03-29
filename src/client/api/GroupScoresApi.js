import axios from "axios";

export const putGroupScores = async (accessToken, groupScoreData)=> {
    try {
        const response = await axios.post(
            `http://localhost:8081/api/groupscores`,
            groupScoreData,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        )
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getGroupScoresByEventId = async (accessToken, id)=> {
    try {
        const response = await axios.get(
            `http://localhost:8081/api/grouptestcases/eventid/${id}`,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};