import apiFetch from "./api-fetch";

export function getProperties(){
    return apiFetch("/properties");
  }

export function showProperty(id){
    return apiFetch(`/properties/${id}`);
}