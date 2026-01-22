---
layout: static
title: Batch Tiktok Downloader
date: 2025-04-27 00:00:04
permalink: /alat/batch-tiktok-downloader/
description: Alat untuk mendownload video Tiktok tanpa watermark sekaligus.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt9dV74ytZI30Wh4Y2YQOVDAA0m8BgANonjfDgdt_HDDIFLVWBtjUbmfxSmJRIBXtqWaUJFHmt2MeCP4uuQxxHMKC5c89KBv67WB97lsQNQ3DZtDG0mJlGuYk2aO0276N21M7su15rfcxXLUVJMW0vzhqYlrVEKp5bcHT9eSke40SZ30JiMxnQn9Ti-hM/s0-rw/image-viewer.jpeg
keywords: image viewer
author: ASIBUKA Group
robots: noindex, nofollow
lang: id
comments: true
sitemap: false
toc: false
is_amp: false
---
<style>
body {
    background:#0f172a;
    color:#e5e7eb;
    font-family:system-ui, sans-serif;
    margin:0;
    padding:20px;
}
.container {
    max-width:900px;
    margin:auto;
}
h1 {
    text-align:center;
    margin-bottom:16px;
}
textarea {
    width:100%;
    height:130px;
    background:#020617;
    color:#e5e7eb;
    border:1px solid #334155;
    border-radius:6px;
    padding:10px;
    resize:vertical;
}
button {
    background:#22c55e;
    color:#022c22;
    border:none;
    padding:10px 18px;
    border-radius:6px;
    font-weight:600;
    cursor:pointer;
}
button:disabled {
    background:#475569;
    cursor:not-allowed;
}
.status {
    margin-top:10px;
    font-size:14px;
    color:#94a3b8;
}
.results {
    margin-top:30px;
    display:grid;
    gap:20px;
}
.card {
    background:#020617;
    border:1px solid #334155;
    border-radius:8px;
    padding:12px;
}
.card h3 {
    margin:6px 0 10px;
}
video, img {
    width:100%;
    border-radius:6px;
}
.download-group {
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-top:10px;
}
.download-group a {
    background:#3b82f6;
    color:#fff;
    text-decoration:none;
    padding:6px 10px;
    border-radius:4px;
    font-size:14px;
}
.slider {
    display:flex;
    gap:10px;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
}
.slide {
    min-width:220px;
    scroll-snap-align:start;
}
.slide img {
    margin-bottom:6px;
}
.error {
    color:#f87171;
    font-size:14px;
}
</style>
<div class="container">
    <h1>🎵 TikTok Batch Downloader<br><small style="color:#94a3b8">HD • No Watermark</small></h1>

    <textarea id="urls" placeholder="1 URL TikTok per baris"></textarea>
    <br><br>
    <button id="start">Mulai Proses</button>
    <div class="status" id="status"></div>

    <div class="results" id="results"></div>
</div>

<script>
const DELAY = 30000;      // 30 detik
const MAX_RETRY = 3;

const startBtn = document.getElementById("start");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");

startBtn.onclick = async () => {
    const urls = document.getElementById("urls")
        .value.split("\n")
        .map(u => u.trim())
        .filter(Boolean);

    if (!urls.length) return alert("Masukkan URL TikTok");

    startBtn.disabled = true;
    resultsEl.innerHTML = "";

    for (let i = 0; i < urls.length; i++) {
        statusEl.textContent = `Memproses ${i + 1} / ${urls.length}`;
        await processWithRetry(urls[i]);

        if (i < urls.length - 1) {
            await delay(DELAY);
        }
    }

    statusEl.textContent = "Selesai ✔";
    startBtn.disabled = false;
};

async function processWithRetry(url) {
    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
        try {
            const data = await fetchData(url);
            render(data);
            return;
        } catch (err) {
            if (attempt === MAX_RETRY) {
                renderError(url);
            }
        }
    }
}

async function fetchData(url) {
    // GANTI endpoint ini dengan backend extractor Anda
    const res = await fetch("/api/tiktok/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
    });

    if (!res.ok) throw new Error("Fetch gagal");
    return res.json();
}

function render(data) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${data.title || "TikTok Post"}</h3>`;

    if (data.type === "video") {
        card.innerHTML += `
            <video controls src="${data.video_hd}"></video>
            <div class="download-group">
                <a href="${data.video_hd}" download>Download Video HD</a>
                ${data.audio ? `<a href="${data.audio}" download>Download Audio</a>` : ""}
            </div>
        `;
    }

    if (data.type === "slide") {
        const slider = document.createElement("div");
        slider.className = "slider";

        data.images.forEach(img => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.innerHTML = `
                <img src="${img}">
                <div class="download-group">
                    <a href="${img}" download>Download Gambar</a>
                </div>
            `;
            slider.appendChild(slide);
        });

        card.appendChild(slider);
        card.innerHTML += `
            <div class="download-group">
                <a href="${data.video_hd}" download>Download Sebagai Video (HD)</a>
            </div>
        `;
    }

    resultsEl.appendChild(card);
}

function renderError(url) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>Gagal</h3>
        <div class="error">${url}</div>
    `;
    resultsEl.appendChild(card);
}

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}
</script>