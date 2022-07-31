
export const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
export const clearLocalStorage = (key) => {
    localStorage.removeItem(key)
}