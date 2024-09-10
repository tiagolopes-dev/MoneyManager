import { Link } from "react-router-dom";
import image from "../assets/logoMM.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      setLoading(true);
      const { data: token } = await axios.post(
        "https://gastos-api-9er7.onrender.com/login",
        { email, password }
      );

      await window.localStorage.setItem("token", token);
      toast.success("Usuário logado!", {
        position: "top-right",
      });

      navigate("/");
    } catch (err) {
      const error = err as AxiosError;
      toast.error(error.response?.data as string, {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      submitForm();
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-[#ffffff] flex-col justify-center items-center hidden lg:flex">
        <img src={image} />
      </div>
      <div className="flex-1 bg-gray flex flex-col justify-center items-center">
        <img src={image} className="flex lg:hidden w-auto h-28 mb-8" />
        <div className="text-center w-3/4 md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Faça seu login</h2>
          <div className="flex flex-col">
            <label className="mb-2 text-left font-semibold">Seu Email:</label>
            <Input
              variant="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="mb-2 text-left font-semibold">Sua Senha:</label>
            <Input
              variant="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDownCapture={handleKeyDown}
            />
            <br />
            <Button variant="Primary" onClick={submitForm}>
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Não possui conta?{" "}
            <Link to="/Register" className="text-blue-500 hover:text-blue-700">
              Registra-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
