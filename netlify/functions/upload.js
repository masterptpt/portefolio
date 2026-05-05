const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dkgxqphsb',
  api_key: '747828568319522',
  api_secret: 'ZquucvZt5griGrUIyIjLD1urpUM'
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const dataUrl = payload.photo;

    if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Nenhuma imagem enviada' })
      };
    }

    const result = await cloudinary.uploader.upload(dataUrl, {
      folder: 'portfolio-memories',
      public_id: `memoria-${Date.now()}`,
      resource_type: 'image'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ path: result.secure_url })
    };
  } catch (error) {
    console.error('Erro no upload:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao fazer upload da imagem' })
    };
  }
};
