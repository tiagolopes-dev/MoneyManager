import { GrClose } from "react-icons/gr";
import { Input } from "../Input";

export function Modal() {
  return (
    <div className="bg-black fixed w-full h-full flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">Registrar Gasto</h1>
          </div>
          <div >
            <GrClose/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Catégoria</label>
          <Input variant="select" options={["Entrada", "Saída"]} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Titulo</label>
          <Input variant="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Valor</label>
          <Input variant="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Data</label>
          <Input variant="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Descrição</label>
          <Input variant="text" />
        </div>
      </div>
    </div>
  );
}
