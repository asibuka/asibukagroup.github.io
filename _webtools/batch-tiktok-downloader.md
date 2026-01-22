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
  <script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
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
<script>const startBtn=startBtn=document.getElementById("startBtn"),
pauseBtn=document.getElementById("pauseBtn"),
resumeBtn=document.getElementById("resumeBtn"),
ta=document.getElementById("tiktokUrls"),
res=document.getElementById("result"),
bar=document.getElementById("progressY");

const MAX_RETRY=3,RETRY_DELAY=30,NEXT_DELAY=15;
let paused=false,idx=0,ok=0,urls=[];

const sleep=t=>new Promise(r=>setTimeout(r,t));
const wait=async()=>{while(paused)await sleep(400)};

pauseBtn.onclick=()=>{paused=true;pauseBtn.disabled=true;resumeBtn.disabled=false;res.innerHTML+="⏸ Paused<br>"}
resumeBtn.onclick=()=>{paused=false;pauseBtn.disabled=false;resumeBtn.disabled=true;res.innerHTML+="▶ Resumed<br>"}

async function countdown(sec,label){
  for(let i=sec;i>0;i--){
    await wait();
    res.innerHTML+=`<div class="countdown">${label} ${i}s</div>`;
    await sleep(1000);
    res.lastChild.remove();
  }
}

function triggerDownload(url,name){
  const a=document.createElement("a");
  a.href=url;
  a.download=name;
  a.target="_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function process(url){
  for(let attempt=1;attempt<=MAX_RETRY;attempt++){
    try{
      const r=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
      const j=await r.json();
      if(j.code!==0)throw "API";

      const d=j.data;
      const user=(d.author?.unique_id||"tiktok").replace(/[^\w\-]/g,"_");
      const id=d.id||Date.now();

      /* VIDEO */
      if(d.play){
        triggerDownload(d.play,`${user}_${id}.mp4`);
        res.innerHTML+=`🎬 ${user}_${id}.mp4<br>`;
        ok++; return;
      }

      /* PHOTO SLIDE */
      if(d.images?.length){
        try{
          const zip=new JSZip();
          let n=1;
          for(const img of d.images){
            await wait();
            const b=await fetch(img).then(r=>r.blob());
            zip.file(`${user}_${id}_${n}.jpg`,b);
            n++;
          }
          const blob=await zip.generateAsync({type:"blob"});
          triggerDownload(URL.createObjectURL(blob),`${user}_${id}_images.zip`);
          res.innerHTML+=`🖼 ZIP ${user}_${id}_images.zip<br>`;
        }catch{
          res.innerHTML+="⚠ ZIP failed → downloading images individually<br>";
          let n=1;
          for(const img of d.images){
            triggerDownload(img,`${user}_${id}_${n}.jpg`);
            n++;
            await sleep(500);
          }
        }
        ok++; return;
      }

      throw "Unknown";
    }catch(e){
      res.innerHTML+=`❌ Failed (${attempt}/${MAX_RETRY})<br>`;
      if(attempt<MAX_RETRY)await countdown(RETRY_DELAY,"Retry in");
    }
  }
  res.innerHTML+="⛔ Skipped<br>";
}

startBtn.onclick=async()=>{
  urls=ta.value.split("\n").map(v=>v.trim()).filter(Boolean);
  if(!urls.length)return alert("No URLs");

  startBtn.disabled=true;
  pauseBtn.disabled=false;
  resumeBtn.disabled=true;
  res.innerHTML=`Processing ${urls.length} items...<br><br>`;
  bar.style.width="0%";

  for(;idx<urls.length;idx++){
    await wait();
    res.innerHTML+=`▶ ${idx+1}/${urls.length}<br>`;
    await process(urls[idx]);
    bar.style.width=((idx+1)/urls.length*100)+"%";
    if(idx<urls.length-1)await countdown(NEXT_DELAY,"Next in");
  }

  res.innerHTML+=`<br>✅ DONE ${ok}/${urls.length}`;
  pauseBtn.disabled=true;
  resumeBtn.disabled=true;
}
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