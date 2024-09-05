import { BsTrash } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { Gasto } from "../../types";
import { LuPencilLine } from "react-icons/lu";

interface TableProps {
  itens: Gasto[];
  openModalForEdit: (gasto: Gasto) => void;
  openModalForDelete: (gastoId: string | undefined) => void;
}

export function TableGastos({
  itens,
  openModalForEdit,
  openModalForDelete,
}: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-100">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b text-left">Data</th>
            <th className="py-2 px-2 border-b text-left">Título</th>
            <th className="py-2 px-2 border-b text-left">Valor</th>
            <th className="py-2 px-2 border-b text-left">Descrição</th>
            <th className="py-2 px-2 border-b text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((line, index) => (
            <tr key={index} className=" hover:bg-slate-200">
              <td className="py-2 px-2 border-b">{line.createdAt}</td>
              <td className="py-2 px-2 border-b">{line.title}</td>
              <td
                className={`py-2 px-2 border-b ${
                  line.category === "Entrada"
                    ? "text-[#009D19]"
                    : "text-[#DB082C]"
                }`}
              >
                {line.price}
              </td>
              <td className="py-2 px-2 border-b">{line.description}</td>

              <td className="py-2 px-2 border-b ">
                <button
                  data-tooltip-id="editar-tooltip"
                  data-tooltip-content="Editar Gastos"
                  onClick={() => openModalForEdit(line)}
                >
                  <LuPencilLine className="mr-2" />
                </button>

                <button
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Excluir Gastos"
                  onClick={() => openModalForDelete(line.id)}
                >
                  <BsTrash color="#8B0000" />
                </button>

                <Tooltip id="delete-tooltip"></Tooltip>
                <Tooltip id="editar-tooltip"></Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
