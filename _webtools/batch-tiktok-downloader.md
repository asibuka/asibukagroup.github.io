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
    .containerx textarea{
      padding: 10px;
      margin-top: 10px;
      font-size: 14px;
      height: 160px;
      width: 99%;
      resize: vertical;
    }
    .containerx .controls {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
    .containerx .result {
      margin-top: 15px;
      font-size: 14px;
      line-height: 1.5;
    }
    .containerx .progress-bar {
      width: 100%;
      background: #ddd;
      height: 20px;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
    }
    .containerx .progress {
      height: 100%;
      width: 0%;
      background: #28a745;
      transition: width .3s;
    }
    .containerx .countdown {
      color: #d9534f;
      font-weight: bold;
    }
  </style>
<div class="containerx">

  <p>Masukkan <b>URL TikTok (1 per baris)</b>:</p>

  <textarea id="tiktokUrls" placeholder="https://www.tiktok.com/@user/video/123"></textarea>

  <button id="startBtnY" class='btn block'>Mulai Download</button>

  <div class="controls">
    <button id="pauseBtny" class="btn block" disabled>Pause</button>
    <button id="resumeBtny" class="btn block" disabled>Resume</button>
  </div>

  <div class="progress-bar">
    <div class="progress" id="progressY"></div>
  </div>

  <div class="result" id="resultY"></div>
</div>
<script>const s=document.getElementById("startBtnY"),p=document.getElementById("pauseBtny"),r=document.getElementById("resumeBtny"),t=document.getElementById("tiktokUrls"),o=document.getElementById("resultY"),b=document.getElementById("progressY"),MAX_RETRY=3,RETRY_DELAY=15,NEXT_DELAY=30;let u=[],pa=!1,i=0,c=0;const sleep=e=>new Promise(n=>setTimeout(n,e)),wait=async()=>{for(;pa;)await sleep(500)},count=async(e,n)=>{for(let a=e;a>0;a--)await wait(),o.innerHTML+=`<div class="countdown">⏳ ${n} ${a} detik...</div>`,await sleep(1e3),o.lastChild.remove()};p.onclick=(()=>{pa=!0,p.disabled=!0,r.disabled=!1,o.innerHTML+="<b>⏸️ Paused</b><br>"}),r.onclick=(()=>{pa=!1,p.disabled=!1,r.disabled=!0,o.innerHTML+="<b>▶️ Resumed</b><br>"});async function download(e){for(let n=1;n<=MAX_RETRY;n++)try{const n=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(e)}&hd=1`).then(e=>e.json());if(0!==n.code)throw Error();const a=n.data,d=(a.author?.unique_id||"tiktok").replace(/[^\w\-]/g,"_"),l=a.id||Date.now();if(a.play){const e=`${d}_${l}.mp4`,n=await fetch(a.play).then(e=>e.blob()),a=document.createElement("a");return a.href=URL.createObjectURL(n),a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href),o.innerHTML+=`🎬 ✅ ${e}<br>`,c++,!0}if(a.images?.length){let e=1;for(const n of a.images){await wait();const a=await fetch(n).then(e=>e.blob()),t=a.type.includes("png")?"png":"jpg",i=`${d}_${l}_img${e}.${t}`,c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=i,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(c.href),o.innerHTML+=`🖼️ ✅ ${i}<br>`,e++}return c++,!0}throw Error()}catch(e){if(o.innerHTML+=`❌ Gagal (percobaan ${n}/${MAX_RETRY})<br>`,n<MAX_RETRY)await count(RETRY_DELAY,"Retry dalam")}return o.innerHTML+="⛔ Dilewati setelah gagal semua percobaan<br>",!1}s.onclick=async()=>{if(u=t.value.split("\n").map(e=>e.trim()).filter(Boolean),!u.length)return alert("Masukkan URL terlebih dahulu");s.disabled=!0,p.disabled=!1,r.disabled=!0,o.innerHTML=`⏳ Memproses ${u.length} konten...<br><br>`,b.style.width="0%";for(;i<u.length;i++)await wait(),o.innerHTML+=`▶️ (${i+1}/${u.length}) ${u[i]}<br>`,await download(u[i]),b.style.width=(i+1)/u.length*100+"%",i<u.length-1&&await count(NEXT_DELAY,"Konten berikutnya dalam");o.innerHTML+=`<br><b>🎉 Selesai!</b> Berhasil: ${c}/${u.length}`,p.disabled=!0,r.disabled=!0};
</script>
<!--<script>
  const startBtn = document.getElementById("startBtnY");
  const pauseBtn = document.getElementById("pauseBtny");
  const resumeBtn = document.getElementById("resumeBtny");
  const textarea = document.getElementById("tiktokUrls");
  const resultDiv = document.getElementById("resultY");
  const progressBar = document.getElementById("progressY");
  const MAX_RETRY = 3;       // jumlah retry
  const RETRY_DELAY = 15;   // detik
  const NEXT_DELAY = 30;    // detik antar video
  let urls = [];
  let paused = false;
  let currentIndex = 0;
  let success = 0;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  async function waitWhilePaused() {
    while (paused) {
      await sleep(500);
    }
  }
  async function countdown(seconds, label) {
    for (let i = seconds; i > 0; i--) {
      await waitWhilePaused();
      resultDiv.innerHTML +=
        `<div class="countdown">⏳ ${label} ${i} detik...</div>`;
      await sleep(1000);
      resultDiv.lastChild.remove();
    }
  }
  pauseBtn.onclick = () => {
    paused = true;
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
    resultDiv.innerHTML += "<b>⏸️ Paused</b><br>";
  };
  resumeBtn.onclick = () => {
    paused = false;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    resultDiv.innerHTML += "<b>▶️ Resumed</b><br>";
  };
  async function downloadWithRetry(url) {
    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
      try {
        const apiRes = await fetch(
          `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`
        );
        const apiData = await apiRes.json();
        if (apiData.code !== 0) throw new Error("API error");
        const videoUrl = apiData.data.play;
        const username = apiData.data.author?.unique_id || "tiktok";
        const contentId = apiData.data.id || Date.now();
        const safeUser = username.replace(/[^\w\-]/g, "_");
        const fileName = `${safeUser}_${contentId}.mp4`;
        const videoRes = await fetch(videoUrl);
        const blob = await videoRes.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
        resultDiv.innerHTML += `✅ ${fileName}<br>`;
        success++;
        return true;
      } catch (err) {
        resultDiv.innerHTML +=
          `❌ Gagal (percobaan ${attempt}/${MAX_RETRY})<br>`;
        if (attempt < MAX_RETRY) {
          await countdown(RETRY_DELAY, "Retry dalam");
        }
      }
    }
    resultDiv.innerHTML += "⛔ Dilewati setelah gagal semua percobaan<br>";
    return false;
  }
  startBtn.onclick = async () => {
    urls = textarea.value
      .split("\n")
      .map(u => u.trim())
      .filter(Boolean);
    if (!urls.length) {
      alert("Masukkan URL terlebih dahulu");
      return;
    }
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    resultDiv.innerHTML = `⏳ Memproses ${urls.length} video...<br><br>`;
    progressBar.style.width = "0%";
    for (; currentIndex < urls.length; currentIndex++) {
      await waitWhilePaused();
      const url = urls[currentIndex];
      resultDiv.innerHTML +=
        `▶️ (${currentIndex + 1}/${urls.length}) ${url}<br>`;
      await downloadWithRetry(url);
      progressBar.style.width =
        ((currentIndex + 1) / urls.length) * 100 + "%";
      if (currentIndex < urls.length - 1) {
        await countdown(NEXT_DELAY, "Video berikutnya dalam");
      }
    }
    resultDiv.innerHTML +=
      `<br><b>🎉 Selesai!</b> Berhasil: ${success}/${urls.length}`;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
  };
</script>-->