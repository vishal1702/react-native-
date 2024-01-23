import axios from "axios";
import { API_URL } from "@env";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(API_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(API_URL + "/expenses.json");

  // console.log(response);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(API_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(API_URL + `/expenses/${id}.json`);
};
