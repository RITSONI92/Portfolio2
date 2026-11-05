// Update these details with your own contact information.
const PROFILE = {
  name: "Your Name",
  email: "hello@example.com",
  whatsapp: "910000000000" // Country code + number, digits only. Example: 919876543210
};

document.title = `${PROFILE.name} | Digital Growth & Web Solutions`;
document.querySelectorAll(".brand span:last-child").forEach(el => {
  el.innerHTML = PROFILE.name.replace(/Name$/i, '<span class="blue">Name</span>');
});
document.querySelectorAll(".profile-card h3").forEach(el => el.textContent = PROFILE.name);
document.querySelectorAll(".footer-inner > div span").forEach(el => el.textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`);
document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${PROFILE.email}`;
emailLink.textContent = `✉ ${PROFILE.email}`;
document.getElementById("whatsappLink").href = `https://wa.me/${PROFILE.whatsapp}`;

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contactInfo").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`New project enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nContact: ${contact}\nService: ${service}\n\nProject details:\n${message}`
  );
  document.getElementById("formNote").textContent = "Opening your email app…";
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
});
