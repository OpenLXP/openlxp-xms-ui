export const host = process.env.REACT_APP_XMS_BACKEND
const api = 'api/';

//catalogs
export const catalogs_url = `${host}${api}catalogs/`;

export const catalog_courses_url = `${host}${api}catalogs/`

//user login/register
export const login_url = `${host}${api}auth/login`
export const register_url = `${host}${api}auth/register`

//configs
export const configUrl = `${host}${api}config/catalogs/`