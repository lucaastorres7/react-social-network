import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { formStyles } from "../../styles";
import Head from "../Helper/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className={`${formStyles.title} ${formStyles.titleAfter}`}>{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
