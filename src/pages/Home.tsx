import { TfiPlus } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";
import { Button } from "../components/Button";
import { TableGastos } from "../components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Gasto } from "../types";
import { ModalGasto } from "../components/ModalGasto";
import { ModalDelete } from "../components/ModalDelete";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa";

export function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState<"create" | "update">("create");
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [gastoForEdit, setGastoForEdit] = useState<Gasto>({} as Gasto);
  const [gastoToDelete, setGastoToDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const tokenUser = window.localStorage.getItem("token");

  const openModalByMode = (mode: "create" | "update") => {
    setMode(mode);
    setShowModal(true);
  };

  const openModalForEdit = (gasto: Gasto) => {
    openModalByMode("update");
    setGastoForEdit(gasto);
  };

  const closeModal = () => {
    if (gastoForEdit) setGastoForEdit({} as Gasto);
    setShowModal(false);
  };

  const getGastos = async () => {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(
      "https://gastos-api-9er7.onrender.com/gasto",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setGastos(data.gastos);
  };

  const handleSubmit = async (params: Partial<Gasto>) => {
    console.log(params);
    try {
      const token = window.localStorage.getItem("token");
      mode === "create"
        ? await axios.post(
            "https://gastos-api-9er7.onrender.com/gasto",
            params,
            { headers: { Authorization: `Bearer ${token}` } }
          )
        : await axios.put(
            `https://gastos-api-9er7.onrender.com/gasto/${params.id}`,
            params,
            { headers: { Authorization: `Bearer ${token}` } }
          );
      getGastos();
      toast.success(
        mode === "create"
          ? "Gasto criado com sucesso!"
          : "Gasto atualizado com sucesso!",
        {
          position: "top-right",
        }
      );
    } catch (err) {
      toast.error("Erro ao criar gasto!"),
        {
          position: "top-right",
        };
    }
  };

  useEffect(() => {
    if (!tokenUser) {
      navigate("/Login");
      return;
    }

    getGastos();
  }, []);

  const openModalDeleteGasto = (id: string | undefined) => {
    if (!id) return;

    setGastoToDelete(id);
    setShowModalDelete(true);
  };

  const deleteGasto = async () => {
    try {
      const token = window.localStorage.getItem("token");
      await axios.delete(
        `https://gastos-api-9er7.onrender.com/gasto/${gastoToDelete}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setShowModalDelete(false);
      getGastos();

      toast.success("Gasto excluído com sucesso!", {
        position: "top-right",
      });
    } catch (err) {
      toast.error("Erro ao excluir gasto!", {
        position: "top-right",
      });
    }
  };
  const calcularSaldoTotal = (): number => {
    return gastos.reduce((saldo, transaction) => {
      if (transaction.category === "Entrada") {
        return saldo + parseFloat(transaction.price);
      } else {
        return saldo - parseFloat(transaction.price);
      }
      return saldo;
    }, 0);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto h-dvh">
        <div>
          <header className="flex justify-end">
            <button className="mt-2 p-1 border-2 border-black rounded-md hover:bg-slate-200 hover:border-slate-700">
              {tokenUser ? (
                <Link
                  to="/Login"
                  onClick={() => localStorage.removeItem("token")}
                  className="flex gap-1 items-center text-red-950"
                >
                  <FaDoorOpen /> Sair
                </Link>
              ) : (
                <Link
                  to="/Login"
                  className="flex gap-1 items-center text-red-950"
                >
                  <FaDoorOpen /> Entrar
                </Link>
              )}
            </button>
          </header>
        </div>
        <div className="bg-[#fafafa] mt-8 rounded-xl p-4">
          <div className="flex gap-2 md:justify-between md:flex-row flex-col justify-normal p-2">
            <div>
              <p className="flex items-center gap-3 font-bold">
                Saldo: {""} {calcularSaldoTotal()}
              </p>
            </div>
            <div className="flex gap-3 self-end md:self-start">
              <Tooltip id="pdf-tooltip"></Tooltip>

              <Button
                variant="Primary"
                onClick={() => openModalByMode("create")}
              >
                <TfiPlus size={18} />
                Novo gasto
              </Button>
            </div>
          </div>
          <div className="p-2">
            <p className="font-bold">Controle de Finanças</p>
          </div>
          <TableGastos
            itens={gastos}
            openModalForEdit={openModalForEdit}
            openModalForDelete={openModalDeleteGasto}
          />
        </div>
      </div>

      {showModal && (
        <ModalGasto
          handleSubmit={handleSubmit}
          closeModal={() => closeModal()}
          mode={mode}
          gasto={gastoForEdit}
        />
      )}
      {showModalDelete && (
        <ModalDelete
          closeModal={() => setShowModalDelete(false)}
          deleteGasto={() => deleteGasto()}
        />
      )}
    </>
  );
}
