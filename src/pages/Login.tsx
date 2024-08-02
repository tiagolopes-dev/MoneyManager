import { Link } from "react-router-dom";
import image from "../assets/logoMM.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-[#ffffff] flex-col justify-center items-center hidden lg:flex">
        <img src={image} />
      </div>
      <div className="flex-1 bg-pink-200 flex flex-col justify-center items-center">
        <img src={image} className="flex lg:hidden w-auto h-28 mb-8" />
        <div className="text-center w-3/4 md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Faça seu login</h2>
          <form className="flex flex-col">
            <label className="mb-2 text-left font-semibold">Seu Email:</label>
            <Input variant="text" placeholder="Digite seu Email" />
            <br />
            <label className="mb-2 text-left font-semibold">Sua Senha:</label>
            <Input variant="password" placeholder="Digite sua senha" />
            <br />
            <Button variant="Primary">Login</Button>
          </form>
          <p className="mt-4 text-gray-600">
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
