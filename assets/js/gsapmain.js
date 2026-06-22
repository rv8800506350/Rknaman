document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ================== Split Heading Animation ==================
  document.querySelectorAll(".split-heading").forEach(el => {
    const chars = [];

    el.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        [...node.textContent].forEach(ch => {
          const span = document.createElement("span");
          span.classList.add("char");
          span.textContent = ch === " " ? "\u00A0" : ch;
          span.style.color = "var(--black-color3)";
          chars.push(span);
        });
      } else {
        const innerColor = window.getComputedStyle(node).color || "var(--primary-color)";
        [...node.textContent].forEach(ch => {
          const span = document.createElement("span");
          span.classList.add("char");
          span.textContent = ch === " " ? "\u00A0" : ch;
          span.style.color = innerColor;
          chars.push(span);
        });
      }
    });

    el.innerHTML = "";
    chars.forEach(span => el.appendChild(span));

    gsap.fromTo(
      el.querySelectorAll(".char"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        stagger: 0.07,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );
  });


/* ================= COUNTER ANIMATION ================= */
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.getAttribute("data-target");

  gsap.fromTo(counter,
    { innerText: 0 },
    {
      innerText: target,
      duration: 1.8,
      ease: "power1.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
         toggleActions: "play none none reset"
      }
    }
  );
});



  // ================== Responsive Animations ==================
  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {},
    "(max-width: 768px)": function () {},
  });
});
