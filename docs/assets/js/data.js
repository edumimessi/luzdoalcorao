const surahRows = [
  [1,"الفاتحة","Al-Fatihah","meccan",7],[2,"البقرة","Al-Baqarah","medinan",286],[3,"آل عمران","Ali 'Imran","medinan",200],
  [4,"النساء","An-Nisa","medinan",176],[5,"المائدة","Al-Ma'idah","medinan",120],[6,"الأنعام","Al-An'am","meccan",165],
  [7,"الأعراف","Al-A'raf","meccan",206],[8,"الأنفال","Al-Anfal","medinan",75],[9,"التوبة","At-Tawbah","medinan",129],
  [10,"يونس","Yunus","meccan",109],[11,"هود","Hud","meccan",123],[12,"يوسف","Yusuf","meccan",111],
  [13,"الرعد","Ar-Ra'd","medinan",43],[14,"ابراهيم","Ibrahim","meccan",52],[15,"الحجر","Al-Hijr","meccan",99],
  [16,"النحل","An-Nahl","meccan",128],[17,"الإسراء","Al-Isra","meccan",111],[18,"الكهف","Al-Kahf","meccan",110],
  [19,"مريم","Maryam","meccan",98],[20,"طه","Taha","meccan",135],[21,"الأنبياء","Al-Anbya","meccan",112],
  [22,"الحج","Al-Hajj","medinan",78],[23,"المؤمنون","Al-Mu'minun","meccan",118],[24,"النور","An-Nur","medinan",64],
  [25,"الفرقان","Al-Furqan","meccan",77],[26,"الشعراء","Ash-Shu'ara","meccan",227],[27,"النمل","An-Naml","meccan",93],
  [28,"القصص","Al-Qasas","meccan",88],[29,"العنكبوت","Al-'Ankabut","meccan",69],[30,"الروم","Ar-Rum","meccan",60],
  [31,"لقمان","Luqman","meccan",34],[32,"السجدة","As-Sajdah","meccan",30],[33,"الأحزاب","Al-Ahzab","medinan",73],
  [34,"سبإ","Saba","meccan",54],[35,"فاطر","Fatir","meccan",45],[36,"يس","Ya-Sin","meccan",83],
  [37,"الصافات","As-Saffat","meccan",182],[38,"ص","Sad","meccan",88],[39,"الزمر","Az-Zumar","meccan",75],
  [40,"غافر","Ghafir","meccan",85],[41,"فصلت","Fussilat","meccan",54],[42,"الشورى","Ash-Shuraa","meccan",53],
  [43,"الزخرف","Az-Zukhruf","meccan",89],[44,"الدخان","Ad-Dukhan","meccan",59],[45,"الجاثية","Al-Jathiyah","meccan",37],
  [46,"الأحقاف","Al-Ahqaf","meccan",35],[47,"محمد","Muhammad","medinan",38],[48,"الفتح","Al-Fath","medinan",29],
  [49,"الحجرات","Al-Hujurat","medinan",18],[50,"ق","Qaf","meccan",45],[51,"الذاريات","Adh-Dhariyat","meccan",60],
  [52,"الطور","At-Tur","meccan",49],[53,"النجم","An-Najm","meccan",62],[54,"القمر","Al-Qamar","meccan",55],
  [55,"الرحمن","Ar-Rahman","medinan",78],[56,"الواقعة","Al-Waqi'ah","meccan",96],[57,"الحديد","Al-Hadid","medinan",29],
  [58,"المجادلة","Al-Mujadila","medinan",22],[59,"الحشر","Al-Hashr","medinan",24],[60,"الممتحنة","Al-Mumtahanah","medinan",13],
  [61,"الصف","As-Saf","medinan",14],[62,"الجمعة","Al-Jumu'ah","medinan",11],[63,"المنافقون","Al-Munafiqun","medinan",11],
  [64,"التغابن","At-Taghabun","medinan",18],[65,"الطلاق","At-Talaq","medinan",12],[66,"التحريم","At-Tahrim","medinan",12],
  [67,"الملك","Al-Mulk","meccan",30],[68,"القلم","Al-Qalam","meccan",52],[69,"الحاقة","Al-Haqqah","meccan",52],
  [70,"المعارج","Al-Ma'arij","meccan",44],[71,"نوح","Nuh","meccan",28],[72,"الجن","Al-Jinn","meccan",28],
  [73,"المزمل","Al-Muzzammil","meccan",20],[74,"المدثر","Al-Muddaththir","meccan",56],[75,"القيامة","Al-Qiyamah","meccan",40],
  [76,"الانسان","Al-Insan","medinan",31],[77,"المرسلات","Al-Mursalat","meccan",50],[78,"النبإ","An-Naba","meccan",40],
  [79,"النازعات","An-Nazi'at","meccan",46],[80,"عبس","'Abasa","meccan",42],[81,"التكوير","At-Takwir","meccan",29],
  [82,"الإنفطار","Al-Infitar","meccan",19],[83,"المطففين","Al-Mutaffifin","meccan",36],[84,"الإنشقاق","Al-Inshiqaq","meccan",25],
  [85,"البروج","Al-Buruj","meccan",22],[86,"الطارق","At-Tariq","meccan",17],[87,"الأعلى","Al-A'la","meccan",19],
  [88,"الغاشية","Al-Ghashiyah","meccan",26],[89,"الفجر","Al-Fajr","meccan",30],[90,"البلد","Al-Balad","meccan",20],
  [91,"الشمس","Ash-Shams","meccan",15],[92,"الليل","Al-Layl","meccan",21],[93,"الضحى","Ad-Duhaa","meccan",11],
  [94,"الشرح","Ash-Sharh","meccan",8],[95,"التين","At-Tin","meccan",8],[96,"العلق","Al-'Alaq","meccan",19],
  [97,"القدر","Al-Qadr","meccan",5],[98,"البينة","Al-Bayyinah","medinan",8],[99,"الزلزلة","Az-Zalzalah","medinan",8],
  [100,"العاديات","Al-'Adiyat","meccan",11],[101,"القارعة","Al-Qari'ah","meccan",11],[102,"التكاثر","At-Takathur","meccan",8],
  [103,"العصر","Al-'Asr","meccan",3],[104,"الهمزة","Al-Humazah","meccan",9],[105,"الفيل","Al-Fil","meccan",5],
  [106,"قريش","Quraysh","meccan",4],[107,"الماعون","Al-Ma'un","meccan",7],[108,"الكوثر","Al-Kawthar","meccan",3],
  [109,"الكافرون","Al-Kafirun","meccan",6],[110,"النصر","An-Nasr","medinan",3],[111,"المسد","Al-Masad","meccan",5],
  [112,"الإخلاص","Al-Ikhlas","meccan",4],[113,"الفلق","Al-Falaq","meccan",5],[114,"الناس","An-Nas","meccan",6]
];

