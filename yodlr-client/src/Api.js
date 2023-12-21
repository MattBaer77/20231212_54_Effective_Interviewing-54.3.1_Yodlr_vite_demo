
const BASE_URL = "http://localhost:3001"

class YodlrApi {

    static async getUsers() {

        console.debug("Get Users");

        console.log(BASE_URL)

        try {
            
            const response = await fetch(`${BASE_URL}/api/users`)

            console.log(response)

            const users = await response.json();

            return users;

        } catch (err) {
            console.error("API Error:", err);
        }

    }

}

export default YodlrApi;