---
layout: static
title: Image Viewer
permalink: /alat/image/
description: Halaman khusus untuk mengakses gambar melalui Link Khusus dibagikan oleh ASIBUKA.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt9dV74ytZI30Wh4Y2YQOVDAA0m8BgANonjfDgdt_HDDIFLVWBtjUbmfxSmJRIBXtqWaUJFHmt2MeCP4uuQxxHMKC5c89KBv67WB97lsQNQ3DZtDG0mJlGuYk2aO0276N21M7su15rfcxXLUVJMW0vzhqYlrVEKp5bcHT9eSke40SZ30JiMxnQn9Ti-hM/s0-rw/image-viewer.jpeg
keywords: image viewer
author: ASIBUKA Group
robots: index, follow
lang: id
comments: true
---
<div id='imageshere'></div>

<blockquote><b>CREDIT</b>: Halaman ini adalah fitur khusus untuk menampilkan berbagai gambar yang dibagikan di ASIBUKA. Fitur di laman ini hanya bisa diakses melalui link tertentu. Jika langsung dibuka, maka laman ini tidak akan menampilkan gambar apapun. Fitur ini dibuat oleh <a id='creditlink' href='https://www.asibuka.com' title='ASIBUKA'>ASIBUKA</a>.</blockquote>
<!--
<script>
function getParams(url) {
  const u = new URL(url);
  const p = {};
  for (const [key, value] of u.searchParams) {
    if (!p[key]) p[key] = [];
    p[key].push(value);
  }
  return p;
}
function securityCheck() {
  const credit = document.getElementById("creditlink");
  if (!credit) {
    location.href = "https://asibuka.com";
    return;
  }
  const href = (credit.getAttribute("href") || "").toLowerCase();
  const rel  = (credit.getAttribute("rel")  || "").toLowerCase();
  if (!href.includes("asibuka.com")) {
    location.href = "https://asibuka.com";
    return;
  }
  if (rel.includes("nofollow")) {
    location.href = "https://asibuka.com";
    return;
  }
}
function renderFromURL(url) {
  const p = getParams(url);
  if (p.title && p.title[0]) {
  const titleBox = document.querySelector("h1.main-heading");
  if (titleBox) {
    titleBox.textContent = p.title[0];
  }
}
  const ids   = p.id   || [];
  const imgs  = p.img  || [];
  const files = p.file || [];
  const count = Math.min(ids.length, imgs.length, files.length);
  let html = "";
  for (let i = 0; i < count; i++) {
    html += `
<img lazy="lazy" width="100%" height="auto" title="image"
     src="https://blogger.googleusercontent.com/img/b/${ids[i]}/${imgs[i]}/s0-rw/${files[i]}" />`;
  }
  const imagesBox = document.getElementById("imageshere");
  if (imagesBox) {
    imagesBox.innerHTML = html;
  }
  history.replaceState(null, "", location.pathname);
  securityCheck();
}
renderFromURL(location.href);
</script>
-->