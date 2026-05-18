import { useState } from "react";

/* ══════════════════════════════════════════
   DATA — Prof. Dr. Paulo Roberto Rocha Júnior
   Fisioterapia Vestibular
══════════════════════════════════════════ */

const SYNDROMES = [
  {
    id: "vppp",
    acronym: "VPPP",
    fullName: "Vertigem Posicional Paroxística Periférica",
    former: "ant. VPPB",
    type: "Periférica",
    duration: "Segundos",
    color: "#60A5FA",
    dim: "#1E3A5F",
    icon: "◆",
    apresentacao: "Vertigem rotatória episódica desencadeada por movimento cefálico (deitar, levantar, rolar), duração < 60 s, com náusea e instabilidade postural.",
    sections: {
      "Etiologia": [
        "Idiopática — causa mais frequente",
        "Traumatismo cranioencefálico",
        "Distúrbios vestibulares prévios",
        "Distúrbios metabólicos e no metabolismo ósseo",
        "Repouso prolongado",
        "Distúrbios centrais",
      ],
      "Variantes": [
        "Canalitíase (Brandt & Steddin, 1993) — otocônias livres no lúmen do canal",
        "Cupulolitíase (Schuknecht, 1969) — otocônias aderidas à cúpula",
        "Canal posterior — mais comum",
        "Canal lateral — canalitíase ou cupulolitíase",
        "Canal anterior — menos frequente",
      ],
      "Diagnóstico": [
        "Dix-Hallpike → canal posterior / anterior",
        "Roll-test → canal lateral",
        "Deep Head Hanging Test → canal anterior",
        "Head Pitch Test → diferenciação de variantes",
        "Nistagmo breve → canalitíase",
        "Nistagmo persistente → cupulolitíase",
      ],
      "Manobras": [
        "Canal posterior canalitíase → Epley",
        "Canal posterior cupulolitíase → Semont / Epley",
        "Canal anterior canalitíase → Yacovino",
        "Canal lateral canalitíase → Gufoni / ZUMA",
        "Canal lateral cupulolitíase → Gufoni",
        "Reavaliar com provas de posicionamento após cada manobra",
        "Achados persistentes → investigar causa central",
      ],
      "Reabilitação": [
        "Manobras de reposição canalítica — primeira linha",
        "Exercícios de Brandt-Daroff para domicílio",
        "Reabilitação vestibular se sintomas residuais",
        "Medicação raramente indicada",
      ],
    },
  },
  {
    id: "tppp",
    acronym: "TPPP",
    fullName: "Tontura Postural-Perceptual Persistente",
    former: "Tontura Funcional",
    type: "Funcional",
    duration: "≥ 3 meses",
    color: "#A78BFA",
    dim: "#2E1B5E",
    icon: "◈",
    apresentacao: "Tontura persistente não rotatória com instabilidade ou oscilação, piora em posição vertical, ao caminhar, com movimentos e em ambientes visualmente complexos.",
    sections: {
      "Mecanismo": [
        "Reponderação sensorial: maior dependência visual e somatossensorial, menor confiança vestibular",
        "Controle postural rígido: aumento de cautela e monitoramento constante do equilíbrio",
        "Erro de predição: conflito entre expectativa interna, movimento real e cena visual",
        "O ciclo mantém-se porque o paciente evita estímulos, reduz movimento e interpreta sinais normais como ameaça",
      ],
      "Gatilhos": [
        "VPPP, neurite vestibular, doença de Ménière",
        "Migrânea vestibular, concussão",
        "Disautonomia",
        "Pânico ou stress psicológico intenso",
      ],
      "Sintomas": [
        "Flutuação da tontura — piora ao longo do dia",
        "Balanço / oscilação (não rotatória)",
        "Dificuldade em mercados, shoppings, trânsito, telas e multidões",
        "Cabeça pesada, insegurança ao caminhar",
        "Piora com movimentos rápidos da cabeça",
        "Ansiedade associada",
      ],
      "Diagnóstico": [
        "Critérios Bárány Society — sintomas ≥ 3 meses",
        "Ausência de doença estrutural identificada",
        "Evento precipitante identificável na maioria",
        "Exclusão: audiometria, videonistagmografia, RM",
      ],
      "Tratamento": [
        "Educação: explicar mecanismo funcional, reduzir medo de dano estrutural",
        "Habituação: exposição progressiva a movimentos e cenas visuais",
        "Estabilização visual, controle postural e dupla tarefa",
        "Iniciar abaixo do limiar de desorganização e progredir pela tolerância",
        "Evitar repouso excessivo e hiperestimulação",
        "Fisioterapia + Psicoterapia (TCC) + Medicina (SSRI/SNRI) + Nutrição",
      ],
    },
  },
  {
    id: "meniere",
    acronym: "Ménière",
    fullName: "Síndrome de Ménière",
    former: "Hidropsia Endolinfática",
    type: "Periférica",
    duration: "Min → Horas",
    color: "#34D399",
    dim: "#064E3B",
    icon: "◉",
    apresentacao: "Vertigem episódica espontânea (min/horas), plenitude auricular, diminuição flutuante da audição, piora do zumbido, náusea/vômito e instabilidade postural.",
    sections: {
      "Etiologia": [
        "Doença genética — risco 3:1 para parente de 1.º grau",
        "Problemas de desenvolvimento do ouvido interno",
        "Distúrbios autoimunes",
        "Causa viral",
        "Trauma físico ou acústico",
        "Astronautas — campos gravitacionais alterados",
      ],
      "Quadro Clínico": [
        "Tríade: perda auditiva flutuante + zumbido + vertigem",
        "Plenitude / pressão no ouvido afetado",
        "Episódios de 20 min a várias horas",
        "Náuseas e vómitos durante as crises",
        "Fadiga pós-crise",
      ],
      "Diagnóstico": [
        "Critérios Bárány Society",
        "Audiometria tonal e vocal — hipoacusia neurossensorial de baixas frequências",
        "Pesquisa de nistagmo + Teste de impulso cefálico",
        "ECoG, VEMP, RM com gadolínio",
      ],
      "Tratamento": [
        "Dieta com restrição de sal + diuréticos",
        "Reabilitação vestibular entre as crises",
        "Injeções intratimpânicas — corticoides ou gentamicina",
        "Gestão do stress e higiene do sono",
        "Cirurgia em casos refratários (saco endolinfático, labirintectomia)",
      ],
    },
  },
  {
    id: "vu",
    acronym: "VU",
    fullName: "Vestibulopatia Unilateral",
    former: "Hipofunção Unilateral",
    type: "Periférica",
    duration: "Horas → Dias",
    color: "#FBBF24",
    dim: "#451A03",
    icon: "◐",
    apresentacao: "Fase aguda: vertigem espontânea horas/dias, náusea, instabilidade, sem achados auditivos. Fase crónica: intolerância ao movimento e instabilidade postural.",
    sections: {
      "Causas": [
        "Neurite vestibular — causa mais comum",
        "Trauma cranioencefálico",
        "Transecção cirúrgica do nervo",
        "Medicação ototóxica",
        "Doença de Ménière",
        "Lesões do nervo ou labirinto",
      ],
      "Achados Clínicos": [
        "Nistagmo espontâneo contraversivo horizontal-torsional e para cima (fase aguda)",
        "Impulso cefálico positivo (sinal de Halmagyi)",
        "Acuidade visual dinâmica reduzida",
        "Instabilidade da marcha",
        "Romberg com olhos fechados alterado",
      ],
      "Diagnóstico": [
        "Pesquisa de nistagmo (beira de leito)",
        "Teste de impulso cefálico — HIT / vHIT",
        "Acuidade visual dinâmica",
        "Romberg",
        "Videonistagmografia + VEMP complementares",
      ],
      "Compensação Central": [
        "Síntese proteica e reexpressão de genes imediatos",
        "Neurotrofinas e glicocorticoides",
        "Substituição sensorial (visão + propriocepção) na função dinâmica",
        "Microsacadas para estabilizar o olhar em altas frequências",
      ],
      "Reabilitação": [
        "Estabilização do olhar (RVO): 3–5 × /dia, 3–4 min",
        "Habituação: 2–3 × /dia, 3–5 repetições",
        "Equilíbrio estático: 10–15 min/dia",
        "Marcha com movimento cefálico: 10–15 min/dia",
        "Substituição sensorial: visão e propriocepção",
      ],
    },
  },
  {
    id: "vb",
    acronym: "VB",
    fullName: "Vestibulopatia Bilateral",
    former: "Hipofunção Bilateral",
    type: "Periférica",
    duration: "Crónica",
    color: "#F87171",
    dim: "#450A0A",
    icon: "◎",
    apresentacao: "Instabilidade ao caminhar e oscilopsia ao movimentar a cabeça. Piora no escuro ou em superfícies irregulares.",
    sections: {
      "Causas": [
        "Ototoxicidade — aminoglicosídeos",
        "Doença de Ménière bilateral",
        "Meningite",
        "Doenças autoimunes",
        "Causas idiopáticas",
      ],
      "Sintomas": [
        "Oscilopsia ao movimentar a cabeça",
        "Instabilidade progressiva ao caminhar",
        "Piora no escuro ou superfícies irregulares",
        "Ausência de vertigem rotatória típica",
        "Compromisso do RVO e controle postural",
      ],
      "Diagnóstico": [
        "Impulso cefálico bilateral positivo",
        "Acuidade visual dinâmica reduzida",
        "Romberg com olhos fechados alterado",
        "vHIT bilateral para confirmação",
      ],
      "Tratamento": [
        "Reabilitação vestibular — tratamento principal",
        "Substituição sensorial: visão e propriocepção",
        "Exercícios de estabilização do olhar",
        "Adaptação do ambiente e prevenção de quedas",
        "Evitar agentes ototóxicos",
      ],
    },
  },
  {
    id: "mv",
    acronym: "MV",
    fullName: "Migrânea Vestibular",
    former: "Condição Central",
    type: "Central",
    duration: "Min → Horas",
    color: "#FB923C",
    dim: "#431407",
    icon: "◌",
    apresentacao: "Sintomas vestibulares episódicos (vertigem, instabilidade, hipersensibilidade sensorial) associados a enxaqueca — com ou sem cefaleia simultânea.",
    sections: {
      "Fases da Crise": [
        "Pródroma: aura visual, sensorial ou motora",
        "Cefaleia: sintomas vestibulares concomitantes",
        "Resolução: persistência de sintomas leves",
        "Pós-droma: fadiga e hipersensibilidade residual",
      ],
      "Gatilhos": [
        "Stress psicológico ou físico",
        "Alterações hormonais",
        "Alterações no sono",
        "Dieta: aspartame, excesso/abstinência de cafeína",
        "Estímulos intensos: luz, som, movimento",
      ],
      "Diagnóstico": [
        "Critérios Bárány Society / IHS",
        "História de enxaqueca com sintomas vestibulares episódicos",
        "Fono/fotofobia associada",
        "Exclusão de causas estruturais — RM",
        "Avaliação de sacadas, perseguição lenta, optocinético",
      ],
      "Recomendações": [
        "Rotinas fixas de sono e alimentação",
        "Hidratação abundante + evitar jejum",
        "Exercício moderado e regular",
        "Relaxamento, mindfulness, yoga",
        "Fisioterapia para DTM se associada",
        "RV — evidências ainda incertas nesta população",
        "Evitar aspartame e excesso de cafeína",
      ],
    },
  },
];

