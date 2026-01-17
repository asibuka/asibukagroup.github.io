---
layout: default
title: Web Tools
permalink: /alat/
description: Kumpulan web tools yang dibuat oleh ASIBUKA Group.
keywords: web tools, alat
robots: noindex, nofollow
lang: id
toc: false
is_amp: false
comments: false
sitemap: false
---
<h1 class="main-heading" id="EmbedTitle">{{ page.title }}</h1>
<p class="text-center hide-on-embed">{{ page.description }}</p>
<div id="infinite-container" class="hide-on-embed post-containers" itemscope itemtype="https://schema.org/ItemList"></div>
<div id="infinite-loader"></div>
<script>document.addEventListener("DOMContentLoaded",async()=>{const c=document.getElementById("infinite-container"),l=document.getElementById("infinite-loader"),P=5;let i=0,p=[],loading=false,done=false;try{p=await (await fetch("/webtools.json")).json()}catch(e){return console.error("Failed to load JSON",e)}const imgObs=new IntersectionObserver(e=>e.forEach(t=>{if(!t.isIntersecting)return;const n=t.target;n.src=n.dataset.src,n.removeAttribute("data-src"),n.classList.remove("lazy"),imgObs.unobserve(n)}),{rootMargin:"300px"}),refresh=()=>document.querySelectorAll("img.lazy[data-src]").forEach(e=>e.dataset.observed||(e.dataset.observed=1,imgObs.observe(e))),end=()=>{if(done)return;done=true,l.replaceWith(Object.assign(document.createElement("div"),{className:"no-more-posts",innerHTML:"<p style='text-align:center;margin:2rem 0;color:#666'>— No more posts to load —</p>"}))},render=()=>{if(loading||done)return;if(i>=p.length)return obs.disconnect(),end();loading=true,p.slice(i,i+P).forEach((e,t)=>{const n=document.createElement("article");n.className="post-container",n.setAttribute("itemscope",""),n.setAttribute("itemtype","https://schema.org/ListItem"),n.setAttribute("itemprop","itemListElement"),n.innerHTML=`<meta itemprop="position" content="${i+t+1}"><div class="post-image" itemscope itemtype="https://schema.org/ImageObject"><a href="${e.url}" title="${e.title}" itemprop="url"><img class="lazy" data-src="${e.image||""}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="${e.title||""}" title="${e.title||""}" width="1600" height="900" itemprop="contentUrl"></a></div><div class="post-content"><h2><a href="${e.url}" itemprop="name">${e.title}</a></h2><p class="author"><strong>Author:</strong> ${e.author||""}</p><p class="summary" itemprop="description">${e.description||""}</p></div>`,c.appendChild(n)}),i+=P,refresh(),loading=false},obs=new IntersectionObserver(e=>e[0].isIntersecting&&render(),{rootMargin:"500px"});render(),obs.observe(l)});</script>