
const BASE_URL = "http://localhost:3001"

class YodlrApi {

    static async getUsers() {


        try {
            
            const response = await fetch(`${BASE_URL}/api/users`)

            if(response.ok) {
                const users = await response.json();

                return users;
            }

            console.error("API Error:", response.status, response.statusText);

        } catch (err) {

            console.error("Network error or other issue:", err);
            
        }

    }

}

export default YodlrApi;