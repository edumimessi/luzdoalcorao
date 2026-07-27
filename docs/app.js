const reflexoes = [
  { ref: "Alcorão 13:28", texto: "Na recordação de Allah, os corações encontram serenidade.", tema: "Dhikr e recentramento espiritual" },
  { ref: "Alcorão 2:286", texto: "Allah não impõe a nenhuma alma uma carga superior à sua capacidade.", tema: "Responsabilidade e esperança" },
  { ref: "Alcorão 94:5-6", texto: "Com a dificuldade vem a facilidade.", tema: "Sabr e sentido no sofrimento" },
  { ref: "Alcorão 39:53", texto: "Não desespereis da misericórdia de Allah.", tema: "Rahmah e recomeço" },
  { ref: "Alcorão 65:3", texto: "Quem confia em Allah encontra Nele suficiência.", tema: "Tawakkul e confiança responsável" },
  { ref: "Alcorão 14:7", texto: "Se fordes agradecidos, Eu vos aumentarei.", tema: "Shukr e ampliação do sentido" }
];

const hoje = new Date();
const indice = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000) % reflexoes.length;
const r = reflexoes[indice];
document.querySelector("#verse-ref").textContent = r.ref;
document.querySelector("#verse-text").textContent = r.texto;
document.querySelector("#verse-theme").textContent = r.tema;

const temas = [
  "tawhid", "unicidade", "fitrah", "natureza primordial", "niyyah", "intenção",
  "sabr", "paciência", "tawakkul", "confiança", "dhikr", "recordação",
  "shukr", "gratidão", "rahmah", "misericórdia", "sentido", "logoterapia"
];

const mensagens = {
  tawhid: "Tawhid: a unicidade divina como princípio integrador da existência.",
  fitrah: "Fitrah: a disposição primordial do ser humano para reconhecer o bem e orientar-se ao Criador.",
  niyyah: "Niyyah: a intenção que confere direção moral e valor existencial ao ato.",
  sabr: "Sabr: paciência perseverante, que não é passividade, mas firmeza diante das provas.",
  tawakkul: "Tawakkul: confiança em Allah acompanhada de ação, responsabilidade e entrega.",
  dhikr: "Dhikr: recordação de Allah como retorno do coração ao seu centro.",
  shukr: "Shukr: gratidão que reconhece o dom e o converte em responsabilidade.",
  rahmah: "Rahmah: misericórdia divina e humana como fundamento do cuidado.",
  sentido: "A Logoterapia dialoga com a tradição islâmica ao investigar liberdade, responsabilidade, sofrimento e transcendência.",
  logoterapia: "A integração proposta respeita os limites entre psicoterapia e religião: a Logoterapia funciona como ponte para a busca de sentido."
};

function pesquisar() {
  const valor = document.querySelector("#search-input").value.trim().toLowerCase();
  const chave = temas.find(t => valor.includes(t));
  const normalizada = chave && ({"unicidade":"tawhid","natureza primordial":"fitrah","intenção":"niyyah","paciência":"sabr","confiança":"tawakkul","recordação":"dhikr","gratidão":"shukr","misericórdia":"rahmah"}[chave] || chave);
  document.querySelector("#search-result").textContent = normalizada ? mensagens[normalizada] : "Este tema será incorporado à biblioteca progressivamente. Tente: sabr, tawakkul, niyyah, dhikr, gratidão ou sentido.";
}

document.querySelector("#search-button").addEventListener("click", pesquisar);
document.querySelector("#search-input").addEventListener("keydown", e => { if (e.key === "Enter") pesquisar(); });