export const SURAHS = surahRows.map(([id, arabic, transliteration, type, verses]) => ({
  id, arabic, transliteration, type, verses,
  quranUrl: `https://quran.com/pt/${id}`
}));

export const FEATURED_SURAHS = {
  1: {
    meaning: "A Abertura",
    summary: "Al-Fatihah abre o Alcorão e ocupa posição central na oração ritual. Reúne louvor a Allah, reconhecimento de Sua soberania e misericórdia, declaração de adoração exclusiva e súplica por orientação ao caminho reto.",
    themes: ["Louvor", "Tawhid", "Adoração", "Súplica", "Orientação"],
    commentary: "Os comentaristas clássicos a descrevem como síntese dos grandes significados do Alcorão. A passagem se move do conhecimento de Allah à relação de servidão: primeiro reconhece quem Ele é; depois declara a quem se adora e de quem se pede auxílio; por fim, pede orientação. Ibn Kathir também destaca a relação entre adoração e busca de ajuda em Allah."
  },
  2: {
    meaning: "A Vaca",
    summary: "Al-Baqarah é a mais longa Surata do Alcorão. Aborda fé, lei, adoração, história profética, comunidade, família, justiça econômica e a formação moral da Ummah em Medina.",
    themes: ["Orientação", "Aliança", "Adoração", "Lei", "Comunidade", "Taqwa"],
    commentary: "Sua extensão não representa dispersão: os temas convergem para a construção de uma comunidade que recebe orientação e responde a ela com fé e obediência. As narrativas dos povos anteriores funcionam como advertência e ensino. Questões jurídicas aparecem ligadas a taqwa, responsabilidade e consciência de Allah."
  },
  3: {
    meaning: "A Família de Imran",
    summary: "Ali 'Imran afirma a unidade da revelação, trata da família de Imran, de Maryam e de 'Isa, e oferece orientação à comunidade diante de provações, debates e derrotas.",
    themes: ["Revelação", "Maryam", "'Isa", "Perseverança", "Unidade", "Confiança"],
    commentary: "A Surata vincula conhecimento e firmeza. A resposta à ambiguidade não é seguir interpretações caprichosas, mas retornar ao que é claro e pedir constância. A narrativa de Uhud ensina que vitória e derrota devem ser lidas moralmente, sem reduzir o tawakkul a passividade."
  },
  12: {
    meaning: "José",
    summary: "Yusuf apresenta de forma contínua a história do profeta José: sonho, separação, tentação, prisão, autoridade, reencontro e perdão. O Alcorão a denomina uma das mais belas narrativas.",
    themes: ["Sabr", "Castidade", "Providência", "Perdão", "Família", "Esperança"],
    commentary: "O sentido dos acontecimentos se revela gradualmente. A leitura de Tafsir destaca a proteção de Allah, a integridade de Yusuf nas mudanças de condição e a beleza do perdão quando ele alcança poder. A Surata não romantiza a prova; mostra fidelidade perseverante através dela."
  },
  18: {
    meaning: "A Caverna",
    summary: "Al-Kahf reúne narrativas sobre jovens crentes, o dono de dois jardins, Musa com o servo sábio e Dhul-Qarnayn. Seus episódios examinam provas de fé, riqueza, conhecimento e poder.",
    themes: ["Fé", "Prova", "Conhecimento", "Poder", "Humildade", "Proteção"],
    commentary: "Os quatro grandes episódios advertem contra a ilusão de autossuficiência. O crente preserva a fé, reconhece que a riqueza é transitória, admite os limites do próprio conhecimento e exerce poder com justiça. O costume de recitá-la na sexta-feira se apoia em relatos proféticos conhecidos."
  },
  19: {
    meaning: "Maria",
    summary: "Maryam narra a misericórdia de Allah em histórias de Zakariyya, Yahya, Maryam, 'Isa, Ibrahim e outros profetas. A Surata enfatiza devoção, milagre, verdade profética e a unicidade divina.",
    themes: ["Misericórdia", "Maryam", "'Isa", "Profetas", "Du'a", "Tawhid"],
    commentary: "O fio condutor é a misericórdia de Allah manifestada onde os meios humanos parecem insuficientes. A honra concedida a Maryam e a descrição de 'Isa são apresentadas no horizonte corânico do tawhid e da profecia, sem atribuição de divindade."
  },
  36: {
    meaning: "Ya-Sin",
    summary: "Ya-Sin afirma a veracidade da mensagem, apresenta sinais de Allah na criação, adverte sobre a ressurreição e recorda a responsabilidade diante do Criador.",
    themes: ["Mensagem", "Sinais", "Ressurreição", "Responsabilidade", "Tawhid"],
    commentary: "A Surata alterna chamado, sinais e cenas do além. O argumento corânico une revelação e criação: Aquele que dá vida à terra morta e criou inicialmente é capaz de ressuscitar. O leitor é convidado a perceber os sinais e responder moralmente."
  },
  55: {
    meaning: "O Misericordioso",
    summary: "Ar-Rahman celebra o ensino do Alcorão, a criação, o equilíbrio, as dádivas de Allah e a realidade do Juízo e do Paraíso, dirigindo-se aos seres humanos e aos jinn.",
    themes: ["Rahmah", "Criação", "Equilíbrio", "Gratidão", "Juízo", "Paraíso"],
    commentary: "A pergunta repetida sobre quais favores do Senhor serão negados estrutura a contemplação. A repetição não é mera ornamentação: convoca humanos e jinn a reconhecer, agradecer e não tratar os sinais como algo banal."
  },
  67: {
    meaning: "A Soberania",
    summary: "Al-Mulk proclama o domínio absoluto de Allah, apresenta a vida e a morte como prova, convida à contemplação da criação e adverte sobre a responsabilidade final.",
    themes: ["Soberania", "Criação", "Prova", "Temor", "Responsabilidade"],
    commentary: "A perfeição da criação é apresentada como sinal da soberania e sabedoria divinas. Olhar novamente para os céus treina a humildade: a percepção humana retorna limitada, enquanto a ordem criada aponta para o poder do Criador."
  },
  93: {
    meaning: "A Manhã Clara",
    summary: "Ad-Duhaa consola o Profeta ﷺ, nega que Allah o tenha abandonado, recorda cuidados anteriores e transforma gratidão em cuidado com o órfão, o necessitado e os dons recebidos.",
    themes: ["Consolo", "Esperança", "Cuidado", "Gratidão", "Serviço"],
    commentary: "O consolo não termina no sentimento interior. A recordação da graça conduz a deveres concretos: não oprimir o órfão, não repelir quem pede e mencionar a bênção do Senhor. A experiência da misericórdia forma uma ética de misericórdia."
  },
  94: {
    meaning: "A Expansão",
    summary: "Ash-Sharh recorda o alívio concedido ao Profeta ﷺ, afirma a companhia da facilidade com a dificuldade e orienta a perseverar na adoração e no retorno a Allah.",
    themes: ["Alívio", "Sabr", "Esperança", "Adoração", "Perseverança"],
    commentary: "A repetição de que com a dificuldade vem a facilidade sustenta esperança sem prometer ausência de prova. Os versículos finais unem conclusão de uma tarefa, novo esforço e direção do desejo a Allah."
  },
  112: {
    meaning: "A Sinceridade",
    summary: "Al-Ikhlas é uma declaração concentrada do tawhid: Allah é Um, absoluto em Sua suficiência, não gera nem foi gerado e nada se compara a Ele.",
    themes: ["Tawhid", "Unicidade", "Transcendência", "Ikhlas"],
    commentary: "Os comentaristas a reconhecem como síntese da afirmação de quem Allah é e da negação do que não Lhe convém. Sua brevidade exige precisão: não é uma definição exaustiva, mas proteção decisiva contra associações e comparações."
  },
  113: {
    meaning: "A Alvorada",
    summary: "Al-Falaq ensina a buscar refúgio no Senhor da alvorada contra os males da criação, da escuridão, de práticas nocivas e da inveja.",
    themes: ["Proteção", "Refúgio", "Confiança", "Inveja"],
    commentary: "A Surata educa o coração a reconhecer a existência do mal sem atribuir-lhe independência. O refúgio é pedido ao Senhor que faz surgir a luz, afirmando dependência de Allah e evitando superstição autônoma."
  },
  114: {
    meaning: "A Humanidade",
    summary: "An-Nas conclui o Alcorão ensinando a buscar refúgio no Senhor, Rei e Deus da humanidade contra o sussurrador que se retrai e atua nos corações.",
    themes: ["Proteção", "Waswasah", "Tawhid", "Coração", "Refúgio"],
    commentary: "Os três títulos divinos — Senhor, Rei e Deus da humanidade — antecedem a súplica contra uma ameaça interior. A tradição lê Al-Falaq e An-Nas em conjunto como duas Suratas de busca de proteção."
  }
};

