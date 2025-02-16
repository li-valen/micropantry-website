// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

const homeButton = document.getElementById("home");
const homeElement = document.getElementById("home-page");

homeButton.addEventListener("click", () => {
  homeElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const contactButton = document.getElementById("contact");
const contactElement = document.getElementById("contact-page");

contactButton.addEventListener("click", () => {
  contactElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const featureButton = document.getElementById("feature");
const featureElement = document.getElementById("feature-page");

featureButton.addEventListener("click", () => {
  featureElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const storyButton = document.getElementById("story");
const storyElement = document.getElementById("story-page");

storyButton.addEventListener("click", () => {
  storyElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const influencerButton = document.getElementById("influencer");
const influencerElement = document.getElementById("influencer-page");

influencerButton.addEventListener("click", () => {
  influencerElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const potentialButton = document.getElementById("why");
const potentialElement = document.getElementById("why-page");

potentialButton.addEventListener("click", () => {
  potentialElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});

const pricingButton = document.getElementById("pricing-button");
const pricingElement = document.getElementById("pricing");

pricingButton.addEventListener("click", () => {
  pricingElement.scrollIntoView({
    behavior: "smooth" // Optional for smooth scrolling
  });
});