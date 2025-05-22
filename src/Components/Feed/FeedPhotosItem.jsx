import React from "react";
import { feedPhotosItemStyle } from "../../styles";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={feedPhotosItemStyle.photo}>
      <img
        className={feedPhotosItemStyle.img}
        src={photo.src}
        alt={photo.title}
      />
      <span
        className={`${feedPhotosItemStyle.view} ${feedPhotosItemStyle.viewBefore}`}
      >
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
