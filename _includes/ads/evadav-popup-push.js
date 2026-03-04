{% unless page.is_amp %}
<div itemscope itemtype='https://schema.org/WPAdblock' class='evadav-popup-push-ad'></div>
<script>Defer.dom(".evadav-native-ad", 1000, "loaded", function () {
    var container = document.querySelector(".evadav-popup-push-ad");
    if (container) {
        var a = document.createElement("script");
        a.src = "https://peacyx.com/code/pops.js?h=waWQiOjExOTc4NzksInNpZCI6MTQ2MDQwOSwid2lkIjo3MzQ5MDQsInNyYyI6Mn0=eyJ";
        container.appendChild(a);
        console.info("Loaded.");
    } else {
        console.warn("Container element not found.");
    }
}, { rootMargin: "150%" });</script>
{% endunless %}