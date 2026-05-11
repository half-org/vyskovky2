export const BRAND = {
  name: "VERTIKÁLA",
  tagline: "Speciální výškové práce",
  established: "Od 2009",
  phone: "+420 777 123 456",
  phoneHref: "tel:+420777123456",
  email: "poptavka@vertikala.cz",
  emailHref: "mailto:poptavka@vertikala.cz",
  ic: "12345678",
  dic: "CZ12345678",
  address: "K Vrcholu 14, 612 00 Brno",
  region: "Působnost: celá ČR",
  ig: "@vertikala.cz",
};

export type Service = {
  no: string;
  name: string;
  blurb: string;
  items: string[];
  technique: string;
};

export const SERVICES: Service[] = [
  {
    no: "01",
    name: "Speciální výškové práce",
    blurb:
      "Montáže, opravy a údržba v místech, kam se nedostane jeřáb ani plošina. Lano, postroj, certifikace.",
    items: [
      "Montáže a opravy horolezeckou technikou",
      "Výškové rekonstrukce",
      "Montáže a demontáže reklam, bannerů a billboardů",
      "Práce nad ulicí, dvorem, halou",
    ],
    technique: "Lanový přístup · IRATA / FISAT principy",
  },
  {
    no: "02",
    name: "Nátěry ve výškách",
    blurb:
      "Nátěry střech, fasád a ocelových konstrukcí. Bez lešení, bez prostojů provozu pod námi.",
    items: [
      "Nátěry plechových a falcovaných střech",
      "Nátěry fasád a štítů panelových domů",
      "Antikorozní nátěry ocelových konstrukcí",
      "Lakýrnické a natěračské práce",
    ],
    technique: "Příprava povrchu · základ · 2× vrchní nátěr",
  },
  {
    no: "03",
    name: "Mytí oken a fasád",
    blurb:
      "Skleněné fasády administrativ, prosklené atria, řadové i panelové domy. Bez šmouh, bez šrámů na fasádě.",
    items: [
      "Mytí oken z lana i z plošiny",
      "Mytí prosklených fasád",
      "Čištění hliníkových a plechových plášťů",
      "Pravidelné servisní rámcové smlouvy",
    ],
    technique: "Osmotická voda · ekošetrná chemie",
  },
  {
    no: "04",
    name: "Kácení stromů po částech",
    blurb:
      "Tam, kde nelze pokácet vcelku. Postupné svěšování dřeva přes lano, šetrné k okolí.",
    items: [
      "Rizikové kácení stromů v zástavbě",
      "Kácení po částech s odlehčením lanem",
      "Prořezy a stabilizační vazby",
      "Likvidace dřevní hmoty a štěpkování",
    ],
    technique: "Arboristika · SRT / DdRT techniky",
  },
  {
    no: "05",
    name: "Práce z vysokozdvižné plošiny",
    blurb:
      "Tam, kde lano dává smysl nahradit plošinou: kloubové, teleskopické, nůžkové. Operátor v ceně.",
    items: [
      "Zapůjčení plošiny s obsluhou",
      "Práce do 32 m výšky",
      "Údržba veřejného osvětlení",
      "Montáže těžších břemen",
    ],
    technique: "Stroje certifikované dle ČSN ISO 18878",
  },
  {
    no: "06",
    name: "Stavební a rekonstrukční práce",
    blurb:
      "Drobné stavební zásahy, kompletní rekonstrukce balkonů, lodžií a říms. Bez lešení podél celého domu.",
    items: [
      "Výškové rekonstrukce balkonů a lodžií",
      "Opravy říms, atik a komínů",
      "Spárování a zatmelení panelových spár",
      "Klempířské a izolatérské zásahy",
    ],
    technique: "Statická příprava · projektová dokumentace",
  },
];

export type Reference = {
  no: string;
  title: string;
  place: string;
  year: string;
  category: string;
  metric: string;
  description: string;
};

