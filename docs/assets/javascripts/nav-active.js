(function () {
  function scrollActiveNav() {
    var sidebar = document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
    var activeLink = document.querySelector(
      ".md-sidebar--primary .md-nav--primary .md-nav__link--active[href]"
    );

    if (!sidebar || !activeLink) return;

    var sidebarRect = sidebar.getBoundingClientRect();
    var activeRect = activeLink.getBoundingClientRect();
    var topOffset = 12;
    var nextTop = sidebar.scrollTop + activeRect.top - sidebarRect.top - topOffset;

    sidebar.scrollTo({
      top: Math.max(0, nextTop),
      behavior: "auto"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scrollActiveNav, { once: true });
  } else {
    scrollActiveNav();
  }

  window.addEventListener("load", scrollActiveNav, { once: true });
})();
