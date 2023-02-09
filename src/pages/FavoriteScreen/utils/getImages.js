export const getImages = async () => {
  const resp = await fetch(
    "https://backend-factoria-production.up.railway.app/api/images/",
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    }
  );
  return await resp.json();
};
