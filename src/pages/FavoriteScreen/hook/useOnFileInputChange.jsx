import { useState } from "react";

export const useOnFileInputChange = () => {
  const [imagesUrl, setImagesUrl] = useState("");

  const onFileInputChange = async ({ target }) => {
    if (target.files === 0) {
      return null;
    } else {
      const cloudUrl = "https://api.cloudinary.com/v1_1/helio87/upload";
      const formDataUpload = new FormData();
      formDataUpload.append("upload_preset", "factoria");
      formDataUpload.append("file", target.files[0]);
      const resp = await fetch(cloudUrl, {
        method: "POST",
        body: formDataUpload,
      }).then((data) => data.json());
      setImagesUrl(resp.secure_url);
    }
  };

  return [onFileInputChange, imagesUrl, setImagesUrl];
};
