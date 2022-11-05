import { tokenKey, userKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials){
  return apiFetch("/login", {body: credentials})
  .then(u =>{
    const {token, ...user} = u;
    sessionStorage.setItem(tokenKey, token);
    sessionStorage.setItem(userKey, JSON.stringify(user));
    return user;
  })
}

export function logout(){
  return apiFetch("/logout", {method: "DELETE"})
}