/*
 * NursPrep — exam detail page interactivity
 *
 * Replaces the React behaviors from exam-components.jsx:
 *   - TOC scroll-spy         (was useEffect + IntersectionObserver in <TOC>)
 *   - SampleQuestion reveal  (was useState(picked) in <SampleQuestion>)
 *
 * FAQ accordion is already handled by app.js (reused data-faq hook).
 * TipsWidget carousel is intentionally NOT implemented — we render the
 * static list instead so every tip is indexable.
 */
(function () {
  "use strict";

  // ---------- TOC scroll-spy ----------
  const tocEl = document.querySelector("[data-exam-toc]");
  if (tocEl) {
    const items = Array.from(tocEl.querySelectorAll("[data-toc-target]"));
    const idToItem = new Map(
      items.map((li) => [li.getAttribute("data-toc-target"), li])
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((li) => li.classList.remove("toc-on"));
          const match = idToItem.get(entry.target.id);
          if (match) match.classList.add("toc-on");
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    idToItem.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // ---------- Sample question reveal ----------
  document.querySelectorAll("[data-sampleq]").forEach((root) => {
    const correct = parseInt(root.getAttribute("data-correct"), 10);
    const opts = Array.from(root.querySelectorAll(".sampleq-opt"));
    const rationale = root.querySelector(".sampleq-rationale");
    const resetBtn = root.querySelector(".sampleq-reset");

    function reveal(picked) {
      opts.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove("sampleq-opt-correct", "sampleq-opt-wrong");
        // Remove any leftover tag spans before re-rendering
        btn.querySelectorAll(".sampleq-tag").forEach((el) => el.remove());

        if (i === correct) {
          btn.classList.add("sampleq-opt-correct");
          const tag = document.createElement("span");
          tag.className = "sampleq-tag";
          tag.textContent = "Correct";
          btn.appendChild(tag);
        }
        if (i === picked && picked !== correct) {
          btn.classList.add("sampleq-opt-wrong");
          const tag = document.createElement("span");
          tag.className = "sampleq-tag sampleq-tag-wrong";
          tag.textContent = "Your pick";
          btn.appendChild(tag);
        }
      });
      if (rationale) rationale.hidden = false;
    }

    function reset() {
      opts.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("sampleq-opt-correct", "sampleq-opt-wrong");
        btn.querySelectorAll(".sampleq-tag").forEach((el) => el.remove());
      });
      if (rationale) rationale.hidden = true;
    }

    opts.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        reveal(idx);
      });
    });
    if (resetBtn) resetBtn.addEventListener("click", reset);
  });

  // ---------- Smooth-scroll for TOC anchor clicks ----------
  // The TOC uses raw hash links; add scroll-margin is already set in CSS,
  // but Safari needs explicit scroll-behavior for anchor clicks.
  document.querySelectorAll(".toc a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    });
  });
})();
