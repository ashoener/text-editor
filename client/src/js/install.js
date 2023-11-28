const butInstall = document.getElementById("buttonInstall");

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
  // Show the prompt
  deferredPrompt.prompt();
  // Set the prompt to null because it can only be used once
  deferredPrompt = null;
  // Hide the button
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  deferredPrompt = null;
});
