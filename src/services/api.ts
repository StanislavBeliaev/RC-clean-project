/**
 * API Service
 * Configure your API endpoints and methods here
 */

const API_BASE_URL = 'https://api.example.com';

interface RequestOptions extends RequestInit {
  token?: string;
}

/**
 * Generic API request handler
 */
async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (fetchOptions.headers) {
    Object.assign(headers, fetchOptions.headers);
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

/**
 * GET request
 */
export async function get<T>(endpoint: string, token?: string): Promise<T> {
  return request<T>(endpoint, { method: 'GET', token });
}

/**
 * POST request
 */
export async function post<T>(
  endpoint: string,
  data?: unknown,
  token?: string,
): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    token,
  });
}

/**
 * PUT request
 */
export async function put<T>(
  endpoint: string,
  data?: unknown,
  token?: string,
): Promise<T> {
  return request<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
    token,
  });
}

/**
 * DELETE request
 */
export async function del<T>(endpoint: string, token?: string): Promise<T> {
  return request<T>(endpoint, { method: 'DELETE', token });
}
