/*
 * NursPrep — client interactivity
 *
 * Replaces the React behavior from components-a.jsx / components-b.jsx:
 *   - Scroll progress bar in nav      (was useEffect in App)
 *   - Hero search (live filtering)    (was query state + filtered useMemo)
 *   - Chip filters (category toggle)  (was filters state + toggleFilter)
 *   - FAQ accordion                   (was open state + setOpen)
 *
 * Design choice: content is rendered server-side by 11ty (good for SEO).
 * JS only HIDES non-matching cards; it never inserts content. If JS is
 * disabled, the user still sees every cert card.
 */
(function () {
  "use strict";

  // ---------- Scroll progress bar ----------
  const progressEl = document.getElementById("js-nav-progress");
  if (progressEl) {
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const ratio = max > 0 ? Math.min(1, h.scrollTop / max) : 0;
      progressEl.style.transform = `scaleX(${ratio})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll("[data-faq]").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq-open");
      // Collapse all, then open the clicked one (single-expand behavior)
      document.querySelectorAll("[data-faq]").forEach((i) => {
        i.classList.remove("faq-open");
        const b = i.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("faq-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ---------- Certification search + chip filters ----------
  const searchInput = document.getElementById("js-hero-search");
  const certGroups = document.getElementById("js-cert-groups");
  const emptyState = document.getElementById("js-cert-empty");
  const emptyQueryEl = document.getElementById("js-empty-query");
  const chipButtons = document.querySelectorAll(".chips-row .chip");

  // State
  let activeFilter = "all";
  let currentQuery = "";

  function applyFilters() {
    if (!certGroups) return;
    const q = currentQuery.trim().toLowerCase();
    let visibleTotal = 0;

    // Show/hide each card based on filter + search
    certGroups.querySelectorAll(".cert-card").forEach((card) => {
      const catMatch = activeFilter === "all" || card.dataset.cat === activeFilter;
      let textMatch = true;
      if (q) {
        textMatch =
          (card.dataset.code || "").includes(q) ||
          (card.dataset.name || "").includes(q) ||
          (card.dataset.body || "").includes(q) ||
          (card.dataset.blurb || "").includes(q) ||
          (card.dataset.catLabel || "").includes(q);
      }
      const visible = catMatch && textMatch;
      card.style.display = visible ? "" : "none";
      if (visible) visibleTotal += 1;
    });

    // Hide empty groups; update group counts
    certGroups.querySelectorAll(".cert-group").forEach((group) => {
      const visibleCards = group.querySelectorAll(
        ".cert-card:not([style*='display: none'])"
      );
      group.style.display = visibleCards.length === 0 ? "none" : "";
      const countEl = group.querySelector(".cert-group-count");
      if (countEl) {
        const n = visibleCards.length;
        countEl.textContent = `${n} cert${n === 1 ? "" : "s"}`;
      }
    });

    // Empty state
    if (emptyState && emptyQueryEl) {
      if (visibleTotal === 0 && q) {
        emptyQueryEl.textContent = currentQuery;
        emptyState.hidden = false;
        certGroups.style.display = "none";
      } else {
        emptyState.hidden = true;
        certGroups.style.display = "";
      }
    }
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentQuery = e.target.value || "";
      applyFilters();
    });
  }

  // Chip click → set active filter
  chipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.filter;
      if (!target) return;
      activeFilter = activeFilter === target && target !== "all" ? "all" : target;
      if (activeFilter === "all") {
        chipButtons.forEach((b) =>
          b.classList.toggle("chip-on", b.dataset.filter === "all")
        );
      } else {
        chipButtons.forEach((b) =>
          b.classList.toggle("chip-on", b.dataset.filter === activeFilter)
        );
      }
      applyFilters();
    });
  });

  // Hero "popular" chips → prefill search and scroll
  document.querySelectorAll(".hero-chips .chip-featured").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.chip || btn.textContent.trim();
      if (searchInput) {
        searchInput.value = value;
        currentQuery = value;
        applyFilters();
      }
      const target = document.getElementById("certifications");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();