export const REFERENCES: Reference[] = [
  {
    no: "001",
    title: "Nátěr falcované střechy obytného souboru",
    place: "Praha 6 — Břevnov",
    year: "2025",
    category: "Nátěry střech",
    metric: "2 480 m² · 12 dní",
    description:
      "Příprava povrchu, tlakové ošlehání, dvojitý antikorozní nátěr. Bez záboru ulice, vše z lana.",
  },
  {
    no: "002",
    title: "Demontáž reklamních nosičů obchodního domu",
    place: "Ostrava — Karolina",
    year: "2025",
    category: "Reklamy",
    metric: "9 ks · noční směny",
    description:
      "Demontáž dvanáctimetrových neonových písmen z čela budovy. Bez uzavírky pasáže.",
  },
  {
    no: "003",
    title: "Riziková kácecí akce v parku",
    place: "Brno — Lužánky",
    year: "2024",
    category: "Arboristika",
    metric: "11 stromů · 4 dny",
    description:
      "Postupné svěšování přestárlých lip. Šetrný odvoz hmoty, bez poškození památkového trávníku.",
  },
  {
    no: "004",
    title: "Mytí prosklené fasády administrativní budovy",
    place: "Praha 4 — Pankrác",
    year: "2024",
    category: "Čištění",
    metric: "5 200 m² · 8 nocí",
    description:
      "Servisní mytí prosklené fasády 23 NP. Osmotická voda, bez chemických zbytků.",
  },
  {
    no: "005",
    title: "Antikorozní nátěr ocelového mostu",
    place: "Pardubice — průmyslový areál",
    year: "2024",
    category: "Konstrukce",
    metric: "1 320 m² · zima",
    description:
      "Mechanická příprava, základ epoxidem, 2× polyuretanový vrchní nátěr. Bez odstávky provozu pod mostem.",
  },
  {
    no: "006",
    title: "Rekonstrukce 64 lodžií panelového domu",
    place: "Liberec — Rochlice",
    year: "2023",
    category: "Stavební",
    metric: "64 lodžií · 9 týdnů",
    description:
      "Sanace betonu, hydroizolace, klempířské oplechování, nové zábradlí. Vše z lan, obyvatelé bez omezení.",
  },
  {
    no: "007",
    title: "Údržba osvětlení rozhledny",
    place: "Lysá hora",
    year: "2023",
    category: "Údržba",
    metric: "48 m · 1 den",
    description:
      "Výměna LED tělesa na vrcholu rozhledny v exponovaném terénu. Bez plošiny.",
  },
  {
    no: "008",
    title: "Nátěr komína centrálního zdroje tepla",
    place: "Most — Velebudice",
    year: "2022",
    category: "Nátěry konstrukcí",
    metric: "70 m · 5 dní",
    description:
      "Antikorozní nátěr komína včetně značení dle leteckých předpisů. Pracovní okno za odstávky kotle.",
  },
  {
    no: "009",
    title: "Montáž reklamních polepů obchodního centra",
    place: "Plzeň — Bory",
    year: "2022",
    category: "Reklamy",
    metric: "180 m² polepu",
    description:
      "Aplikace velkoplošných polepů na proskleném štítu. Bezpečné fixování lan v exponované zóně vstupu.",
  },
  {
    no: "010",
    title: "Sanace atiky bytového domu po krupobití",
    place: "České Budějovice",
    year: "2021",
    category: "Havarijní",
    metric: "240 bm · 6 dní",
    description:
      "Provizorní oplechování ten samý den, kompletní výměna do týdne. Bez zatékání do bytů.",
  },
];

export const STATS = [
  { value: "16", suffix: "let", label: "v provozu" },
  { value: "1 240", suffix: "+", label: "uzavřených zakázek" },
  { value: "0", suffix: "", label: "pracovních úrazů" },
  { value: "98", suffix: "m", label: "nejvyšší pracoviště" },
];

export const PROCESS = [
  {
    no: "I",
    title: "Poptávka & obhlídka",
    body: "Do 24 hodin se ozveme. Pokud je třeba, přijedeme na místo zaměřit.",
  },
  {
    no: "II",
    title: "Nabídka",
    body: "Cenová nabídka s rozpadem materiálu, lidí a dnů. Bez schovaných položek.",
  },
  {
    no: "III",
    title: "Plán a koordinace",
    body: "Termín, BOZP, ohlášky úřadům, koordinace s nájemníky či provozem.",
  },
  {
    no: "IV",
    title: "Provedení",
    body: "Lano, plošina nebo kombinace. Denní reporting fotky → klient.",
  },
  {
    no: "V",
    title: "Předání a záruka",
    body: "Předávací protokol, fotodokumentace stavu, záruka dle typu prací.",
  },
];

export const TICKER = [
  "NÁTĚRY STŘECH",
  "FASÁDY",
  "OCELOVÉ KONSTRUKCE",
  "MONTÁŽE REKLAM",
  "KÁCENÍ PO ČÁSTECH",
  "VÝŠKOVÉ REKONSTRUKCE",
  "MYTÍ FASÁD",
  "BALKONY A LODŽIE",
  "ATIKY A ŘÍMSY",
  "KOMÍNY",
  "HAVARIJNÍ ZÁSAHY",
];
