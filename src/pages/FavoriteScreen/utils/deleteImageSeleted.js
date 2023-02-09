export const deleteImageSelected = async (userId, imageId) => {
  const resp = await fetch(
    `https://backend-factoria-production.up.railway.app/api/images/${imageId}`,
    {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        uid: userId,
      }),
    }
  );
  return await resp.json();
};
