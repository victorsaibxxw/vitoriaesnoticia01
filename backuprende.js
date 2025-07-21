const container = document.getElementById('noticias-container');

noticias.forEach((noticia) => {
  const article = document.createElement('article');
  article.setAttribute("itemscope", "");
  article.setAttribute("itemtype", "https://schema.org/NewsArticle");

  article.innerHTML = `
    <h2 itemprop="headline">${noticia.titulo}</h2>
    <p><strong>Cidade:</strong> <span itemprop="locationCreated">${noticia.cidade}</span></p>
    <p itemprop="articleBody">${noticia.conteudo}</p>
    <hr/>
  `;

  container.appendChild(article);
});

function gerarIdUnico(tamanho = 8) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let resultado = '';
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indice];
  }
  return resultado;
}

const footer = document.getElementById('footer-id');
const idUnico = gerarIdUnico();
footer.innerHTML = `<p style="text-align:center; color:gray;">ID único da sessão: <strong>${idUnico}</strong></p>`;
