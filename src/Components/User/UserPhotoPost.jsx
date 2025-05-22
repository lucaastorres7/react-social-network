import React from "react";
import { userPhotoPostStyle } from "../../styles";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${userPhotoPostStyle.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" id="name" {...name} />
        <Input label="Peso" type="text" id="weight" {...weight} />
        <Input label="Idade" type="text" id="age" {...age} />
        <input
          className="mb-[1rem]"
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}

        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={userPhotoPostStyle.preview}
            style={{ backgroundImage: `url("${img.preview}")` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