const CLINICAL_KEYS = [
  {
    q: "Quando?",
    a: "Duração do sintoma",
    detail: "Segundos → VPPP | Min/horas → Ménière, MV | Dias → VU | Persistente → TPPP",
    color: "#60A5FA",
  },
  {
    q: "Como?",
    a: "Modo de surgimento",
    detail: "Posicional → VPPP | Espontâneo → VU, Ménière | Desencadeado → MV | Contínuo → TPPP, VB",
    color: "#A78BFA",
  },
  {
    q: "O que acompanha?",
    a: "Sintomas associados",
    detail: "Auditivos → Ménière | Neurológicos → Central | Migranosos → MV | Emocionais → TPPP",
    color: "#34D399",
  },
  {
    q: "Subgrupo?",
    a: "Classificação final",
    detail: "VPPP · VU · Ménière · MV · TPPP · Central · Outras condições",
    color: "#FBBF24",
  },
];

const ANATOMY = [
  {
    title: "Canais Semicirculares",
    body: "Detectam acelerações angulares da cabeça nos três planos do espaço. A endolinfa desloca-se por inércia na direção oposta à rotação, deformando a cúpula e ativando as células ciliadas da crista ampular.",
  },
  {
    title: "Órgãos Otolíticos — Utrículo e Sáculo",
    body: "Reagem à aceleração linear e à inclinação estática. As otocônias (cristais de CaCO₃) sobre a membrana otolítica provocam cisalhamento das células ciliadas. O utrículo está no plano horizontal; o sáculo no plano vertical.",
  },
  {
    title: "Células Ciliadas",
    body: "Transdutores mecânicos do labirinto. Inclinação dos estereocílios em direção ao cinocílio → despolarização. Direção contrária → hiperpolarização. Organizadas por tamanho crescente em direção ao cinocílio.",
  },
  {
    title: "Nervo Vestibulococlear (VIII par)",
    body: "Conduz informações do labirinto ao tronco encefálico. Ocupa o meato acústico interno juntamente com os nervos facial (VII) e intermédio. Divide-se em ramo vestibular e coclear.",
  },
  {
    title: "Reflexo Vestíbulo-Ocular (RVO)",
    body: "Mantém a visão estável durante o movimento cefálico. RVO angular (canais semicirculares) compensa rotação; RVO linear (otólitos) compensa translação. Latência de 7–15 ms. Avaliado pelo teste de impulso cefálico (HIT/vHIT).",
  },
  {
    title: "Reflexo Vestíbuloespinhal",
    body: "Estabiliza o corpo durante movimentos cefálicos. As máculas otolíticas auxiliam no tônus muscular por hemicorpo. Em caso de queda lateral, aumenta tônus dos antagonistas do mesmo lado e reduz o dos contralaterais.",
  },
  {
    title: "Reflexo Vestibulocólico",
    body: "Produz movimento estabilizador do pescoço no sentido inverso ao do movimento da cabeça. Complementa o controle postural cefálico durante perturbações.",
  },
  {
    title: "Nistagmo Vestibular",
    body: "Grande elemento semiológico do labirinto. Bifásico: fase lenta vestibular + fase rápida do tronco encefálico. Direção nomeada pela fase rápida. Lei de Alexander: intensidade aumenta ao olhar na direção da fase rápida.",
  },
];

