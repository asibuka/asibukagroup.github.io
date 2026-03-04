{% unless page.is_amp %}
<div class='ads text-center'>
<div class='mondiad-300x250-banner-ad' data-mndbanid="ecf71b32-c495-4156-ba3f-a73888b5af25"></div>
<script>Defer.dom(
  ".mondiad-300x250-banner-ad",
  1000,
  "loaded",
  function () {
    var container = document.querySelector(".mondiad-300x250-banner-ad");

    if (!container) {
      console.warn("Mondiad container not found.");
      return;
    }

    var a = document.createElement("script");
    a.src = "https://ss.mrmnd.com/banner.js";
    a.async = true;

    container.appendChild(a);

    console.info("Mondiad 300x250 Banner ad is loaded.");
  },
  { rootMargin: "150%" }
);</script>
</div>
{% endunless %}