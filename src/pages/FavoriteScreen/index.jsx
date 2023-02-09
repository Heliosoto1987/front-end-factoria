import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import {
  ButtonUploadImg,
  FavoriteBox,
  FavoriteContainer,
  FavoriteInput,
  ImagesContainer,
  Img,
} from "./styles";
import { postUrlDataBase } from "./utils/postUrlDataBase";
import { getImages } from "./utils/getImages";
import { useOnFileInputChange } from "./hook/useOnFileInputChange";
import { deleteImageSelected } from "./utils/deleteImageSeleted";
import { FlexColumContainer } from "../../components/FlexColumContainer";
import { stylesInLine } from "./utils/styles";
import { FlexRow } from "../../components/FlexRowContainer/styles";
import { updateImage } from "./utils/updateImage";

export const FavoriteScreen = () => {
  const fileInputRef = useRef();
  const userInfo = useContext(UserContext);
  const [getAllImage, setGetAllImage] = useState([]);
  const [getTargetId, setGetTargetId] = useState("");
  const [onFileInputChange, imagesUrl, setImagesUrl] = useOnFileInputChange();
  const [onFileInputChangePut, imagesUrlPut, setImagesUrlPut] =
    useOnFileInputChange();
  const getImagesFetch = () => {
    getImages().then((data) =>
      setGetAllImage(
        data.getImages.filter(
          (filterId) => filterId.user._id === userInfo[0].uid
        )
      )
    );
  };
  const handleDelete = async ({ target }) => {
    await deleteImageSelected(userInfo[0].uid, target.value).then((data) => {
      data.ok && getImagesFetch();
    });
  };

  useEffect(() => {
    getImagesFetch();
  }, [imagesUrl, imagesUrlPut]);

  return (
    <FavoriteContainer>
      {imagesUrl && (
        <ButtonUploadImg
          onClick={() =>
            postUrlDataBase(imagesUrl, userInfo).then(
              (postData) => postData.ok === true && setImagesUrl("")
            )
          }
        >
          Subir Imagen
        </ButtonUploadImg>
      )}

      {imagesUrlPut && (
        <ButtonUploadImg
          onClick={() => {
            updateImage(userInfo[0].uid, getTargetId, imagesUrlPut).then(
              (data) => data.ok && setImagesUrlPut("")
            );
          }}
        >
          Modificar Imagen
        </ButtonUploadImg>
      )}
      <FavoriteInput type="file" onChange={onFileInputChange} />
      <FavoriteInput
        style={{ visibility: "hidden" }}
        ref={fileInputRef}
        type="file"
        onChange={onFileInputChangePut}
      />
      {getAllImage && (
        <ImagesContainer>
          {getAllImage.map((value) => (
            <FlexColumContainer key={value._id}>
              <FavoriteBox>
                <Img src={value.url} alt="Favorite img" />
                <FlexRow>
                  <button
                    onClick={handleDelete}
                    value={value._id}
                    style={stylesInLine}
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      setGetTargetId(e.target.value);
                      fileInputRef.current.click();
                    }}
                    value={value._id}
                    style={stylesInLine}
                  >
                    Update
                  </button>
                </FlexRow>
              </FavoriteBox>
            </FlexColumContainer>
          ))}
        </ImagesContainer>
      )}
    </FavoriteContainer>
  );
};
