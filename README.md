# Site do Instituto ACRE

Site institucional estático (HTML + CSS + JS puro, sem build/framework) para o
**Instituto de Arte, Cultura e Recreação do Conjunto Esperança — ACRE**.

## Estrutura

```
institutoacre/
├── index.html          → Início
├── sobre.html           → Quem somos, missão/visão/valores, diretoria
├── projetos.html        → Todos os projetos (com filtro por categoria)
├── galeria.html          → Galeria de fotos (com lightbox)
├── contato.html          → Endereço, mapa, formulário e formas de ajudar
├── css/style.css        → Estilos (paleta baseada no logotipo)
├── js/main.js            → Menu mobile, filtro de projetos, lightbox
├── assets/img/logo.png   → Logotipo (⚠️ ver abaixo)
├── assets/img/hero/      → Fotos de destaque
├── assets/img/projetos/  → Fotos dos projetos (extraídas do portfólio em PDF)
├── robots.txt / sitemap.xml
```

## ⚠️ Antes de publicar: troque o logotipo

Não consegui baixar o arquivo direto da URL
`https://conexaojunina.com.br/wp-content/uploads/2026/08/LOGO_ACRE_REFEITA2025-2.png`
(o ambiente aqui bloqueia downloads externos). Coloquei um **logotipo temporário**
em `assets/img/logo.png` só para o site não quebrar.

**Troque esse arquivo pelo logotipo oficial (de preferência PNG com fundo
transparente) antes de publicar**, mantendo o mesmo nome de arquivo
(`assets/img/logo.png`) — assim não precisa alterar nenhum HTML.

## Paleta de cores usada

Extraída visualmente do logotipo (fundo branco, cor só em botões/menu, como pedido):

| Cor | Uso | Hex |
|---|---|---|
| Azul marinho | Títulos, texto do menu, rodapé | `#23268C` |
| Azul | Botões primários, links, destaques | `#1CA7E0` |
| Amarelo | Detalhes e categoria "infantil" | `#FFC72C` |
| Rosa/Magenta | Botão de call-to-action / doação | `#EC1E7E` |
| Turquesa | Detalhes e categoria "tradição" | `#3EC6C6` |
| Laranja | Detalhes e ícones | `#F5821F` |
| Roxo | Categoria "terceira idade" | `#9B2D8E` |

Para ajustar qualquer cor, edite as variáveis no topo do arquivo `css/style.css`
(bloco `:root`).

## Como publicar (GitHub + Vercel)

### 1. Copiar os arquivos para a pasta do projeto

Extraia/copie **todo o conteúdo desta pasta** para dentro de:

```
C:\Users\BENEL\Documents\CNX\ACRE\institutoacre
```

(os arquivos devem ficar direto dentro dela — ex.: `...\institutoacre\index.html`,
não dentro de uma subpasta extra).

### 2. Subir para o GitHub

Abra o terminal (PowerShell ou Git Bash) dentro dessa pasta e rode:

```bash
cd "C:\Users\BENEL\Documents\CNX\ACRE\institutoacre"

# se a pasta ainda não é um repositório git:
git init
git remote add origin https://github.com/conexaorepertorios2018-creator/institutoacre.git

git add .
git commit -m "Site institucional do Instituto ACRE"
git branch -M main
git push -u origin main
```

Se a pasta já estiver conectada ao repositório (você já tinha clonado antes),
basta:

```bash
git add .
git commit -m "Site institucional do Instituto ACRE"
git push
```

> Se o GitHub pedir login, use um **Personal Access Token** no lugar da senha
> (Settings → Developer settings → Personal access tokens, no próprio GitHub).

### 3. Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar sua conta do GitHub).
2. Clique em **Add New → Project**.
3. Selecione o repositório `conexaorepertorios2018-creator/institutoacre`.
4. Em **Framework Preset**, deixe como **Other** (site estático — não precisa de build).
5. Não é preciso configurar *Build Command* nem *Output Directory* — pode deixar em branco/padrão.
6. Clique em **Deploy**.

Em cerca de 1 minuto o site estará no ar em um endereço como
`https://institutoacre.vercel.app` (ou similar). Você pode depois conectar um
domínio próprio em **Project → Settings → Domains**.

Toda vez que você der `git push` novamente, a Vercel publica a nova versão
automaticamente.

## Editando o conteúdo depois

Como é um site simples (HTML puro), qualquer texto pode ser editado direto nos
arquivos `.html` com qualquer editor (ex.: VS Code, Notepad++). Structure:

- Textos de cada projeto: `projetos.html`
- Fotos da galeria: `galeria.html` (adicione novos blocos `<figure>` seguindo o
  padrão existente e coloque a imagem em `assets/img/projetos/`)
- Telefone/e-mail/endereço: aparecem em todas as páginas — use "localizar e
  substituir" no editor para trocar em massa se mudar.

## Formulário de contato

O formulário da página `contato.html` usa `mailto:` — ou seja, ao enviar, ele
abre o programa de e-mail do visitante já preenchido, sem precisar de servidor
ou backend. Se no futuro quiser um formulário que envie e-mails diretamente
(sem depender do app de e-mail do visitante), dá para integrar um serviço como
Formspree ou EmailJS — posso te ajudar a configurar quando quiser.