const BALANCE = [
  {
    name: "Visual",
    color: "#60A5FA",
    pts: [
      "Estabiliza a oscilação corporal",
      "Oscilação aumenta com a distância do ponto de fixação",
      "Domina os canais vestibular e somatossensorial em conflitos sensoriais",
    ],
  },
  {
    name: "Somatossensorial",
    color: "#34D399",
    pts: [
      "Informa posição e movimento por receptores musculares, articulares e cutâneos",
      "Detecta variações de pressão plantar e contato com a superfície de apoio",
      "Permite ajustes posturais rápidos e automáticos",
    ],
  },
  {
    name: "Vestibular",
    color: "#A78BFA",
    pts: [
      "Detecta movimentos da cabeça e ação da gravidade",
      "Estabiliza o olhar durante os movimentos (RVO)",
      "Ajusta o corpo para manter o equilíbrio (RVE)",
    ],
  },
];

/* ══════════════════════════════════════════
   UI COMPONENTS
══════════════════════════════════════════ */

function Chip({ label, color }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color,
      background: color + "18",
      border: `1px solid ${color}40`,
      borderRadius: 4,
      padding: "2px 8px",
    }}>
      {label}
    </span>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />;
}

function BulletList({ items, color }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <div style={{
            width: 5, height: 5, borderRadius: "50%",
            background: color, marginTop: 7, flexShrink: 0, opacity: 0.8,
          }} />
          <span style={{ fontSize: 13.5, color: "#CBD5E1", lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SectionBlock({ title, items, color }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color, marginBottom: 10,
        fontFamily: "'Space Mono', monospace",
      }}>
        {title}
      </p>
      <BulletList items={items} color={color} />
    </div>
  );
}

