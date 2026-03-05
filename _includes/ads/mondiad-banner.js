{% unless page.is_amp %}
<div itemscope itemtype='https://schema.org/WPAdblock' class='ads text-center'>
<div class='mondiad-300x250-banner-ad' data-mndbanid="ecf71b32-c495-4156-ba3f-a73888b5af25"></div>
<<<<<<< HEAD
=======
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
>>>>>>> 3a56f837228aa6adffa7b79a1833e583c349ec7b
</div>
<script>Defer.dom(".mondiad-300x250-banner-ad",1e3,"loaded",function(){var e,n=document.querySelector(".mondiad-300x250-banner-ad");n?((e=document.createElement("script")).src="https://ss.mrmnd.com/banner.js",n.appendChild(e),console.info("Mondiad Banner Loaded.")):console.warn("Container element not found.")},{rootMargin:"150%"});</script>
{% endunless %}