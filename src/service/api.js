export const BASE_URL = 'https://api.scripture.api.bible/v1/'
export const API_KEY = ''

export const runParam = (object = {}, noEmptyString = true) =>
    Object.entries(object)
        .map(item =>
            noEmptyString
                ? item[1] && `${item[0]}=${item[1]}`
                : `${item[0]}=${item[1]}`
        )
        .join()
        .replaceAll(',', '&')