export const TOPIC_CATEGORIES = {
  fundamentos: "Fundamentos",
  pessoas: "Profetas e gerações",
  adoracao: "Adoração",
  familia: "Família e sociedade",
  virtudes: "Virtudes do coração"
};

export const TOPICS = [
  { slug:"profeta-muhammad", title:"Profeta Muhammad ﷺ", category:"pessoas", description:"Vida, missão, caráter e legado do Mensageiro de Allah ﷺ.", refs:["21:107","33:21"], specialUrl:"profeta-muhammad.html" },
  { slug:"historias-dos-profetas", title:"Histórias dos Profetas", category:"pessoas", description:"Narrativas corânicas de orientação, perseverança e tawhid.", refs:["6:83-90","12:111"] },
  { slug:"companheiros", title:"Companheiros", category:"pessoas", description:"A primeira geração muçulmana e seu serviço à revelação.", refs:["9:100","48:29"] },
  { slug:"virtudes-islamicas", title:"Virtudes Islâmicas", category:"virtudes", description:"Um mapa de caráter a partir do Alcorão e da Sunnah.", refs:["3:134","16:90"] },
  { slug:"ramada", title:"Ramadã", category:"adoracao", description:"Jejum, Alcorão, oração e renovação durante o mês abençoado.", refs:["2:183-185","97:1-5"] },
  { slug:"hajj", title:"Hajj", category:"adoracao", description:"Peregrinação, seus fundamentos e seus significados.", refs:["2:196-203","22:27-37"] },
  { slug:"umrah", title:"Umrah", category:"adoracao", description:"A peregrinação menor e sua relação com a Casa Sagrada.", refs:["2:196"] },
  { slug:"jejum", title:"Jejum", category:"adoracao", description:"Adoração que educa taqwa, disciplina e gratidão.", refs:["2:183-187"] },
  { slug:"zakat", title:"Zakat", category:"adoracao", description:"Purificação dos bens, direito social e responsabilidade.", refs:["2:43","9:60","9:103"] },
  { slug:"familia", title:"Família", category:"familia", description:"Laços, direitos e misericórdia na vida familiar.", refs:["4:1","17:23-24"] },
  { slug:"casamento", title:"Casamento", category:"familia", description:"Tranquilidade, afeto, misericórdia e deveres recíprocos.", refs:["30:21","4:19"] },
  { slug:"educacao-dos-filhos", title:"Educação dos filhos", category:"familia", description:"Fé, oração, caráter e exemplo no cuidado com os filhos.", refs:["31:12-19","66:6"] },
  { slug:"etica", title:"Ética", category:"familia", description:"Justiça, palavra verdadeira, confiança e boa conduta.", refs:["16:90","33:70"] },
  { slug:"arrependimento", title:"Arrependimento", category:"virtudes", description:"Tawbah sincera, abandono do erro e retorno a Allah.", refs:["39:53","66:8"] },
  { slug:"perdao", title:"Perdão", category:"virtudes", description:"Pedir perdão a Allah e perdoar as pessoas.", refs:["3:135","24:22"] },
  { slug:"misericordia", title:"Misericórdia", category:"virtudes", description:"Rahmah como atributo divino e princípio de conduta.", refs:["7:156","21:107"] },
  { slug:"gratidao", title:"Gratidão", category:"virtudes", description:"Shukr no coração, na palavra e na ação.", refs:["14:7","31:12"] },
  { slug:"sabr", title:"Sabr", category:"virtudes", description:"Paciência, constância e domínio diante das provas.", refs:["2:153","3:200"] },
  { slug:"tawakkul", title:"Tawakkul", category:"virtudes", description:"Tomar os meios lícitos e confiar o resultado a Allah.", refs:["3:159","65:3"] },
  { slug:"taqwa", title:"Taqwa", category:"fundamentos", description:"Consciência reverente de Allah que orienta escolhas.", refs:["2:2","49:13"] },
  { slug:"ikhlas", title:"Ikhlas", category:"fundamentos", description:"Sinceridade e purificação da intenção na adoração.", refs:["98:5","112:1-4"] },
  { slug:"dhikr", title:"Dhikr", category:"adoracao", description:"Recordação de Allah pela língua, pelo coração e pela obediência.", refs:["13:28","33:41-42"] },
  { slug:"tawhid", title:"Tawhid", category:"fundamentos", description:"A unicidade de Allah no conhecimento, na adoração e nos Seus nomes e atributos.", refs:["2:255","112:1-4"] },
  { slug:"salah", title:"Salah", category:"adoracao", description:"A oração ritual como vínculo, lembrança e disciplina.", refs:["2:43","20:14"] },
  { slug:"dua", title:"Du'a", category:"adoracao", description:"Invocação, necessidade e confiança na resposta de Allah.", refs:["2:186","40:60"] },
  { slug:"conhecimento", title:"Conhecimento", category:"fundamentos", description:"Buscar, verificar e viver o conhecimento benéfico.", refs:["20:114","39:9"] },
  { slug:"ahlak", title:"Bom caráter", category:"virtudes", description:"Verdade, humildade, gentileza e excelência nas relações.", refs:["3:159","41:34"] }
].map(topic => ({ ...topic, url: topic.specialUrl || `tema.html?slug=${topic.slug}` }));

