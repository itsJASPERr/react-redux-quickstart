import { NAME as module } from "./constants";

export const isAuthenticated = state => !!state[module].token;

export const getProfile = state => state[module].profile;

export const getError = state => state[module].error;

export const isLoading = state => state[module].loading;
