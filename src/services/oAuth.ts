import axios from "axios";

interface BlizzardToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

let client_id: string | null = "5f16fcf010554bd28b61f5614babd0d3";
let client_secret: string | null = "dLAthupvFb1F3QsMm6YihQpRHzDPoU4Z";
let token: string | null = null;
let tokenExpiry: number = 2000000000000;
let tokenLock: boolean = true;

export function isTokenValid(): boolean {
  if (
    tokenLock ||
    tokenLock === null ||
    tokenExpiry < Math.floor(Date.now() / 1000)
  ) {
    return false;
  }
  return true;
}

export async function createAccessToken(region: string = "eu") {
  if (isTokenValid()) {
    return token as string;
  }

  const data = { grant_type: "client_credentials" };

  try {
    const response = await axios.post(
      `https://${region}.battle.net/oauth/token`,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        auth: {
          username: client_id ?? "",
          password: client_secret ?? "",
        },
      }
    );

    const tokenResponse: BlizzardToken = response.data;

    tokenExpiry = tokenResponse.expires_in;
    token = tokenResponse.access_token;
    tokenLock = false;

    return token;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    throw error;
  }
}

export async function getDataFromApi<T>(
  region: string,
  path: string,
  params: Record<string, string>
): Promise<T> {
  params["access_token"] = await createAccessToken();
  const url = `https://${region}.api.blizzard.com${path}`;
  console.log(url, { params });
  try {
    const response = await axios.get(url, { params });
    const data: T = response.data;
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    throw error;
  }
}
