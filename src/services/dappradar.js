import axios from 'axios';

export const getAllProjectsInCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/api/xchain/dapps/custom/0?option[category]=${category}&option[newDappsOnly]=false&option[hideAirdrops]=true&sort[by]=users24h&sort[order]=desc&results=50`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoWeekStats = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/statistic/week`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoWeekChart = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/chart/week`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoMonthStats = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/statistic/month`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoMonthChart = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/chart/month`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoAllStats = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/statistic/all`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectInfoAllChart = async (network, title) => {
  try {
    const response = await axios.get(
      `https://dappradar.com/v2/api/dapp/${network}/${title}/chart/all`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProjectDescription = async (network, title) => {
  try {
    const response = axios.get(`https://dappradar.com/v2/api/dapp/${network}/${title}`);
    return response;
  } catch (error) {
    throw error;
  }
};
