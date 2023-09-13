// Import axios...
import axios from "axios";

// Create an instance of axios to use in requests...
const http = axios.create({
    baseURL: "https://icanhazdadjoke.com"


});
// Config goes here...
const config = {
    headers: {
        "Accept" : "text/plain"
    }
}

export default {
    // Write request methods...
    getRandomDadJoke () {
        return http.get('/', config);
    }

}