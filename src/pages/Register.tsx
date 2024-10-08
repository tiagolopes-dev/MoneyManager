import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/logoMM.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async () => {
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!", {
        position: "top-right",
      });
      return;
    }

    try {
      setLoading(true);
      await axios.post("https://gastos-api-9er7.onrender.com/register", {
        email,
        password,
      });

      toast.success("Usuário criado com sucesso!", {
        position: "top-right",
      });

      navigate("/Login");
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
          <h2 className="text-xl font-semibold mb-4">Faça seu Cadastro</h2>
          <div className="flex flex-col">
            <label className="mb-2 text-left font-semibold">Seu Email:</label>
            <Input
              variant="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <br />

            <label className="mb-2 text-left font-semibold">Sua Senha:</label>
            <Input
              variant="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label className="mb-2 text-left font-semibold">Repita a Senha:</label>
            <Input
              variant="password"
              placeholder="Repita sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDownCapture={handleKeyDown}
            />
            <br />

            <Button variant="Primary" onClick={submitForm}>
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
                </div>
              ) : (
                "Registra-se"
              )}
            </Button>
            <p className="mt-5 text-gray-600 font-medium">
              Já possui uma conta? Faça{" "}
              <Link to="/Login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
