import { BsTrash } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

export function TableGastos() {
  const dados = [
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
    {
      data: "09/04/2024",
      compra: "açai",
      valor: "19",
      local: "Sabn'Energy",
    },
];


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b text-left">Data</th>
            <th className="py-2 px-2 border-b text-left">Compra</th>
            <th className="py-2 px-2 border-b text-left">Valor</th>
            <th className="py-2 px-2 border-b text-left">Local</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((line, index) => (
            <tr key={index}>
              <td className="py-2 px-2 border-b">{line.data}</td>
              <td className="py-2 px-2 border-b">{line.compra}</td>
              <td className="py-2 px-2 border-b">{line.valor}</td>
              <td className="py-2 px-2 border-b flex">{line.local}</td>
              <td>
                <button
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Deletar Gastos"
                >
                  <BsTrash color="#8B0000"/>
                </button>
                <Tooltip id="delete-tooltip"></Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
