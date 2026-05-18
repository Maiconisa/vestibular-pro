# 🦻 Vestibular Pro — PWA

Guia clínico de referência em síndromes vestibulares para fisioterapeutas e fonoaudiólogos.  
Baseado no material do **Prof. Dr. Paulo Roberto Rocha Júnior**.

---

## 📦 Estrutura do projeto

```
vestibular-pro/
├── public/
│   ├── index.html          ← HTML base com meta tags PWA
│   ├── manifest.json       ← Configuração do PWA (nome, ícone, cor)
│   ├── service-worker.js   ← Cache offline
│   ├── icon-192.png        ← Ícone 192×192 px  ← ADICIONAR
│   └── icon-512.png        ← Ícone 512×512 px  ← ADICIONAR
├── src/
│   ├── index.js            ← Ponto de entrada React
│   └── App.jsx             ← App principal
├── package.json
└── vercel.json             ← Configuração Vercel
```

---

## 🖼️ Ícones (passo obrigatório)

Antes de fazer deploy, adiciona dois ícones PNG na pasta `public/`:

- `icon-192.png` — 192 × 192 px
- `icon-512.png` — 512 × 512 px

Podes criar gratuitamente em: https://www.canva.com  
Sugestão: fundo escuro (#080C12) com o símbolo de um ouvido ou as letras "VP".

---

## 🚀 Deploy no Vercel (5 minutos)

### Opção A — Interface web (mais fácil)

1. Cria conta gratuita em **https://vercel.com** (usa Google ou GitHub)
2. Clica em **"Add New Project"**
3. Escolhe **"Upload"** e faz upload desta pasta `vestibular-pro/`
4. Clica em **"Deploy"**
5. O Vercel dá-te um link do tipo: `https://vestibular-pro.vercel.app`

### Opção B — GitHub (recomendado para actualizações futuras)

1. Cria conta em **https://github.com**
2. Cria repositório novo chamado `vestibular-pro`
3. Faz upload dos ficheiros
4. No Vercel: **"Import Git Repository"** → liga ao repositório
5. Deploy automático — cada vez que actualizas o GitHub, o app actualiza

---

## 📲 Como os alunos instalam

### Android (Chrome)
1. Abrir o link no Chrome
2. Menu (⋮) → **"Adicionar à tela inicial"**
3. Confirmar → ícone aparece no ecrã

### iPhone / iPad (Safari)
1. Abrir o link no **Safari** (obrigatório)
2. Botão de partilha (□↑) → **"Adicionar à tela de início"**
3. Confirmar → ícone aparece no ecrã

---

## ✏️ Como actualizar o conteúdo

Todo o conteúdo clínico está no ficheiro `src/App.jsx`, na secção `SYNDROMES`.  
Cada síndrome tem esta estrutura:

```js
{
  acronym: "VPPP",
  fullName: "Vertigem Posicional Paroxística Periférica",
  sections: {
    "Etiologia": ["item 1", "item 2", ...],
    "Diagnóstico": ["item 1", "item 2", ...],
  }
}
```

Edita o texto, guarda o ficheiro e faz novo deploy.

---

## 🛠️ Desenvolvimento local (opcional)

Se tiveres Node.js instalado:

```bash
npm install
npm start
```

Abre `http://localhost:3000` no browser.

---

Feito com ❤️ para profissionais de saúde vestibular.
