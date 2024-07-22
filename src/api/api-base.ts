export default async function Api(
  url: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  payload?: any,
  contentType?: string
) {
  const headers = new Headers({
    'Content-Type': contentType ?? 'application/json'
  });

  const config: { method: string; headers: any; body?: any } = {
    method,
    headers
  };

  if (payload) {
    config.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}${url}`, {
      ...config
    });
    return await response.json();
  } catch (error) {
    console.error('Error de red:', error);
  }
}
