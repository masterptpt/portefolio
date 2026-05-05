const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dkgxqphsb',
  api_key: process.env.CLOUDINARY_API_KEY || '747828568319522',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'ZquucvZt5griGrUIyIjLD1urpUM'
});

exports.handler = async () => {
  try {
    const result = await cloudinary.search
      .expression('folder:portfolio-memories AND resource_type:image')
      .sort_by('created_at', 'desc')
      .max_results(500)
      .execute();

    const urls = (result.resources || []).map((r) => r.secure_url);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      },
      body: JSON.stringify(urls)
    };
  } catch (error) {
    console.error('Erro ao listar fotos:', error);
    const message = (error && (error.message || (error.error && error.error.message))) || 'Erro ao listar imagens';
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message })
    };
  }
};
