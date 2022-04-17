import { fetchWrapper } from "../helpers/fetch-wrapper";
const baseUrl = `${process.env.REACT_APP_BASE_URL}/walletTransaction`;

export const transactionService = {
  getTransactionByUserId,
};

function getTransactionByUserId(params) {
  return fetchWrapper.post(`${baseUrl}/getByUserId`, params);
}
