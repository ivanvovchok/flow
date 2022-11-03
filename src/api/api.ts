export default async function api<TResponse>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: BodyInit | string
): Promise<TResponse> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Language': 'ua'
  };

  if (body) {
    body = JSON.stringify(body);
  }

  const API_BASE: string = `http://localhost:8000/api/`;

  const response = await fetch(API_BASE + url, {
    method,
    headers,
    body
  });

  return await response.json();
}