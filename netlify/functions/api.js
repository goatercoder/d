export async function handler() {
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/wavelength-efd2d/databases/(default)/documents",
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    }
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
