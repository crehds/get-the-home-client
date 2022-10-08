import apiFetch from "./api-fetch";

export function getSavedProperties(){
    return apiFetch("/mysavedproperties");
  }

export function createSavedProperty(data){
    return apiFetch("/saved_properties", {body: data});
}

export function updateSavedProperty(id, data) {
    return apiFetch(`/saved_properties/${id}`, {
      body: data,
      method: 'PATCH'
    });
}

export function removeSavedProperty(id){
    return apiFetch(`/saved_properties/${id}`, {method: "DELETE"});
}