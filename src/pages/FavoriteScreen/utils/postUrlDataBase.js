import { urlBackend } from "../const";

export const postUrlDataBase = async (imagesUrl, userInfo) => {
  const postUrl = await fetch(urlBackend, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      url: imagesUrl,
      user: userInfo[0].uid,
    }),
  });
  return postUrl.json();
};
