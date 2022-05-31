const fetchDomain = 'https://snetmyapp.herokuapp.com';

export default async function offerFetcher(path) {
    path = encodeURIComponent(path);

    let response = {};
    await fetch(`${fetchDomain}/${path}`)
        .then((resp) => resp.json())
        .then((resp) => {
            response = resp;
            response = {...response, success: true};
        }).catch(() => {
            response = {
                success: false
            }
        })

    return response;
}