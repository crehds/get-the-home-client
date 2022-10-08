import apiFetch from "./api-fetch";

export function getProperties(){
    return apiFetch("/myproperties");
  }

export function createProperty(data){
    return apiFetch("/properties", {body: data});
}

export function updateProperty(id, data) {
    return apiFetch(`/properties/${id}`, {
      body: data,
      method: 'PATCH'
    });
}

export function removeProperty(id){
    return apiFetch(`/properties/${id}`, {method: "DELETE"});
}