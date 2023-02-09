export const updateImage = async (userInfo, imageId, imagesUrl) => {
  const postUrl = await fetch(
    `https://backend-factoria-production.up.railway.app/api/images/${imageId}`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        uid: userInfo,
        url: imagesUrl,
      }),
    }
  );
  return postUrl.json();
};
