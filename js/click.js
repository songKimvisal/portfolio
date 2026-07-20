document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const root = document.documentElement;
  root.setAttribute("data-theme", localStorage.getItem("theme") || "dark");
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
});
