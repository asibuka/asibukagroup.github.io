{% unless page.is_amp %}
<div itemscope itemtype='https://schema.org/WPAdblock' class='evadav-native-ad'></div>
<script>Defer.dom(".evadav-native-ad", 1000, "loaded", function () {
    var container = document.querySelector(".evadav-native-ad");
    if (container) {
        var a = document.createElement("script");
        a.src = "https://curoax.com/na/waWQiOjExOTc4NzksInNpZCI6MTQ2MDQwOSwid2lkIjo3MTA5NzgsInNyYyI6Mn0=eyJ.js";
        container.appendChild(a);
        console.info("Loaded.");
    } else {
        console.warn("Container element not found.");
    }
}, { rootMargin: "150%" });</script>
{% endunless %}