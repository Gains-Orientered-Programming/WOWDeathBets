import axios from "axios";
import { Betting } from "src/types/betting-service.t";

export const createBetting = async (bettingData: Betting) => {
  await axios.post(
    "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings",

    bettingData
  );
};

export const getBettingsByUserId = async (userId: string) => {
  const res = await axios.get<Betting[]>(
    `https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings/userId/${userId}`
  );

  return res.data;
};

export const getAllBettings = async () => {
  const res = await axios.get<Betting[]>(
    "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings"
  );

  return res.data;
};

export const getHighestBettings = async () => {
  const res = await axios.get<Betting[]>(
    "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings/most"
  );

  return res.data;
};
