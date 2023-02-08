
// @ts-ignore
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 2500
})
// @ts-ignore
export const bcwApi = axios.create({
  baseURL: 'BCW Sandbox (https://bcw-sandbox.herokuapp.com/api/Tipp/pokemon)',
  timeout: 2500
})