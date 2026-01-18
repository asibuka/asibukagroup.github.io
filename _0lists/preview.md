---
layout: blank
title: Preview
permalink: /preview/
description: Laman khusus untuk menampilkan preview tampilan web.
robots: noindex, nofollow
keywords: preview
lang: id
toc: false
is_amp: false
comments: false
sitemap: false
---
<style>#preview-widget{display:none}#selectOption{height:50px;position:fixed;right:135px;width:25%}#view{padding:0;margin:0;border:0;position:fixed;top:50px;left:0;right:0;bottom:0;width:100%;height:100%;background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2zJ31X5RX4XxDQCafUfjDTNnvlzC5YIB7ORryduDAdVLnYLHclNtU-onswzXRzZtcMEBTTLEVgTq7zuiZ0r_nmeOQdoQoiBrtGA1iQ6blUOWuCoz5qSRTX2sj1WdAewtpdVls3-l4yNU/s1600-rw/loader.gif)no-repeat center center;transition:all .4s ease-out}#tab-demo{width:100%;height:50px;top:0;left:0;background:#222;color:#fff;font:normal 13px Arial,sans-serif;z-index:99999;position:fixed}.closebutton{background:#66af33 url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnvVxkEWnq3FM6l10iijk9QYCLrFj09AAryzuBZZDY2dxV4uUB6mYQ-nw79oY1FF-XjplyMqBkq6FAd74u7VVy3w0-qzOv7xGbvXvVU7_AA0b-V31hU59rVfuToQcpYiDvctMpfVKDKHc/s300-rw/close.png)no-repeat 15px 50%;text-align:center;height:50px;padding:0 20px 0 50px;position:fixed;top:0;right:0;line-height:50px;cursor:pointer;color:#fff}a.closebutton{color:#fff;text-decoration:none}.closebutton:hover{background:#579c26 url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnvVxkEWnq3FM6l10iijk9QYCLrFj09AAryzuBZZDY2dxV4uUB6mYQ-nw79oY1FF-XjplyMqBkq6FAd74u7VVy3w0-qzOv7xGbvXvVU7_AA0b-V31hU59rVfuToQcpYiDvctMpfVKDKHc/s1600-rw/close.png)no-repeat 15px 50%}.dlbutton:hover{background:#579c26 url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxPsTQtEwDhb5dtzQUORS6S-iMWVbMdfor72zINmcqrj1fIkJqjiMuux9yn6HW34JR8Vcnq03D830qjrYCQDaXCzTmiSnnTfetQR1EPHRwmWUu6O0UvlNRfexp-ZGe1VV1DGl-7Zu-lKI/s1600-rw/download.png)no-repeat 15px 50%}.dlbutton,a.dlbutton{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxPsTQtEwDhb5dtzQUORS6S-iMWVbMdfor72zINmcqrj1fIkJqjiMuux9yn6HW34JR8Vcnq03D830qjrYCQDaXCzTmiSnnTfetQR1EPHRwmWUu6O0UvlNRfexp-ZGe1VV1DGl-7Zu-lKI/s1600-rw/download.png)no-repeat 15px 50%;text-align:center;height:50px;padding:0 2rem;position:fixed;display:none;top:0;right:70px;line-height:50px;cursor:pointer;color:#fff;text-decoration:none}.demologo,a.demologo{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIDMvizricwkWUNTYCARnKyD005bCIF2727S8Iu3GpQT7ggQwOdA3FkyVLSrWmdjdZzIMC1eqTyf71nJBfo_B-A4NzbPLrSqP6qgqoe8JsRaxXpm-Eex_mwMhfhrG_fziVLruAghyphenhyphenLVHAxMQK5E1DbiDz8PN9i-677nDVQX83ZwqTQeLO8gMRyH8ckMws/s40-rw/ASIBUKA-White.png)no-repeat left center;padding-left:55px;font-size:17px;font-weight:400;font-family:Oswald,Arial,Sans-serif;text-transform:uppercase;line-height:50px;left:15px;position:fixed;color:#fff;text-decoration:none}.select{text-align:center;height:50px;padding:0 20px;position:fixed;top:0;right:200px;line-height:50px;cursor:pointer;text-decoration:none}</style>
<div id='tab-demo'>
<a class='demologo' expr:href='data:blog.homepageUrl.canonical' expr:title='data:blog.title' id='credit'><data:blog.title/></a>
<select id='selectOption'/>
<div class='preview-button'><a class='dlbutton' href='#' id='dl' target='_blank' title='Download'/></div>
<a class='closebutton' href='javascript:void(0)' onclick='document.getElementById(&apos;tab-demo&apos;).style.display=&apos;none&apos;;document.getElementById(&apos;view&apos;).style.top=&apos;0&apos;;document.getElementById(&apos;view&apos;).style.height=&apos;100%&apos;' title='Close The Menu'/>
</div>
<iframe id='view'/>
<script>
    function getQueryVariable(a) {
  let b = window.location.search.substring(1);
  let c = b.split("&");
  for (var i = 0; i < c.length; i++) {
    var d = c[i].split("=");
    if (d[0] == a) {
      return d[1];
    }
  }
  return false;
}
window.onload = function() {
  let b = getQueryVariable("id");
  let c = getQueryVariable('short');
  let d = getQueryVariable("dl");
  document.getElementById('view').src = b;

  if (c && d) {
    document.getElementById('dl').href = "https://" + c + "/"+ d;
    document.getElementById('dl').style.display = "block";
  }
let selectOptionElement = document.getElementById('selectOption');
let selectMeElements = document.querySelectorAll('.option-link');

for (let i = 0; i < selectMeElements.length; i++) {
  let option = document.createElement('option');
  option.value = selectMeElements[i].getAttribute('href');
  option.text = selectMeElements[i].textContent;
  selectOptionElement.appendChild(option);
}

selectOptionElement.addEventListener('change', function() {
  let selectedOption = this.options[this.selectedIndex];
  let href = selectedOption.value;
  window.location.href = href;
});
  history.replaceState({}, document.title, window.location.pathname);
};
</script>