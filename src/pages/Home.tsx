import { GrDocumentPdf } from "react-icons/gr";
import { FaEyeSlash } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";
import { Button } from "../components/Button";
import { FaRegCircleUser } from "react-icons/fa6";

export function Home() {
  return (
    <div className="max-w-[1200px] mx-auto h-dvh">
      <div className="">
        <header className="flex justify-end">
          <FaRegCircleUser size={25} className="mt-2"/>
        </header>
      </div>
      <div className="bg-[#fafafa] mt-8 rounded-xl p-4">
        <div className="flex justify-between p-2">
          <div>
            <p className="flex items-center gap-3 font-bold">
              Gasto Total:{" "}
              <button>
                <FaEyeSlash size={20} />
              </button>
            </p>
          </div>
          <div className="flex gap-3">
            <Tooltip id="pdf-tooltip"></Tooltip>

            <button
              className="bg-transparent border-2 border-blue-700 p-2 px-2 rounded-md hover:bg-blue-100"
              data-tooltip-id="pdf-tooltip"
              data-tooltip-content="Exportar PDF"
            >
              <GrDocumentPdf size={18} />
            </button>

            <Button variant="Primary">
              <TfiPlus size={18} />
              Novo gasto
            </Button>
          </div>
        </div>
        <div className="p-2">
          <p className="font-bold">Controle de Finanças</p>
        </div>
      </div>
    </div>
  );
}
