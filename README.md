# Portfolio com Upload para Cloudinary - Netlify

Este projeto permite hospedar um portfólio de imagens com upload para Cloudinary no Netlify.

## Configuração do Cloudinary

1. Acesse [Cloudinary](https://cloudinary.com) e crie uma conta
2. Vá para Dashboard > Account Details e copie o Cloud Name
3. Substitua `'dkgxqphsb'` no arquivo `netlify/functions/upload.js` pelo seu Cloud Name
4. Crie um Upload Preset:
   - Vá para Settings > Upload
   - Clique em "Add upload preset"
   - Nome: `portfolio-upload`
   - Folder: `portfolio-memories`
   - Modo: Unsigned (para upload direto)
   - Salve

## Deploy no Netlify

1. Faça upload desta pasta para um repositório GitHub
2. Conecte o repositório no Netlify
3. Netlify detectará automaticamente as funções em `netlify/functions/`
4. O site será publicado automaticamente

## Credenciais Usadas
- API Key: 747828568319522
- API Secret: ZquucvZt5griGrUIyIjLD1urpUM
- Cloud Name: `dkgxqphsb` (substitua pelo seu)

## Como Usar
1. Digite a senha: Forever26125
2. Arraste ou selecione uma imagem
3. Clique em "Adicionar Foto"
4. A imagem será salva no Cloudinary e exibida no portfólio

## Notas
- As imagens ficam armazenadas no Cloudinary (serviço externo confiável)
- Cada usuário vê suas próprias imagens (armazenadas no localStorage do navegador)
- Para compartilhamento global, seria necessário uma base de dados externa