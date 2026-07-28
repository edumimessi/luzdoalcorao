import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import {
  ALLAH_NAMES,
  DEVOTIONALS,
  SURAHS,
  TOPICS
} from "../docs/assets/js/data.js";

const root = path.resolve(import.meta.dirname, "..");
const docs = path.join(root, "docs");
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

const allFiles = walk(docs);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
const textFiles = allFiles.filter((file) => /\.(?:html|js|css|md|xml|txt|webmanifest)$/i.test(file));

assert(SURAHS.length === 114, `Esperadas 114 Suratas; encontradas ${SURAHS.length}.`);
assert(new Set(SURAHS.map((surah) => surah.id)).size === 114, "Há números de Surata duplicados.");
assert(SURAHS.every((surah, index) => surah.id === index + 1), "A ordem das Suratas está incompleta ou incorreta.");
assert(SURAHS.every((surah) => surah.arabic && surah.transliteration && surah.verses > 0), "Há metadados obrigatórios ausentes nas Suratas.");
assert(ALLAH_NAMES.length === 99, `Esperados 99 nomes; encontrados ${ALLAH_NAMES.length}.`);
assert(new Set(TOPICS.map((topic) => topic.slug)).size === TOPICS.length, "Há slugs temáticos duplicados.");
assert(new Set(DEVOTIONALS.map((item) => item.id)).size === DEVOTIONALS.length, "Há IDs devocionais duplicados.");

const requiredFiles = [
  "index.html", "suratas.html", "surata.html", "biblioteca.html", "tema.html",
  "devocional.html", "nomes-de-allah.html", "profeta-muhammad.html",
  "metodologia.html", "fontes.html", "privacidade.html", "404.html",
  "offline.html", "manifest.webmanifest", "robots.txt", "sitemap.xml", "sw.js",
  "CNAME", "assets/css/styles.css", "assets/js/app.js", "assets/js/data.js",
  "assets/favicon.svg", "assets/icon-192.png", "assets/icon-512.png"
];

for (const required of requiredFiles) {
  assert(fs.existsSync(path.join(docs, required)), `Arquivo obrigatório ausente: docs/${required}`);
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const name = relative(file);
  assert(/<html\s[^>]*lang="pt-BR"/i.test(html), `${name}: idioma pt-BR ausente.`);
  assert(/<meta\s+name="viewport"/i.test(html), `${name}: viewport ausente.`);
  assert(/<title>[^<]+<\/title>/i.test(html), `${name}: título ausente.`);
  assert(/assets\/css\/styles\.css/.test(html), `${name}: sistema visual não carregado.`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|#|mailto:|tel:|data:)/i.test(value)) continue;
    const clean = value.split(/[?#]/)[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    assert(target.startsWith(docs) && fs.existsSync(target), `${name}: referência local inexistente: ${value}`);
  }
}

const forbidden = [
  /\blogoterapia\b/i,
  /\bfrankl\b/i,
  /\bespiritismo\b/i,
  /\bbudismo\b/i,
  /\baplica[cç][aã]o cl[ií]nica\b/i
];

for (const file of textFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    assert(!pattern.test(content), `${relative(file)}: termo editorial proibido encontrado (${pattern}).`);
  }
}

const cname = fs.readFileSync(path.join(docs, "CNAME"), "utf8").trim();
assert(cname === "luzdoalcorao.com.br", `CNAME inesperado: ${cname}`);

if (errors.length) {
  console.error(`Validação falhou com ${errors.length} erro(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validação concluída: ${SURAHS.length} Suratas, ${ALLAH_NAMES.length} nomes, ${TOPICS.length} temas, ${DEVOTIONALS.length} devocionais e ${htmlFiles.length} páginas HTML.`);
