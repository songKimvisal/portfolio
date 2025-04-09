document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  