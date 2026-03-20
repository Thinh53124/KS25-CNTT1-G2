const toggleBtn = document.getElementById("themeToggle");

function getStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

(function initTheme() {
  const saved = getStorage("theme");

  if (saved) {
    applyTheme(saved);
  } else {
    applyTheme("light");
  }
})();

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  applyTheme(newTheme);
  setStorage("theme", newTheme);
});
