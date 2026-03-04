{% unless page.is_amp %}
<div itemscope itemtype='https://schema.org/WPAdblock' class='adsterra-300x250-banner-ad ads text-center'>
</div>
<script>
    Defer.dom(
  ".adsterra-300x250-banner-ad",
  1e3,
  "loaded",
  function () {
    var container = document.querySelector(".adsterra-300x250-banner-ad");

    if (!container) {
      console.warn("Container element not found.");
      return;
    }
    var optionsScript = document.createElement("script");
    optionsScript.textContent = `
      atOptions = {
        key: "6a0bf86bb4a27e1fdf72b88f3b82befc",
        format: "iframe",
        height: 250,
        width: 300,
        params: {}
      };
    `;
    container.appendChild(optionsScript);
    var invokeScript = document.createElement("script");
    invokeScript.src =
      "https://www.highperformanceformat.com/6a0bf86bb4a27e1fdf72b88f3b82befc/invoke.js";
    invokeScript.async = true;

    container.appendChild(invokeScript);

    console.info("Adsterra 300x250 Loaded.");
  },
  { rootMargin: "150%" }
);
</script>
{% endunless %}