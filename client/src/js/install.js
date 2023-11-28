const butInstall = document.getElementById("buttonInstall");
butInstall.classList.toggle("hidden", true);

let deferredPrompt = null;

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the prompt from showing
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  deferredPrompt = null;
});
