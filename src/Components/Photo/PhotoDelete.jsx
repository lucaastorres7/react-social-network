import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const photoDeleteStyle = {
  delete:
    "bg-[#ddd] py-[0.3rem] px-[0.6rem] border border-transparent text-[0.875rem] cursor-pointer rounded-md transition delay-100",
  deleteFocus:
    "focus:outline-none focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee] hover:outline-none hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee]",
};

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
