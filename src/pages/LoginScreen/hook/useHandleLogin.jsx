import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";

export const useHandleLogin = (url) => {
  const [loginData, setLoginData] = useContext(UserContext);
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const body = {
    email: email,
    password: password,
  };

  const handleAuthLogin = async () => {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });
    const bodyParase = await res.json();

    return setLoginData(bodyParase);
  };

  useEffect(() => {
    loginData.name ? navigate("/favorite", { replace: true }) : null;
  }, [loginData]);
  return [handleInputChange, handleAuthLogin, email, password];
};
