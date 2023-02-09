import { useForm } from "../../../hooks/useForm";

export const useHandleRegister = (url) => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name, urlImage, user } = formValues;

  const body = {
    name: name,
    email: email,
    password: password,
  };

  const handleAuthRegister = () => {
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then(
        (data) =>
          data.ok &&
          alert("Your user has been created, please go to home and use login")
      )
      .catch((error) => console.log(error));
  };

  return [handleInputChange, handleAuthRegister, email, password, name];
};
