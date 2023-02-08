import { useState } from "react";

export const FavoriteScreen = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const onFileInputChange = async ({ target }) => {
    console.log(target.files);
    if (target.files === 0) return;
    const cloudUrl = "https://api.cloudinary.com/v1_1/helio87/upload";
    const formDataUpload = new FormData();
    formDataUpload.append("upload_preset", "factoria");
    formDataUpload.append("file", target.files[0]);
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formDataUpload,
    });
    const cloudResp = await resp.json();
    return setImageUrl(...imageUrl, cloudResp.secure_url);
  };
  console.log(imageUrl);
  return (
    <>
      <input type="file" onChange={onFileInputChange} />
      <div>soy favorito</div>
    </>
  );
};
