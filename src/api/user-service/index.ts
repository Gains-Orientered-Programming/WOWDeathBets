import axios from "axios";
import { User } from "src/types/user";

export const  getUserByUsername = async (username:string) => {
    const res = await axios.get<User>("https://api-gateway-nyxm4.ondigitalocean.app/user-service/username/" + username)

    return res.data;
};