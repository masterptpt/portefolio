exports.handler = async (event, context) => {
  // Netlify Functions não mantém estado persistente
  // As imagens ficam armazenadas no localStorage do navegador do usuário
  // Para persistência compartilhada, seria necessário uma base de dados externa
  return {
    statusCode: 200,
    body: JSON.stringify([])
  };
};