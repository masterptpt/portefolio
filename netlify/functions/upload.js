const cloudinary = require('cloudinary').v2;
const formidable = require('formidable');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'dkgxqphsb', // Substitua pelo seu cloud name
  api_key: '747828568319522',
  api_secret: 'ZquucvZt5griGrUIyIjLD1urpUM'
});

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    };
  }

  try {
    const form = new formidable.IncomingForm();
    const { files } = await new Promise((resolve, reject) => {
      form.parse(event, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const file = files.photo;
    if (!file) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Nenhuma imagem enviada' })
      };
    }

    // Upload para Cloudinary
    const result = await cloudinary.uploader.upload(file.filepath, {
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