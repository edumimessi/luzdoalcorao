# Luz do Alcorão

Biblioteca islâmica em língua portuguesa, desenvolvida para leitura, estudo e devoção com distinção explícita entre:

1. texto do Alcorão;
2. hadith identificado;
3. síntese de Tafsir atribuída;
4. aplicação editorial.

## Estado atual

A primeira fundação profissional inclui:

- identidade visual responsiva em verde profundo, dourado, marfim e azul-petróleo;
- índice pesquisável das 114 Suratas;
- páginas de Surata orientadas a dados;
- biblioteca temática com filtros e busca;
- devocional diário estruturado;
- página dos Belos Nomes de Allah com nota sobre a enumeração;
- introdução à Sirah do Profeta Muhammad ﷺ;
- favoritos locais, compartilhamento e tema claro/escuro;
- PWA com funcionamento offline;
- SEO técnico, Open Graph, sitemap, robots e domínio personalizado;
- integração opcional com Google Analytics, desativada por padrão.

## Desenvolvimento local

O site é estático e não exige etapa de compilação:

```bash
python3 -m http.server 8000 --directory docs
```

Acesse `http://localhost:8000`.

Valide a integridade editorial e técnica antes de publicar:

```bash
node scripts/validate.mjs
```

## Organização

- `docs/`: raiz publicada pelo GitHub Pages;
- `docs/assets/js/data.js`: metadados das Suratas, temas, Nomes e devocionais;
- `docs/assets/js/app.js`: componentes e comportamento;
- `docs/assets/css/styles.css`: sistema visual;
- `docs/metodologia.html`: critérios editoriais;
- `docs/fontes.html`: fontes e créditos.
- `scripts/validate.mjs`: auditoria automática de dados, links e política editorial.

## Publicação

Configure o GitHub Pages para publicar a pasta `/docs` da branch `main`. O domínio esperado é `luzdoalcorao.com.br`.

## Rigor editorial

Nenhuma aplicação contemporânea deve ser apresentada como doutrina. Divergências reconhecidas devem ser explicitadas. Hadiths precisam de coleção, numeração e classificação quando a autenticidade não for autoevidente pela coleção.
