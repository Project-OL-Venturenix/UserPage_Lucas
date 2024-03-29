import axios from "axios";

export const putUserTestCase = async (accessToken, userTestCaseData)=> {
    try {
        const response = await axios.post(
            `http://localhost:8081/api/usertestcases`,
            userTestCaseData,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getUserTestCase = async (accessToken)=> {
    try {
        const response = await axios.get(
            `http://localhost:8081/api/usertestcases`,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
