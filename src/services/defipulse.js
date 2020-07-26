import axios from 'axios';

const API_KEY = '1ee3e38bdd219c8428ddc05e990052738c19b7f83d167c623cebdea2a185';

export const getAllProjects = async () => {
  try {
    const response = await axios.get(
      `https://public.defipulse.com/api/GetProjects?api-key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const marketDataOverview = async () => {
  try {
    const response = await axios.get(
      `https://public.defipulse.com/api/MarketData?api-key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const historicalTVL = async (period, project) => {
  try {
    const response = await axios.get(`https://public.defipulse.com/api/GetHistory`, {
      headers: {
        'api-key': API_KEY,
        period,
        project
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
