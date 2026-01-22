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
<input id="url" placeholder="https://www.tiktok.com/@user/video/123">
<button onclick="extract()">Extract</button>

<div id="status"></div>
<div id="preview" class='slider-container'></div>

<script>
async function extract() {
  const url = document.getElementById("url").value.trim();
  const status = document.getElementById("status");
  const preview = document.getElementById("preview");

  preview.innerHTML = "";
  status.textContent = "";

  if (!url) {
    status.textContent = "❌ Masukkan URL TikTok terlebih dahulu";
    return;
  }

  status.textContent = "⏳ Mengambil data...";

  try {
    const res = await fetch(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`
    );
    const json = await res.json();

    if (json.code !== 0 || !json.data) {
      status.textContent = "❌ Data tidak valid";
      return;
    }

    status.textContent = "✅ Berhasil";
    renderPreview(json.data);

  } catch (err) {
    status.textContent = "❌ Gagal mengambil data (CORS / jaringan)";
  }
}

function renderPreview(data) {
  const preview = document.getElementById("preview");

  /* ===============================
     SLIDE IMAGE POST
  =============================== */
  if (Array.isArray(data.images) && data.images.length > 0) {
    data.images.forEach((imgUrl, index) => {
      const box = document.createElement("div");
      box.className = "card";

      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = "Image " + (index + 1);

      const btn = document.createElement("a");
      btn.className = "btn block";
      btn.href = imgUrl;
      btn.download = "";
      btn.innerHTML = `<button>Download</button>`;

      box.appendChild(img);
      box.appendChild(btn);
      preview.appendChild(box);
    });
    return;
  }

  /* ===============================
     VIDEO POST
  =============================== */
  if (data.wmplay) {
    const box = document.createElement("div");
    box.className = "card";

    const video = document.createElement("video");
    video.src = data.wmplay;
    video.controls = true;

    const btnNormal = document.createElement("a");
    btnNormal.className = "btn block";
    btnNormal.href = data.play || data.wmplay;
    btnNormal.download = "";
    btnNormal.innerHTML = `<button>⬇️ Download Video</button>`;

    const btnHD = document.createElement("a");
    btnHD.className = "btn block";
    btnHD.href = data.hdplay || data.play;
    btnHD.download = "";
    btnHD.innerHTML = `<button class="btn-secondary">⬇️ Download Video HD</button>`;

    box.appendChild(video);
    box.appendChild(btnNormal);
    box.appendChild(btnHD);
    preview.appendChild(box);
    return;
  }

  preview.textContent = "⚠️ Tidak ada media yang dapat ditampilkan";
}
</script>
<!--<style>
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
<<<<<<< HEAD
<script>(()=>{const g=id=>document.getElementById(id),s=g("startBtnY"),p=g("pauseBtny"),r=g("resumeBtny"),t=g("tiktokUrls"),d=g("resultY"),b=g("progressY"),MAX_RETRY=3,RETRY_DELAY=15,NEXT_DELAY=30,sleep=m=>new Promise(e=>setTimeout(e,m));let u=[],paused=!1,i=0,ok=0;const wait=async()=>{for(;paused;)await sleep(500)},cd=async(n,l)=>{for(let i=n;i>0;i--){await wait(),d.innerHTML+=`<div class="countdown">⏳ ${l} ${i} detik...</div>`,await sleep(1e3),d.lastChild.remove()}};p.onclick=()=>{paused=!0,p.disabled=!0,r.disabled=!1,d.innerHTML+="<b>⏸️ Paused</b><br>"},r.onclick=()=>{paused=!1,p.disabled=!1,r.disabled=!0,d.innerHTML+="<b>▶️ Resumed</b><br>"};const dl=async url=>{for(let a=1;a<=MAX_RETRY;a++)try{let j=await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`).then(r=>r.json());if(j.code!==0)throw 0;let v=j.data.play,u=j.data.author?.unique_id||"tiktok",id=j.data.id||Date.now(),f=`${u.replace(/[^\w\-]/g,"_")}_${id}.mp4`,blob=await fetch(v).then(r=>r.blob()),A=document.createElement("a");A.href=URL.createObjectURL(blob),A.download=f,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(A.href),d.innerHTML+=`✅ ${f}<br>`,ok++;return!0}catch(e){d.innerHTML+=`❌ Gagal (percobaan ${a}/${MAX_RETRY})<br>`,a<MAX_RETRY&&await cd(RETRY_DELAY,"Retry dalam")}return d.innerHTML+="⛔ Dilewati setelah gagal semua percobaan<br>",!1};s.onclick=async()=>{if(u=t.value.split("\n").map(e=>e.trim()).filter(Boolean),!u.length)return alert("Masukkan URL terlebih dahulu");s.disabled=!0,p.disabled=!1,r.disabled=!0,d.innerHTML=`⏳ Memproses ${u.length} video...<br><br>`,b.style.width="0%";for(;i<u.length;i++)await wait(),d.innerHTML+=`▶️ (${i+1}/${u.length}) ${u[i]}<br>`,await dl(u[i]),b.style.width=100*(i+1)/u.length+"%",i<u.length-1&&await cd(NEXT_DELAY,"Video berikutnya dalam");d.innerHTML+=`<br><b>🎉 Selesai!</b> Berhasil: ${ok}/${u.length}`,p.disabled=r.disabled=!0}})();
=======
<script>
(() => {
  const g = id => document.getElementById(id),
    s = g("startBtnY"),
    p = g("pauseBtny"),
    r = g("resumeBtny"),
    t = g("tiktokUrls"),
    d = g("resultY"),
    b = g("progressY");
  const MAX_RETRY = 3;
  const RETRY_DELAY = 15;
  const NEXT_DELAY = 30;
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  let urls = [], paused = false, index = 0, success = 0;
  const waitIfPaused = async () => {
    while (paused) await sleep(500);
  };
  const countdown = async (sec, label) => {
    for (let i = sec; i > 0; i--) {
      await waitIfPaused();
      d.innerHTML += `<div class="countdown">⏳ ${label} ${i} detik...</div>`;
      await sleep(1000);
      d.lastChild.remove();
    }
  };
  p.onclick = () => {
    paused = true;
    p.disabled = true;
    r.disabled = false;
    d.innerHTML += "<b>⏸️ Paused</b><br>";
  };
  r.onclick = () => {
    paused = false;
    p.disabled = false;
    r.disabled = true;
    d.innerHTML += "<b>▶️ Resumed</b><br>";
  };
  const downloadFile = async (url, filename) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  };
  const downloadImages = async (images, user, id) => {
    for (let i = 0; i < images.length; i++) {
      await waitIfPaused();
      const imgUrl = images[i];
      const fname = `${user}_${id}_img_${i + 1}.jpg`;
      await downloadFile(imgUrl, fname);
      d.innerHTML += `🖼️ ${fname}<br>`;
    }};
  const downloadTikTok = async (url) => {
    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
      try {
        const res = await fetch(
          `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`
        ).then(r => r.json());
        if (res.code !== 0) throw "API error";
        const data = res.data;
        const user = data.author?.unique_id || "tiktok";
        const id = data.id || Date.now();
        if (Array.isArray(data.images) && data.images.length > 0) {
          const videoUrl = data.hdplay || data.play;
          if (!videoUrl) throw "Slideshow video tidak tersedia";
          const head = await fetch(videoUrl, { method: "HEAD" });
          if (!head.headers.get("content-type")?.includes("video")) {
            throw "Slideshow bukan video";
          }
          const videoName = `${user}_${id}_slideshow.mp4`;
          await downloadFile(videoUrl, videoName);
          d.innerHTML += `🎬 ${videoName}<br>`;
          await downloadImages(data.images, user, id);
          success++;
          return true;
        }
        const videoUrl = data.hdplay || data.play;
        if (!videoUrl) throw "Video tidak tersedia";
        const videoName = `${user}_${id}.mp4`;
        await downloadFile(videoUrl, videoName);
        d.innerHTML += `🎬 ${videoName}<br>`;
        success++;
        return true;
      } catch (e) {
        d.innerHTML += `❌ Gagal (percobaan ${attempt}/${MAX_RETRY})<br>`;
        if (attempt < MAX_RETRY) {
          await countdown(RETRY_DELAY, "Retry dalam");
        }
      }
    }
    d.innerHTML += "⛔ Dilewati setelah gagal semua percobaan<br>";
    return false;
  };
  s.onclick = async () => {
    urls = t.value.split("\n").map(v => v.trim()).filter(Boolean);
    if (!urls.length) return alert("Masukkan URL terlebih dahulu");
    s.disabled = true;
    p.disabled = false;
    r.disabled = true;
    d.innerHTML = `⏳ Memproses ${urls.length} item...<br><br>`;
    b.style.width = "0%";
    for (; index < urls.length; index++) {
      await waitIfPaused();
      d.innerHTML += `▶️ (${index + 1}/${urls.length}) ${urls[index]}<br>`;
      await downloadTikTok(urls[index]);
      b.style.width = ((index + 1) / urls.length) * 100 + "%";
      if (index < urls.length - 1) {
        await countdown(NEXT_DELAY, "Video berikutnya dalam");
      }
    }
    d.innerHTML += `<br><b>🎉 Selesai!</b> Berhasil: ${success}/${urls.length}`;
    p.disabled = r.disabled = true;
  };
})();
>>>>>>> 0dcf287832a3482a5ce216107a11ece69a8312ad
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