export const TOPIC_DETAILS = {
  default: {
    overview: "Este tema é estudado a partir do conjunto das evidências, evitando retirar um versículo do seu contexto ou transformar uma aplicação contemporânea em doutrina.",
    commentary: "Os comentários clássicos ajudam a compreender vocabulário, contexto e relações entre versículos. Quando há mais de uma interpretação reconhecida, a divergência deve ser apresentada com justiça.",
    practice: "Leia as referências indicadas no contexto da Surata, registre o ensinamento principal e escolha uma ação pequena, lícita e verificável para praticar."
  },
  sabr: {
    overview: "Sabr abrange perseverança na obediência, resistência ao pecado e firmeza diante do decreto doloroso. Não é apatia nem negação do sofrimento.",
    commentary: "Ibn Kathir, ao comentar 2:153, relaciona a busca de auxílio na paciência e na oração. A companhia especial de Allah com os pacientes indica apoio, orientação e cuidado, não uma presença física.",
    practice: "Diante de uma prova, diferencie aquilo que exige ação daquilo que exige aceitação. Preserve a oração e evite decisões impulsivas."
  },
  tawakkul: {
    overview: "Tawakkul é dependência do coração em Allah acompanhada do uso responsável dos meios permitidos. Confiar não significa abandonar planejamento ou dever.",
    commentary: "Em 3:159, a ordem de confiar em Allah vem depois da consulta e da decisão. A sequência corânica reúne conselho, escolha, ação e entrega do resultado.",
    practice: "Planeje o próximo passo, consulte quem tem conhecimento, execute o que lhe compete e recuse a pretensão de controlar o resultado."
  },
  taqwa: {
    overview: "Taqwa é consciência reverente que leva o servo a colocar proteção entre si e aquilo que desagrada a Allah, cumprindo ordens e evitando proibições.",
    commentary: "A abertura de Al-Baqarah descreve o Alcorão como orientação para os muttaqin. Taqwa não é apenas temor emocional: aparece ligada à fé no invisível, oração e generosidade.",
    practice: "Antes de uma decisão, pergunte qual opção é mais obediente, justa e segura para a consciência diante de Allah."
  },
  dhikr: {
    overview: "Dhikr inclui recordar Allah com fórmulas ensinadas, recitar o Alcorão, fazer du'a e viver em obediência consciente.",
    commentary: "Em 13:28, a serenidade do coração está ligada à recordação de Allah dentro de um trecho sobre fé, retorno e orientação. O versículo não reduz toda aflição a falta de fé nem substitui cuidados necessários.",
    practice: "Reserve um momento após uma das orações obrigatórias para adhkar autênticos, com atenção ao significado e constância."
  },
  arrependimento: {
    overview: "Tawbah é retorno: reconhecer o erro, abandoná-lo, lamentá-lo e decidir não voltar. Quando direitos humanos foram violados, inclui restituição ou busca de perdão conforme possível e sábio.",
    commentary: "Alcorão 39:53 proíbe o desespero da misericórdia de Allah e, nos versículos seguintes, chama ao retorno e à submissão. Esperança e mudança caminham juntas.",
    practice: "Nomeie o erro sem desculpas, interrompa o comportamento, peça perdão a Allah e estabeleça uma barreira prática contra a repetição."
  }
};

