// lib/api.ts

export const API_BASE_URL = "https://sonacsri.com/demo/backend/api";

export async function postData(endpoint: string, data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    return { status: "error", message: "Something went wrong" };
  }
}
