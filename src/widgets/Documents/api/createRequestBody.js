import {getFromStorage} from '/src/app/lib/getFromStorage';

export function createRequestBody(arr) {
    const accessToken = getFromStorage('accessToken'); // токен
    let formData = JSON.stringify({ids: arr.map((item) => item.encodedId)}); // формируем тело запроса
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
    };
    return options;
}