/* ══════════════════════════════════════════
   SCREENS
══════════════════════════════════════════ */

function HomeScreen({ onSyndrome, onSection }) {
  return (
    <div style={{ paddingBottom: 48 }}>

      {/* Header */}
      <div style={{ padding: "52px 24px 0" }}>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#475569", marginBottom: 12,
          fontFamily: "'Space Mono', monospace",
        }}>
          FISIOTERAPIA VESTIBULAR
        </p>
        <h1 style={{
          fontSize: 32, fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-0.03em", color: "#F8FAFC", marginBottom: 6,
        }}>
          Síndromes<br />Vestibulares
        </h1>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 28 }}>
          Prof. Dr. Paulo Roberto Rocha Júnior
        </p>

        {/* Quick-access pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { label: "Equilíbrio Corporal", key: "balance" },
            { label: "Anatomia", key: "anatomy" },
            { label: "Raciocínio Clínico", key: "clinical" },
          ].map(s => (
            <button key={s.key} onClick={() => onSection(s.key)} style={{
              padding: "7px 14px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6,
              color: "#94A3B8",
              fontSize: 12, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "0 24px 24px" }} />

      {/* Syndrome list */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 2 }}>
        {SYNDROMES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onSyndrome(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
            }}
          >
            {/* Accent bar */}
            <div style={{
              width: 3, height: 40, borderRadius: 2,
              background: s.color, flexShrink: 0,
            }} />

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 14, fontWeight: 700, color: s.color,
                }}>
                  {s.acronym}
                </span>
                <Chip label={s.type} color={s.color} />
                <Chip label={s.duration} color="#475569" />
              </div>
              <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.35 }}>
                {s.fullName}
              </p>
            </div>

            <span style={{ color: "#334155", fontSize: 18, flexShrink: 0 }}>›</span>
          </button>
        ))}
      </div>

      <p style={{
        fontSize: 11, color: "#334155", textAlign: "center",
        margin: "28px 24px 0", lineHeight: 1.7,
      }}>
        Conteúdo de referência clínica — fins educativos para profissionais de saúde.
      </p>
    </div>
  );
}

