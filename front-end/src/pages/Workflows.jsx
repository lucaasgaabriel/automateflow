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

  function adicionarWorkflow(e) {
    e.preventDefault();

    if (!nome) return;

    if (editando !== null) {
      const atualizados = [...workflows];
      atualizados[editando].nome = nome;
      setWorkflows(atualizados);
      setEditando(null);
    } else {
      setWorkflows([...workflows, { nome }]);
    }

    setNome("");
  }

  function editarWorkflow(index) {
    setNome(workflows[index].nome);
    setEditando(index);
  }

  function removerWorkflow(index) {
    const atualizados = workflows.filter((_, i) => i !== index);
    setWorkflows(atualizados);
    setEditando(null);
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
          {editando !== null ? "Atualizar" : "Adicionar"}
        </button>
      </form>

      {workflows.length === 0 ? (
        <p className="text-gray-500">Nenhum workflow criado.</p>
      ) : (
        <ul className="space-y-2">
          {workflows.map((wf, i) => (
            <li
              key={i}
              className="bg-white shadow p-4 flex justify-between items-center rounded"
            >
              <span>{wf.nome}</span>
              <div className="space-x-2">
                <button
                  onClick={() => editarWorkflow(i)}
                  className="text-yellow-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => removerWorkflow(i)}
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
