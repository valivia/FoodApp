export async function fetchMutate(path, data, method = 'POST') {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((error) => {
        console.error(error);
    });

    if (!response) return;

    const json = await response.json();
    return { response, json };
} 