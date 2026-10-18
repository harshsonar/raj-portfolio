(function () {
  try {
    if (
      "IntersectionObserver" in window &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.documentElement.classList.add("js");
    }
  } catch (e) {}
})();

(function () {
  var root = document.documentElement;

  if (root.classList.contains("js")) {
    var sel =
      "section h2, section .text p, section .slot, section .unit, section .steps li, section .compare > div, section .methods > div, section .closing, section .acre, section .video";
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    Array.prototype.forEach.call(
      document.querySelectorAll(sel),
      function (el, i) {
        el.classList.add("reveal");
        el.style.setProperty("--d", (i % 3) * 90 + "ms");
        io.observe(el);
      },
    );
  }
})();
