// Expandable entries (Experience projects, Research publications).
// Markup: .expandable holds one or more [data-expand] toggles (thumbnail, text link), an .expand-panel and an .expand-collapse button.
// The class name "is-open" must stay in this file: purgecss keeps CSS rules only for class names it finds in the built HTML/JS.
(function () {
  function setOpen(entry, open) {
    entry.classList.toggle("is-open", open);
    entry.querySelectorAll("[data-expand]").forEach(function (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
    });
    entry.querySelectorAll(".expand-link-label").forEach(function (label) {
      label.textContent = open ? label.dataset.open : label.dataset.closed;
    });
  }
  document.querySelectorAll(".expandable").forEach(function (entry) {
    entry.querySelectorAll("[data-expand]").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(entry, !entry.classList.contains("is-open"));
      });
    });
    // "Hide details" at the bottom of an open panel: collapse and bring the entry back into view.
    entry.querySelectorAll(".expand-collapse").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setOpen(entry, false);
        entry.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    });
  });
})();
