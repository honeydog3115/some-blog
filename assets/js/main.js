document.addEventListener("DOMContentLoaded", function () {
  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  // Check stored theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      localStorage.setItem("theme", currentTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon && themeText) {
      if (theme === "dark") {
        themeIcon.textContent = "☀️";
        themeText.textContent = "라이트모드";
      } else {
        themeIcon.textContent = "🌙";
        themeText.textContent = "다크모드";
      }
    }
  }

  // Article Search & Filter Logic (if search input exists)
  const searchInput = document.getElementById("search-input");
  const postCards = document.querySelectorAll(".post-card");

  if (searchInput && postCards.length > 0) {
    searchInput.addEventListener("input", function (e) {
      const query = e.target.value.toLowerCase().trim();

      postCards.forEach((card) => {
        const title = card.getAttribute("data-title") || "";
        const category = card.getAttribute("data-category") || "";
        const excerpt = card.getAttribute("data-excerpt") || "";

        if (
          title.toLowerCase().includes(query) ||
          category.toLowerCase().includes(query) ||
          excerpt.toLowerCase().includes(query)
        ) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
