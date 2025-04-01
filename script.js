updateNavbar = () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

updateParallaxScroll = () => {
  document.querySelector(".line-container").classList.add("loaded");
  const overlay = document.querySelector(".loading-overlay");
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  let scrollPosition = window.pageYOffset;
  let parallax = document.querySelector(".parallax-container");

  setTimeout(() => {
    overlay.style.opacity = 0;
    const lineContainer = document.querySelector(".line-container");
    lineContainer.classList.add("loaded");
  }, 0);

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);

  body.classList.add("visible");
  parallax.style.backgroundPosition = "center " + scrollPosition * 0.5 + "px";

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("shrink");
    navbar.classList.remove("scrolled");
  }
};

const slideInOnScroll = () => {
  const slideInElements = document.querySelectorAll(".slide-in");

  if (!slideInElements) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  slideInElements.forEach((element) => {
    observer.observe(element);
  });
};
const slideInLeftOnScroll = () => {
  const slideInElements = document.querySelectorAll(".slide-in-left");

  if (!slideInElements) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-left-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  slideInElements.forEach((element) => {
    observer.observe(element);
  });
};
const fadeInOnScroll = () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  if (!fadeInElements) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
};

window.addEventListener("load", () => {
  updateNavbar();
  updateParallaxScroll();
  slideInOnScroll();
  fadeInOnScroll();
  slideInLeftOnScroll();
});

document.addEventListener("scroll", () => {
  updateNavbar();
  updateParallaxScroll();
});
