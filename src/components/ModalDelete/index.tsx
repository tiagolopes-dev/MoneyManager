import { GrClose } from "react-icons/gr";
import { Button } from "../Button";

interface ModalDeleteProps {
  closeModal: () => void;
  deleteGasto: () => void
}

export function ModalDelete({ closeModal, deleteGasto }: ModalDeleteProps) {
  return (
    <div className="bg-[#0000005d] absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="font-bold">Excluir Gasto</p>
          <button onClick={closeModal}>
            <GrClose />
          </button>
        </div>
        <hr />
        <div>
          <p
            className="font-semibold
          "
          >
            Tem certeza que deseja excluir esse gasto?
          </p>
          <br />
          <p className="text-gray-800">Ao excluir esse gasto a ação não poderá ser desfeita.</p>
        </div>

        <hr />

        <div className="flex gap-2 justify-end">
          <button className="items-center px-4 py-2 rounded gap-2 border border-slate-500 hover:bg-slate-200 text-blue-700"
          onClick={closeModal}
          >
            Cancelar
          </button>

          <Button variant="Danger"
          onClick={deleteGasto}
          >
            Excluir Gasto
          </Button>
        </div>
      </div>
    </div>
  );
}
