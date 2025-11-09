const chatWindow = document.getElementById("chatWindow");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const examplePills = document.querySelectorAll(".pill");

function normalise(text) {
  return text.toLowerCase().trim();
}

function renderMessage(content, role = "assistant", citation) {
  const wrapper = document.createElement("div");
  wrapper.className = `message message--${role}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = content;
  wrapper.appendChild(bubble);

  if (citation) {
    const cite = document.createElement("div");
    cite.className = "citation";
    cite.innerHTML = `<a href="${citation}" target="_blank" rel="noopener">Source</a>`;
    wrapper.appendChild(cite);
  }

  chatWindow.appendChild(wrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function detectAdvice(query) {
  const q = normalise(query);
  return ADVICE_KEYWORDS.some((phrase) => q.includes(phrase));
}

function findSchemes(query) {
  const q = normalise(query);
  const matched = new Set();

  Object.entries(SCHEME_ALIASES).forEach(([canonical, aliases]) => {
    if (q.includes(canonical)) {
      matched.add(canonical);
    } else {
      aliases.forEach((alias) => {
        if (alias && q.includes(alias)) {
          matched.add(canonical);
        }
      });
    }
  });

  return [...matched];
}

function scoreEntry(entry, queryTokens, matchedSchemes) {
  let score = 0;

  entry.intents.forEach((intent) => {
    const words = intent.split(" ");
    if (words.every((word) => queryTokens.includes(word))) {
      score += words.length;
    }
  });

  if (matchedSchemes.length === 0 && entry.schemes.includes("all")) {
    score += 1;
  }

  matchedSchemes.forEach((scheme) => {
    if (entry.schemes.includes("all") || entry.schemes.includes(scheme)) {
      score += 4;
    }
  });

  return score;
}

function findBestAnswer(query) {
  const q = normalise(query);
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  const matchedSchemes = findSchemes(q);

  let bestEntry = null;
  let bestScore = 0;

  KNOWLEDGE_BASE.forEach((entry) => {
    const score = scoreEntry(entry, tokens, matchedSchemes);
    if (score > bestScore) {
      bestEntry = entry;
      bestScore = score;
    }
  });

  return bestScore > 0 ? bestEntry : null;
}

function formatAnswer(entry) {
  const enriched = entry.answer.replace("[Source]", `<a href="${entry.citation}" target="_blank" rel="noopener">Source</a>`);
  return { message: enriched, citation: entry.citation };
}

function handleAdvice() {
  return {
    message: `${DEFAULT_REFUSAL} <a href="${REFUSAL_SOURCE}" target="_blank" rel="noopener">Source</a>`,
    citation: REFUSAL_SOURCE
  };
}

function handleFallback() {
  const primary = SOURCES[0];
  return {
    message: `I could not find that detail in my documents. Please review the Nippon India Mutual Fund disclosures for the latest information. <a href="${primary}" target="_blank" rel="noopener">Source</a>`,
    citation: primary
  };
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = chatInput.value.trim();
  if (!query) return;

  renderMessage(query, "user");
  chatInput.value = "";

  let response;
  if (detectAdvice(query)) {
    response = handleAdvice();
  } else {
    const entry = findBestAnswer(query);
    if (entry) {
      response = formatAnswer(entry);
    } else {
      response = handleFallback();
    }
  }

  renderMessage(response.message, "assistant", response.citation);
});

examplePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    chatInput.value = pill.textContent;
    chatInput.focus();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  renderMessage(
    "Hi! I cover four Nippon India equity schemes: Large Cap, Flexi Cap, ELSS Tax Saver, and Small Cap. Ask a factual question and I'll cite the source.",
    "assistant",
    SOURCES[0]
  );
});
