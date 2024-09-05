import { GrClose } from "react-icons/gr";
import { Input } from "../Input";
import { Button } from "../Button";
import { Gasto } from "../../types";
import { useEffect, useState } from "react";

interface ModalProps {
  mode?: "create" | "update";
  gasto?: Gasto;
  closeModal: () => void;
  handleSubmit: (params: Partial<Gasto>) => void;
}

export function ModalGasto({
  mode,
  gasto,
  closeModal,
  handleSubmit,
}: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Entrada");

  const submitGasto = () => {
    handleSubmit({
      title,
      price,
      description,
      createdAt: date,
      category,
      ...(mode === 'update' && { id: gasto?.id }),
    });
    setTitle(""),
      setPrice(""),
      setDescription(""),
      setDate(""),
      setCategory("Entrada");
    closeModal();
  };

  useEffect(() => {
    if (!gasto) return;
    console.log(gasto);

    setTitle(gasto.title);
    setPrice(gasto.price);
    setDate(gasto.createdAt);
    setDescription(gasto.description);
    setCategory(gasto.category || "Entrada");
  }, [gasto]);

  return (
    <div className="bg-[#0000005d] absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">
              {mode === "create" ? "Registrar" : "Editar"} Gasto
            </h1>
          </div>
          <div onClick={closeModal} className="cursor-pointer">
            <GrClose />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Catégoria</label>
          <Input
            variant="select"
            options={["Entrada", "Saída"]}
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCategory(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Título</label>
          <Input
            variant="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Valor</label>
          <Input
            variant="number"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Data</label>
          <Input
            variant="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Descrição</label>
          <Input
            variant="text"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
        </div>
        <Button variant="Primary" onClick={submitGasto}>
          {mode === "create" ? "Adicionar" : "Editar"}
        </Button>
      </div>
    </div>
  );
}
