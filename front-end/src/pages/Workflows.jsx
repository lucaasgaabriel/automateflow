import { useEffect, useState } from "react";
import {
  getWorkflows,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow,
} from "../services/workflowService";

export default function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [nome, setNome] = useState("");
  const [editando, setEditando] = useState(null);

  // Carregar todos os workflows ao montar o componente
  useEffect(() => {
    carregarWorkflows();
  }, []);

  async function carregarWorkflows() {
    try {
      const res = await getWorkflows();
      setWorkflows(res.data);
    } catch (err) {
      console.error("Erro ao buscar workflows:", err);
    }
  }

  async function adicionarWorkflow(e) {
    e.preventDefault();
    if (!nome) return;

    try {
      if (editando) {
        await updateWorkflow(editando._id, { nome });
      } else {
        await createWorkflow({ nome });
      }

      setNome("");
      setEditando(null);
      carregarWorkflows();
    } catch (err) {
      console.error("Erro ao salvar workflow:", err);
    }
  }

  function prepararEdicao(wf) {
    setNome(wf.nome);
    setEditando(wf);
  }

  async function remover(id) {
    try {
      await deleteWorkflow(id);
      carregarWorkflows();
    } catch (err) {
      console.error("Erro ao deletar workflow:", err);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Workflows</h2>

      <form onSubmit={adicionarWorkflow} className="mb-6">
        <input
          type="text"
          placeholder="Nome do Workflow"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editando ? "Atualizar" : "Adicionar"}
        </button>
      </form>

      {workflows.length === 0 ? (
        <p className="text-gray-500">Nenhum workflow cadastrado.</p>
      ) : (
        <ul className="space-y-2">
          {workflows.map((wf) => (
            <li
              key={wf._id}
              className="bg-white shadow p-4 flex justify-between items-center rounded"
            >
              <span>{wf.nome}</span>
              <div className="space-x-2">
                <button
                  onClick={() => prepararEdicao(wf)}
                  className="text-yellow-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => remover(wf._id)}
                  className="text-red-600 hover:underline"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
