import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { photoDeleteStyle } from "../../styles";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que quer apagar a foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response, json } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button
          className={`${photoDeleteStyle.delete} ${photoDeleteStyle.deleteFocus}`}
          disabled
        >
          Deletando...
        </button>
      ) : (
        <button
          className={`${photoDeleteStyle.delete} ${photoDeleteStyle.deleteFocus}`}
          onClick={handleClick}
        >
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
