export async function fetchColor<T>(query: string): Promise<T> {
  const response = await fetch(`https://www.thecolorapi.com/id?hex=${query}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