const nameRows = [
  ["الرحمن","Ar-Rahman","O Infinitamente Misericordioso"],["الرحيم","Ar-Rahim","O Especialmente Misericordioso"],
  ["الملك","Al-Malik","O Rei"],["القدوس","Al-Quddus","O Santíssimo"],["السلام","As-Salam","A Fonte da Paz e Perfeição"],
  ["المؤمن","Al-Mu'min","O Doador de Segurança"],["المهيمن","Al-Muhaymin","O Guardião"],["العزيز","Al-'Aziz","O Todo-Poderoso"],
  ["الجبار","Al-Jabbar","O Supremo em Poder"],["المتكبر","Al-Mutakabbir","O Majestoso"],["الخالق","Al-Khaliq","O Criador"],
  ["البارئ","Al-Bari'","O Originador"],["المصور","Al-Musawwir","O Formador"],["الغفار","Al-Ghaffar","O Constantemente Perdoador"],
  ["القهار","Al-Qahhar","O Dominador Supremo"],["الوهاب","Al-Wahhab","O Doador Generoso"],["الرزاق","Ar-Razzaq","O Provedor"],
  ["الفتاح","Al-Fattah","Aquele que Abre e Julga"],["العليم","Al-'Alim","O Onisciente"],["القابض","Al-Qabid","Aquele que Restringe"],
  ["الباسط","Al-Basit","Aquele que Expande"],["الخافض","Al-Khafid","Aquele que Rebaixa"],["الرافع","Ar-Rafi'","Aquele que Eleva"],
  ["المعز","Al-Mu'izz","Aquele que Honra"],["المذل","Al-Mudhill","Aquele que Humilha"],["السميع","As-Sami'","O Oniouvinte"],
  ["البصير","Al-Basir","O Onividente"],["الحكم","Al-Hakam","O Juiz"],["العدل","Al-'Adl","O Perfeitamente Justo"],
  ["اللطيف","Al-Latif","O Sutil e Benigno"],["الخبير","Al-Khabir","O Plenamente Informado"],["الحليم","Al-Halim","O Clemente"],
  ["العظيم","Al-'Azim","O Magnífico"],["الغفور","Al-Ghafur","O Muito Perdoador"],["الشكور","Ash-Shakur","Aquele que Recompensa a Gratidão"],
  ["العلي","Al-'Aliyy","O Altíssimo"],["الكبير","Al-Kabir","O Grandioso"],["الحفيظ","Al-Hafiz","O Preservador"],
  ["المقيت","Al-Muqit","O Sustentador"],["الحسيب","Al-Hasib","Aquele que Basta e Ajusta as Contas"],["الجليل","Al-Jalil","O Majestoso"],
  ["الكريم","Al-Karim","O Generosíssimo"],["الرقيب","Ar-Raqib","O Vigilante"],["المجيب","Al-Mujib","Aquele que Responde"],
  ["الواسع","Al-Wasi'","O Vasto"],["الحكيم","Al-Hakim","O Sábio"],["الودود","Al-Wadud","O Amoroso"],
  ["المجيد","Al-Majid","O Glorioso"],["الباعث","Al-Ba'ith","Aquele que Ressuscita"],["الشهيد","Ash-Shahid","A Testemunha"],
  ["الحق","Al-Haqq","A Verdade"],["الوكيل","Al-Wakil","O Dispensador de Assuntos"],["القوي","Al-Qawiyy","O Fortíssimo"],
  ["المتين","Al-Matin","O Firme"],["الولي","Al-Waliyy","O Protetor Próximo"],["الحميد","Al-Hamid","O Digno de Louvor"],
  ["المحصي","Al-Muhsi","Aquele que Tudo Enumera"],["المبدئ","Al-Mubdi'","O Iniciador"],["المعيد","Al-Mu'id","Aquele que Restaura"],
  ["المحيي","Al-Muhyi","Aquele que Dá Vida"],["المميت","Al-Mumit","Aquele que Dá a Morte"],["الحي","Al-Hayy","O Vivente"],
  ["القيوم","Al-Qayyum","O Autossubsistente que Sustenta Tudo"],["الواجد","Al-Wajid","Aquele que Nada Deixa de Encontrar"],["الماجد","Al-Maajid","O Nobre e Glorioso"],
  ["الواحد","Al-Wahid","O Único"],["الأحد","Al-Ahad","O Um"],["الصمد","As-Samad","O Absoluto e Eterno Refúgio"],
  ["القادر","Al-Qadir","O Capaz"],["المقتدر","Al-Muqtadir","O Onipotente"],["المقدم","Al-Muqaddim","Aquele que Adianta"],
  ["المؤخر","Al-Mu'akhkhir","Aquele que Atrasa"],["الأول","Al-Awwal","O Primeiro"],["الآخر","Al-Akhir","O Último"],
  ["الظاهر","Az-Zahir","O Manifesto e Elevado"],["الباطن","Al-Batin","O Oculto e Íntimo"],["الوالي","Al-Waali","O Governante"],
  ["المتعالي","Al-Muta'ali","O Sublime"],["البر","Al-Barr","O Benfeitor"],["التواب","At-Tawwab","Aquele que Aceita o Arrependimento"],
  ["المنتقم","Al-Muntaqim","Aquele que Retribui com Justiça"],["العفو","Al-'Afuww","Aquele que Apaga as Faltas"],["الرؤوف","Ar-Ra'uf","O Compassivo"],
  ["مالك الملك","Malik al-Mulk","O Possuidor de Toda Soberania"],["ذو الجلال والإكرام","Dhul-Jalali wal-Ikram","O Senhor da Majestade e da Generosidade"],
  ["المقسط","Al-Muqsit","O Equitativo"],["الجامع","Al-Jami'","Aquele que Reúne"],["الغني","Al-Ghani","O Autossuficiente"],
  ["المغني","Al-Mughni","Aquele que Enriquece"],["المانع","Al-Mani'","Aquele que Impede"],["الضار","Ad-Darr","Aquele que Permite a Adversidade"],
  ["النافع","An-Nafi'","Aquele que Concede Benefício"],["النور","An-Nur","A Luz"],["الهادي","Al-Hadi","O Guia"],
  ["البديع","Al-Badi'","O Originador Incomparável"],["الباقي","Al-Baqi","O Eterno"],["الوارث","Al-Warith","O Herdeiro de Tudo"],
  ["الرشيد","Ar-Rashid","O Guia ao Caminho Reto"],["الصبور","As-Sabur","O Perfeitamente Paciente"]
];

