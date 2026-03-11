{% unless page.is_amp %}
<div itemscope itemtype='https://schema.org/WPAdblock' class='monetag-vignette-ad ads text-center'></div>
<script>Defer.dom(".monetag-vignette-ad",1e3,"loaded",function(){
var c=document.querySelector(".monetag-vignette-ad");
if(!c){console.warn("Container element not found.");return;}
/* var o=document.createElement("script");
o.textContent='atOptions={key:"6a0bf86bb4a27e1fdf72b88f3b82befc",format:"iframe",height:250,width:300,params:{}};';
c.appendChild(o); */
var s=document.createElement("script");
s.src="https://gizokraijaw.net/vignette.min.js";
s.async=true;
s.setAttribute('data-zone','10706313');
c.appendChild(s);
console.info("Monetag Vignette Loaded.")}
,{rootMargin:"150%"})</script>
{% endunless %}