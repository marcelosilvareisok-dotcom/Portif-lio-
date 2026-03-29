import { portfolioData } from '../data';
import { Download, ArrowLeft } from 'lucide-react';

export const AdminPanel = ({ onClose }: { onClose: () => void }) => {
  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "portfolio_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <button onClick={onClose} className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Voltar ao Portfólio
      </button>
      <h1 className="text-3xl font-bold mb-8">Área Administrativa</h1>
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-semibold mb-4">Gerenciamento de Dados</h2>
        <p className="text-zinc-400 mb-6">Aqui você pode baixar uma cópia de segurança dos dados atuais do seu portfólio em formato JSON.</p>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)]"
        >
          <Download size={20} /> Baixar Dados do Portfólio (JSON)
        </button>
      </div>
    </div>
  );
};
