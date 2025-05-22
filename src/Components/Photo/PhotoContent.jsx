import React from "react";
import { Link } from "react-router-dom";
import { formStyles } from "../../styles";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../Contexts/UserContext";
import PhotoDelete from "./PhotoDelete";

const photoContentStyle = {
  photo:
    "m-auto h-[36rem] rounded-sm bg-white grid grid-cols-[36rem_20rem] grid-rows-[auto_1fr_auto] overflow-hidden max-lg:h-auto max-lg:max-h-[calc(100vh-4rem)] max-lg:overflow-y-auto max-lg:grid-cols-[minmax(20rem,40rem)]",
  details: "pt-8 px-8 pb-0",
  author: "opacity-50 mb-[1rem] flex justify-between items-center",
  link: "hover:underline",
  views:
    "before:w-[16px] before:h-[10px] before:mr-[0.5rem] before:bg-[url(src/assets/visualizacao-black.svg)] before:inline-block",
  attributes: "flex text-[1.125rem] font-bold my-[1rem]",
  attribute:
    "mr-[2rem] before:inline-block before:h-[20px] before:mr-[0.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-[#333] before:mt-[5px]",
  img: "row-start-1 row-end-4 max-lg:row-end-1",
  comments: "px-[2rem]",
};

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { comments, photo } = data;

  return (
    <div className={`${photoContentStyle.photo} scaleUp`}>
      <div className={photoContentStyle.img}>
        <img src={photo.src} alt={photo.title} />
      </div>

      <div className={photoContentStyle.details}>
        <div>
          <p className={photoContentStyle.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link
                className={photoContentStyle.link}
                to={`/profile/${photo.author}`}
              >
                @{photo.author}
              </Link>
            )}

            <span className={photoContentStyle.views}>{photo.acessos}</span>
          </p>

          <h1 className={`${formStyles.title} ${formStyles.titleAfter}`}>
            <Link to={`photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={photoContentStyle.attributes}>
            <li className={photoContentStyle.attribute}>{photo.peso}kg</li>
            <li className={photoContentStyle.attribute}>
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments
        className={photoContentStyle.comments}
        id={photo.id}
        comments={comments}
      />
    </div>
  );
};

export default PhotoContent;