function SyndromeScreen({ idx, onBack }) {
  const s = SYNDROMES[idx];
  const tabs = Object.keys(s.sections);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div style={{ paddingBottom: 48 }}>

      {/* Header */}
      <div style={{
        padding: "48px 24px 24px",
        borderBottom: `1px solid ${s.color}22`,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(180deg, ${s.dim}55 0%, transparent 100%)`,
          pointerEvents: "none",
        }} />

        <button onClick={onBack} style={{
          background: "none", border: "none",
          color: "#475569", fontSize: 13, fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          cursor: "pointer", padding: 0, marginBottom: 24,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          ← Voltar
        </button>

        {/* Acronym + chips */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 28, fontWeight: 700, color: s.color,
              letterSpacing: "-0.02em", display: "block", lineHeight: 1,
              marginBottom: 6,
            }}>
              {s.acronym}
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Chip label={s.type} color={s.color} />
              <Chip label={s.duration} color="#475569" />
              <Chip label={s.former} color="#334155" />
            </div>
          </div>
          <span style={{
            fontSize: 32, color: s.color, opacity: 0.25, fontFamily: "monospace",
            lineHeight: 1, marginTop: 4,
          }}>
            {s.icon}
          </span>
        </div>

        <h2 style={{
          fontSize: 16, fontWeight: 700, color: "#E2E8F0",
          lineHeight: 1.3, marginTop: 12, marginBottom: 14,
        }}>
          {s.fullName}
        </h2>

        {/* Apresentação clínica */}
        <div style={{
          background: s.color + "0E",
          borderLeft: `3px solid ${s.color}`,
          borderRadius: "0 8px 8px 0",
          padding: "12px 14px",
        }}>
          <p style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: s.color, marginBottom: 6,
            fontFamily: "'Space Mono', monospace",
          }}>
            Apresentação Clínica
          </p>
          <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.65 }}>
            {s.apresentacao}
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        display: "flex", gap: 0,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflowX: "auto",
        padding: "0 24px",
      }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: "0 0 auto",
            padding: "14px 14px 12px",
            background: "none",
            border: "none",
            borderBottom: t === tab ? `2px solid ${s.color}` : "2px solid transparent",
            color: t === tab ? s.color : "#475569",
            fontSize: 12,
            fontWeight: t === tab ? 700 : 500,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "color 0.15s",
          }}>
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: "22px 24px 0" }}>
        <BulletList items={s.sections[tab]} color={s.color} />
      </div>
    </div>
  );
}

function AnatomyScreen({ onBack }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ paddingBottom: 48 }}>
      <div style={{ padding: "48px 24px 24px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#475569",
          fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
          cursor: "pointer", padding: 0, marginBottom: 24,
        }}>
          ← Voltar
        </button>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#475569", marginBottom: 8,
          fontFamily: "'Space Mono', monospace",
        }}>
          ANATOMIA & FISIOLOGIA
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#F8FAFC", marginBottom: 6, letterSpacing: "-0.02em" }}>
          Sistema Vestibular
        </h2>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 24 }}>
          Estruturas do labirinto membranoso e mecanismos de transdução sensorial.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {ANATOMY.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "15px 0",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", gap: 12,
                }}
              >
                <span style={{ fontSize: 13.5, fontWeight: 600, color: open === i ? "#A78BFA" : "#CBD5E1" }}>
                  {item.title}
                </span>
                <span style={{
                  color: open === i ? "#A78BFA" : "#334155",
                  fontSize: 18, flexShrink: 0,
                  transform: open === i ? "rotate(90deg)" : "none",
                  transition: "transform 0.2s",
                }}>
                  ›
                </span>
              </button>
              {open === i && (
                <p style={{
                  fontSize: 13, color: "#64748B", lineHeight: 1.7,
                  paddingBottom: 16,
                }}>
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BalanceScreen({ onBack }) {
  return (
    <div style={{ paddingBottom: 48 }}>
      <div style={{ padding: "48px 24px 24px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#475569",
          fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
          cursor: "pointer", padding: 0, marginBottom: 24,
        }}>
          ← Voltar
        </button>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#475569", marginBottom: 8,
          fontFamily: "'Space Mono', monospace",
        }}>
          CONTROLO POSTURAL
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#F8FAFC", marginBottom: 6, letterSpacing: "-0.02em" }}>
          Equilíbrio Corporal
        </h2>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 6 }}>
          Integração de três sistemas sensoriais pelo SNC para o controle postural.
        </p>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 10, padding: "14px 16px", marginBottom: 24,
        }}>
          <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>
            O SNC escolhe a fonte sensorial dominante para controlar a postura. Em conflitos,{" "}
            <strong style={{ color: "#94A3B8" }}>a visão tende a dominar</strong> os canais vestibular e somatossensorial.
            A perda completa de um sistema obriga compensação pelos demais.
          </p>
        </div>

        {BALANCE.map((sys, i) => (
          <div key={i} style={{
            borderLeft: `3px solid ${sys.color}`,
            padding: "14px 16px",
            marginBottom: 16,
            background: sys.color + "08",
            borderRadius: "0 8px 8px 0",
          }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: sys.color, marginBottom: 10,
              fontFamily: "'Space Mono', monospace",
            }}>
              {sys.name}
            </p>
            <BulletList items={sys.pts} color={sys.color} />
          </div>
        ))}

        <Divider />

        {/* Epidemiology */}
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#475569", marginBottom: 14,
          fontFamily: "'Space Mono', monospace",
        }}>
          Prevalência — Impacto nas AVD
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { age: "60 anos", pct: "20%", color: "#60A5FA" },
            { age: "70 anos", pct: "30%", color: "#A78BFA" },
            { age: "80 anos", pct: "50%", color: "#F87171" },
          ].map((item, i) => (
            <div key={i} style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${item.color}33`,
              borderRadius: 10, padding: "14px 10px", textAlign: "center",
            }}>
              <p style={{
                fontSize: 22, fontWeight: 800, color: item.color,
                fontFamily: "'Space Mono', monospace", marginBottom: 4,
              }}>
                {item.pct}
              </p>
              <p style={{ fontSize: 11, color: "#475569" }}>{item.age}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11.5, color: "#334155", marginTop: 10, lineHeight: 1.6 }}>
          Percentagem de idosos com impacto nas Atividades de Vida Diária por disfunção do equilíbrio.
        </p>
      </div>
    </div>
  );
}

