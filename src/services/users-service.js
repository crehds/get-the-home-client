import { tokenKey } from '../config';
import apiFetch from './api-fetch';

export function createUser(userData) {
  return apiFetch('/users', { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function getUser() {
  return apiFetch('/profile').then((u) => {
    const { token, ...user } = u;
    // sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export async function updateUser(data) {
  const { token, ...user } = await apiFetch(`/profile`, {
    body: data,
    method: 'PATCH'
  });
  sessionStorage.setItem(user, JSON.stringify({ ...user }));
  return user;
}
