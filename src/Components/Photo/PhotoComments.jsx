import React from "react";
import { UserContext } from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import { commentStyle } from "../../styles";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={props.single ? "" : commentStyle.comments}
      >
        {comments.map((comment) => (
          <li className={commentStyle.comment} key={comment.comment_ID}>
            <b>{comment.comment_author}</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
