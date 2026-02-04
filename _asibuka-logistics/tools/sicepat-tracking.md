---
layout: asibuka-logistics
title: "Tracking Resi SiCepat"
date: 2025-05-11 00:00:04
permalink: /asibuka-logistics/tracking-sicepat/
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiECW3g-EcVofeFlL9vydGknMEFkketLYzZ6ygDjrI9yg7iP_18S4Dl4R1KU4gZK8k6ODSird-7PW0HhRSDo4iP9na7rBJmMatKQcv1Qj1ba3Nuqsw04ISl8pmv6Y3GspxYsi_ths2vDvaK6AWD8TUkc2sDMpRSvH2xBb3LUubMot-g9FZTG1l48SbTqfAc/s0-rw/asibuka-logistics-transparent.png
description: Detail tentang ASIBUKA Logistics serta hal-hal terkait program ASIBUKA Logistics sebagai salah satu bisnis dari ASIBUKA Group.
keywords: Sicepat, tracking
robots: noindex, nofollow, noreferrer
author: ASIBUKA Group
lang: id
toc: false
is_amp: false
comments: false
sitemap: false
---
{% if page.is_amp %}
<p class="text-center">Mohon maaf, fitur ini tidak tersedia di versi AMP. Silahkan klik tombol di bawah untuk masuk ke versi asli.</p>
<p class="text-center"><a class='btn block' href="{{ page.url | remove: '/amp/' | relative_url }}" title="Buka Versi Asli">Buka Versi Asli</a></p>
{% else %}
<p>1 URL per line:</p>

<textarea id="urls" placeholder="https://api.asibuka.com?awb=..."></textarea>
<br>
<button class='btn block' onclick="run()">Check</button>

<div id="output"></div>

> Alat ini tidak diperuntukkan untuk umum. Hanya untuk operasional ASIBUKA Group.

{% endif %}
<!--
<script>async function run() { const urls = document.getElementById("urls").value .split("\n") .map(u => u.trim()) .filter(Boolean); if (urls.length === 0) { alert("Masukkan minimal 1 URL"); return; } document.getElementById("output").innerHTML = "Loading..."; let rows = []; for (const url of urls) { try { const res = await fetch(url); const json = await res.json(); if (json.status !== 200) { rows.push({ error: json.message }); continue; } rows.push({ awb: json.data.summary.awb, courier: json.data.summary.courier, status: json.data.summary.status, desc: json.data.history?.[0]?.desc || "-", date: json.data.history?.[0]?.date || "-" }); } catch (err) { rows.push({ error: err.message }); } } renderTable(rows); } function renderTable(data) { let html = <table> <tr> <th>AWB</th> <th>Courier</th> <th>Status</th> <th>Latest Update</th> <th>Date</th> <th>Error</th> </tr> ; data.forEach(r => { html += <tr> <td>${r.awb || "-"}</td> <td>${r.courier || "-"}</td> <td>${r.status || "-"}</td> <td>${r.desc || "-"}</td> <td>${r.date || "-"}</td> <td class="error">${r.error || ""}</td> </tr> ; }); html += "</table>"; document.getElementById("output").innerHTML = html; }</script>
-->