export const ALLAH_NAMES = nameRows.map(([arabic, transliteration, meaning], index) => ({
  id: index + 1,
  arabic,
  transliteration,
  meaning,
  evidence: "Enumeração tradicional"
}));

export const DEVOTIONALS = [
  {
    id:"dhikr-coracao",
    title:"Quando o coração retorna ao seu centro",
    lead:"A serenidade corânica não nasce da ausência de deveres, mas da fé que volta a Allah no meio deles.",
    ref:"Alcorão 13:28",
    arabic:"ٱلَّذِينَ ءَامَنُواْ وَتَطۡمَئِنُّ قُلُوبُهُم بِذِكۡرِ ٱللَّهِۗ أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    translation:"Aqueles que creem e cujos corações encontram tranquilidade na recordação de Allah. Certamente, na recordação de Allah os corações encontram tranquilidade.",
    context:"O versículo aparece em uma passagem que contrasta a exigência obstinada de sinais com o retorno sincero a Allah. A tranquilidade está ligada à fé, à orientação e à recordação consciente.",
    commentary:"Síntese interpretativa baseada em Ibn Kathir e As-Sa'di: o dhikr inclui recordar Allah, recitar Sua revelação e manter o coração ligado à obediência. A tranquilidade descrita não significa que o crente jamais sinta tristeza ou ansiedade; significa que encontra segurança última no conhecimento e na promessa de Allah.",
    practice:"Escolha uma das orações obrigatórias de hoje e permaneça alguns minutos depois dela. Faça os adhkar transmitidos, devagar, procurando compreender o que pronuncia.",
    duaArabic:"رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
    dua:"Senhor nosso, não desvies nossos corações depois de nos haveres guiado e concede-nos misericórdia proveniente de Ti. (Alcorão 3:8)",
    hadith:"O Profeta ﷺ comparou quem recorda seu Senhor e quem não O recorda ao vivo e ao morto.",
    hadithRef:"Sahih al-Bukhari 6407",
    hadithUrl:"https://sunnah.com/bukhari:6407",
    questions:["O que mais dispersa meu coração atualmente?","Minha prática de dhikr tem constância ou depende apenas do meu estado emocional?"],
    sources:["Alcorão 13:27-29","Tafsir Ibn Kathir, comentário de 13:28","Tafsir As-Sa'di, comentário de 13:28"]
  },
  {
    id:"dificuldade-facilidade",
    title:"A dificuldade não ocupa todo o horizonte",
    lead:"A revelação não nega a prova; impede que ela seja confundida com a totalidade da realidade.",
    ref:"Alcorão 94:5-6",
    arabic:"فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ۝ إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا",
    translation:"Pois, certamente, com a dificuldade há facilidade. Certamente, com a dificuldade há facilidade.",
    context:"Ash-Sharh dirige consolo e orientação ao Profeta ﷺ, recordando o alívio, a elevação da menção e o dever de continuar se esforçando e voltar o desejo a Allah.",
    commentary:"Síntese interpretativa: a repetição reforça a promessa e forma perseverança. O texto diz que a facilidade está com a dificuldade, não apenas depois dela. Os comentaristas também relacionam os versículos finais à continuidade do esforço na adoração.",
    practice:"Escreva a dificuldade principal de hoje. Ao lado, registre uma facilidade que já a acompanha: uma pessoa, um conhecimento, uma oportunidade de du'a ou um dever claro que ainda pode ser cumprido.",
    duaArabic:"رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
    dua:"Senhor nosso, derrama sobre nós paciência e firma nossos passos. (Alcorão 2:250)",
    hadith:"Nenhum cansaço, doença, tristeza ou dano atinge o muçulmano sem que Allah apague por isso parte de suas faltas.",
    hadithRef:"Sahih al-Bukhari 5641–5642",
    hadithUrl:"https://sunnah.com/bukhari:5641",
    questions:["Tenho tratado uma prova como se ela definisse toda a minha vida?","Qual forma de sabr esta situação exige: obediência, resistência ao erro ou firmeza diante do decreto?"],
    sources:["Alcorão 94:1-8","Tafsir Ibn Kathir, comentário de 94:5-8","Tafsir As-Sa'di, comentário de Surata Ash-Sharh"]
  },
  {
    id:"misericordia-retorno",
    title:"Nunca transformar a culpa em desespero",
    lead:"A misericórdia abre a porta do retorno; o arrependimento verdadeiro atravessa essa porta.",
    ref:"Alcorão 39:53",
    arabic:"قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ لَا تَقۡنَطُواْ مِن رَّحۡمَةِ ٱللَّهِۚ إِنَّ ٱللَّهَ يَغۡفِرُ ٱلذُّنُوبَ جَمِيعًا",
    translation:"Dize: Ó Meus servos que excederam contra si mesmos, não desespereis da misericórdia de Allah. Por certo, Allah perdoa todos os pecados.",
    context:"O chamado à esperança é seguido, nos versículos seguintes, pela ordem de retornar a Allah e submeter-se a Ele antes que chegue o castigo.",
    commentary:"Síntese interpretativa baseada em Ibn Kathir: o versículo é um chamado abrangente aos que se arrependem. Ele não autoriza persistência presunçosa no pecado; remove o desespero que impede o retorno sincero.",
    practice:"Faça tawbah por um erro concreto: interrompa-o, reconheça-o diante de Allah, lamente-o e estabeleça uma mudança prática. Se envolveu direito de alguém, procure orientação segura para repará-lo.",
    duaArabic:"رَبِّ ٱغۡفِرۡ وَٱرۡحَمۡ وَأَنتَ خَيۡرُ ٱلرَّٰحِمِينَ",
    dua:"Meu Senhor, perdoa e tem misericórdia, pois Tu és o melhor dos misericordiosos. (Alcorão 23:118)",
    hadith:"Allah se alegra mais com o arrependimento de Seu servo do que alguém que reencontra sua montaria perdida no deserto.",
    hadithRef:"Sahih Muslim 2747",
    hadithUrl:"https://sunnah.com/muslim:2747a",
    questions:["Minha culpa está me conduzindo à reparação ou à paralisia?","Que mudança torna meu pedido de perdão mais verdadeiro hoje?"],
    sources:["Alcorão 39:53-55","Tafsir Ibn Kathir, comentário de 39:53","Tafsir Al-Qurtubi, comentário de 39:53"]
  },
  {
    id:"tawakkul-decisao",
    title:"Decidir, agir e então confiar",
    lead:"Tawakkul não elimina os meios; liberta o coração da ilusão de que os meios governam o resultado.",
    ref:"Alcorão 3:159",
    arabic:"وَشَاوِرۡهُمۡ فِي ٱلۡأَمۡرِۖ فَإِذَا عَزَمۡتَ فَتَوَكَّلۡ عَلَى ٱللَّهِۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُتَوَكِّلِينَ",
    translation:"Consulta-os nos assuntos. E, quando decidires, confia em Allah. Por certo, Allah ama os que n'Ele confiam.",
    context:"Depois dos acontecimentos de Uhud, o versículo reúne gentileza, perdão, consulta, decisão e confiança em Allah.",
    commentary:"Síntese interpretativa: a ordem de tawakkul vem após consulta e decisão. A confiança correta não é indecisão piedosa nem abandono do planejamento; é ação responsável com dependência interior de Allah.",
    practice:"Escolha uma decisão pendente. Reúna as informações lícitas necessárias, consulte alguém confiável, fixe o próximo passo e faça-o sem exigir de si controle sobre o desfecho.",
    duaArabic:"حَسۡبُنَا ٱللَّهُ وَنِعۡمَ ٱلۡوَكِيلُ",
    dua:"Allah nos basta, e Ele é o melhor Dispensador de assuntos. (Alcorão 3:173)",
    hadith:"O Profeta ﷺ ensinou que o crente forte é melhor e mais amado por Allah, e ordenou buscar o que beneficia, pedir auxílio a Allah e não ser incapaz.",
    hadithRef:"Sahih Muslim 2664",
    hadithUrl:"https://sunnah.com/muslim:2664",
    questions:["Estou chamando de tawakkul aquilo que na verdade é adiamento?","O que depende de mim e o que preciso entregar a Allah?"],
    sources:["Alcorão 3:159","Tafsir Ibn Kathir, comentário de 3:159","Tafsir As-Sa'di, comentário de 3:159"]
  },
  {
    id:"gratidao-acao",
    title:"A gratidão que se transforma em obediência",
    lead:"Shukr começa no reconhecimento, passa pela palavra e amadurece no uso correto da bênção.",
    ref:"Alcorão 14:7",
    arabic:"وَإِذۡ تَأَذَّنَ رَبُّكُمۡ لَئِن شَكَرۡتُمۡ لَأَزِيدَنَّكُمۡ",
    translation:"E quando vosso Senhor anunciou: Se fordes gratos, certamente vos aumentarei.",
    context:"Musa recorda ao seu povo a libertação e o anúncio divino sobre gratidão e ingratidão.",
    commentary:"Síntese interpretativa: gratidão inclui reconhecer a bênção como vinda de Allah, louvá-Lo e empregá-la na obediência. O aumento pode abranger a própria bênção, seu benefício e a orientação para agradecer.",
    practice:"Escolha uma bênção específica — tempo, saúde, conhecimento ou recurso — e use parte dela hoje em uma obediência ou benefício a outra pessoa.",
    duaArabic:"رَبِّ أَوۡزِعۡنِيٓ أَنۡ أَشۡكُرَ نِعۡمَتَكَ ٱلَّتِيٓ أَنۡعَمۡتَ عَلَيَّ",
    dua:"Meu Senhor, inspira-me a agradecer a Tua graça que concedeste a mim. (Alcorão 27:19)",
    hadith:"É admirável a condição do crente: se recebe algo agradável, agradece; se enfrenta adversidade, persevera — e ambas as situações lhe trazem bem.",
    hadithRef:"Sahih Muslim 2999",
    hadithUrl:"https://sunnah.com/muslim:2999",
    questions:["Que bênção tenho tratado como direito automático?","Como posso converter gratidão em serviço hoje?"],
    sources:["Alcorão 14:5-8","Tafsir Ibn Kathir, comentário de 14:7","Tafsir As-Sa'di, comentário de 14:7"]
  },
  {
    id:"taqwa-amanha",
    title:"Viver hoje à luz do encontro com Allah",
    lead:"Taqwa devolve peso moral ao presente sem permitir que o futuro seja esquecido.",
    ref:"Alcorão 59:18",
    arabic:"يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَلۡتَنظُرۡ نَفۡسٞ مَّا قَدَّمَتۡ لِغَدٖ",
    translation:"Ó vós que credes, temei a Allah, e que cada alma observe o que preparou para o amanhã.",
    context:"A exortação aparece após a descrição de consequências históricas e antes do alerta para não esquecer Allah.",
    commentary:"Síntese interpretativa: o “amanhã” designa a Outra Vida. A ordem de examinar o que foi enviado adiante fundamenta autoavaliação, preparação e correção antes da prestação de contas.",
    practice:"Ao final do dia, revise uma ação da língua, uma decisão financeira e uma relação. Agradeça pelo acerto e faça tawbah pelo erro sem adiar.",
    duaArabic:"ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
    dua:"Guia-nos à senda reta. (Alcorão 1:6)",
    hadith:"O Profeta ﷺ ensinou que Allah não olha para aparências e riquezas, mas para os corações e as obras.",
    hadithRef:"Sahih Muslim 2564",
    hadithUrl:"https://sunnah.com/muslim:2564c",
    questions:["O que minhas escolhas de hoje estão preparando para o amanhã?","Em qual área minha consciência de Allah precisa se tornar mais concreta?"],
    sources:["Alcorão 59:18-19","Tafsir Ibn Kathir, comentário de 59:18","Tafsir As-Sa'di, comentário de 59:18"]
  },
  {
    id:"conhecimento-humildade",
    title:"Pedir aumento no conhecimento que aproxima",
    lead:"O conhecimento benéfico amplia a reverência, corrige a ação e torna a pessoa mais consciente dos próprios limites.",
    ref:"Alcorão 20:114",
    arabic:"وَقُل رَّبِّ زِدۡنِي عِلۡمٗا",
    translation:"E dize: Meu Senhor, aumenta-me em conhecimento.",
    context:"A ordem é dirigida ao Profeta ﷺ dentro de uma passagem sobre a recepção da revelação e a cautela de não se apressar antes que ela seja completada.",
    commentary:"Síntese interpretativa: o pedido de aumento mostra a nobreza do conhecimento e a necessidade permanente de aprender. O contexto também ensina disciplina na recepção: não se antecipa à revelação nem se fala sem completar o entendimento.",
    practice:"Estude hoje uma pequena unidade de uma fonte confiável. Anote a referência, uma ideia compreendida e uma ação que deve mudar por causa dela.",
    duaArabic:"رَّبِّ زِدۡنِي عِلۡمٗا",
    dua:"Meu Senhor, aumenta-me em conhecimento. (Alcorão 20:114)",
    hadith:"Quem percorre um caminho em busca de conhecimento, Allah lhe facilita por ele um caminho ao Paraíso.",
    hadithRef:"Sahih Muslim 2699",
    hadithUrl:"https://sunnah.com/muslim:2699a",
    questions:["Busco conhecimento para ser transformado ou apenas para acumular informação?","Tenho verificado antes de transmitir algo sobre a religião?"],
    sources:["Alcorão 20:113-114","Tafsir Ibn Kathir, comentário de 20:114","Sahih Muslim 2699"]
  }
];
