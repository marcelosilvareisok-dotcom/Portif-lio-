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
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
        >
          <Download size={20} /> Baixar Dados do Portfólio (JSON)
        </button>
      </div>
    </div>
  );
};