function ClinicalScreen({ onBack }) {
  return (
    <div style={{ paddingBottom: 48 }}>
      <div style={{ padding: "48px 24px 24px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#475569",
          fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
          cursor: "pointer", padding: 0, marginBottom: 24,
        }}>
          ← Voltar
        </button>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#475569", marginBottom: 8,
          fontFamily: "'Space Mono', monospace",
        }}>
          ANAMNESE VESTIBULAR
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#F8FAFC", marginBottom: 6, letterSpacing: "-0.02em" }}>
          Raciocínio Clínico
        </h2>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 24 }}>
          As 4 perguntas fundamentais para classificar a tontura e identificar o subgrupo.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
          {CLINICAL_KEYS.map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10, padding: "16px 16px",
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: item.color + "20", border: `1px solid ${item.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Space Mono', monospace",
                fontSize: 11, fontWeight: 700, color: item.color, flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#E2E8F0", marginBottom: 2 }}>
                  {item.q}
                </p>
                <p style={{ fontSize: 12, color: item.color, fontWeight: 600, marginBottom: 5 }}>
                  {item.a}
                </p>
                <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.55 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Quote */}
        <div style={{
          borderLeft: "3px solid #334155",
          padding: "14px 16px",
          marginTop: 8,
        }}>
          <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.75, fontStyle: "italic" }}>
            "Estudar tonturas é aceitar que o raciocínio clínico amadurece com tempo, repetição e humildade.
            Quanto mais você observa, organiza, compara e acompanha seus pacientes,
            mais o sistema vestibular deixa de parecer confuso e passa a fazer sentido.
            Persevere. A clínica vestibular recompensa quem estuda, observa e raciocina."
          </p>
          <p style={{ fontSize: 11, color: "#334155", marginTop: 10, fontWeight: 700, letterSpacing: "0.04em" }}>
            — Prof. Dr. Paulo Roberto Rocha Júnior
          </p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080C12",
      color: "#F8FAFC",
      fontFamily: "'DM Sans', sans-serif",
      maxWidth: 430,
      margin: "0 auto",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 0; height: 0; }
        button { outline: none; -webkit-tap-highlight-color: transparent; }
      `}</style>

      {screen === "home" && (
        <HomeScreen
          onSyndrome={i => { setSelectedIdx(i); setScreen("syndrome"); }}
          onSection={s => setScreen(s)}
        />
      )}
      {screen === "syndrome" && selectedIdx !== null && (
        <SyndromeScreen idx={selectedIdx} onBack={() => setScreen("home")} />
      )}
      {screen === "anatomy"  && <AnatomyScreen  onBack={() => setScreen("home")} />}
      {screen === "balance"  && <BalanceScreen   onBack={() => setScreen("home")} />}
      {screen === "clinical" && <ClinicalScreen  onBack={() => setScreen("home")} />}
    </div>
  );
}
