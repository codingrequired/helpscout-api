export function buildUrl(urlString: string, query?: Record<string, string | number | boolean>) {
    const url = new URL(`https://docsapi.helpscout.net${urlString}`);

    if (!query || Object.keys(query).length === 0) {
        return url.toString();
    }

    const params = new URLSearchParams();

    for (const key of Object.keys(query)) {
        params.set(key, query[key]?.toString());
    }

    return `${url}?${params.toString()}`
}

export type SendBasicAuthRequestProps = {
    url: string;
    apiKey: string;
    options?: RequestInit
}

export function sendBasicAuthRequest(props: SendBasicAuthRequestProps) {
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": 'Basic ' + btoa(`${(props.apiKey)}:x`),
    };

    const config = Object.assign({}, props.options, {headers});

    return fetch(props.url, config);
}

export type SendGetRequestProps = {
    url: string;
    apiKey: string;
    options?: RequestInit;
}

export async function sendGetRequest<T>(props: SendGetRequestProps): Promise<T> {
    const response = await sendBasicAuthRequest({
        ...props,
        options: {
            ...props.options,
            method: 'GET',
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data as T;
    }

    throw new Error(response.statusText);
}

export type SendPostRequestProps = {
    url: string;
    apiKey: string;
    body: object;
    options?: RequestInit;
}

export async function sendPostRequest<T>(props: SendPostRequestProps): Promise<T> {
    const response = await sendBasicAuthRequest({
        ...props,
        options: {
            ...props.options,
            method: 'POST',
            body: JSON.stringify(props.body)
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data as T;
    }

    throw new Error(response.statusText);
}

export type SendPutRequestProps = {
    url: string;
    apiKey: string;
    body: object;
    options?: RequestInit;
}

export async function sendPutRequest<T>(props: SendPutRequestProps): Promise<T> {
    const response = await sendBasicAuthRequest({
        ...props,
        options: {
            ...props.options,
            method: 'PUT',
            body: JSON.stringify(props.body)
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data as T;
    }

    throw new Error(response.statusText);
}

export async function sendPutRequestIgnoreResponse(props: SendPutRequestProps) {
    const response = await sendBasicAuthRequest({
        ...props,
        options: {
            ...props.options,
            method: 'PUT',
            body: JSON.stringify(props.body)
        }
    });

    if (response.ok) {
        return null;
    }

    throw new Error(response.statusText);
}

export type SendDeleteRequestProps = {
    url: string;
    apiKey: string;
    options?: RequestInit;
}

export async function sendDeleteRequest(props: SendDeleteRequestProps): Promise<null> {
    const response = await sendBasicAuthRequest({
        ...props,
        options: {
            ...props.options,
            method: 'DELETE',
        }
    });

    if (response.ok) {
        return null;
    }

    throw new Error(response.statusText);
}
