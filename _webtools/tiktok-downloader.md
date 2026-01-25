---
layout: static
title: Tiktok Downloader
permalink: /alat/tiktok-downloader/
description: Alat untuk mendownload video Tiktok tanpa watermark sekaligus.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFQj_ahON8RIGJ675_3uHfQe-iZDMnYcusN4Y3ior_r5L-Qo6ul_gSs8rRnT46GlIH9N_YZwteYjKYXAHndX3IND_Y9O5Wz3s8hwVYaMAOSuAbU5RhQ9BlxHxB97sOGXWopV0MzDt6Z3Ks_YfmBmPitnavS3_a3-M_rT7KausUAxOq11snrKVWhNagr-Y/s0-rw/tiktok-downloader.jpeg
keywords: image viewer
author: ASIBUKA Group
robots: noindex, nofollow
lang: id
comments: true
sitemap: false
toc: false
is_amp: false
---
{% if page.is_amp %}
<p class="text-center">Mohon maaf, fitur ini tidak tersedia di versi AMP. Silahkan klik tombol di bawah untuk masuk ke versi asli.</p>
<p class="text-center"><a class='btn block' href="{{ page.url | remove: '/amp/' | relative_url }}" title="Buka Versi Asli">Buka Versi Asli</a></p>
{% else %}
<label for='url'>* Masukkan 1 URL per baris</label>
<textarea id="url" placeholder="https://www.tiktok.com/@user/video/123"></textarea>
<button id='tiktokdownloader' class="btn block" onclick="extract()">Extract</button>
<div id="status"></div>
<div id="preview" class="slider-container"></div>
{% endif %}

## Cara Penggunaan

1. Buka aplikasi / situs Tiktok.
2. Cari postingan yang ingin diunduh.
3. Tekan share dan copy URL dari postingan.
4. Tempelkan url yang sudah di copy ke kolom yang tersedia di atas.
5. Tekan tombol Ektract.
6. Tunggu Proses ekstraksi selesai. Jika gagal silahkan refresh dan ulangi dari langkah empat.
7. Jika berhasil, silahkan tekan tombol Download.

<!--<script>
async function extract() {
  const textarea = document.getElementById("url");
  const status = document.getElementById("status");
  const preview = document.getElementById("preview");

  preview.innerHTML = "";
  status.textContent = "";

  const urls = textarea.value
    .split("\n")
    .map(u => u.trim())
    .filter(Boolean);

  if (!urls.length) {
    status.textContent = "❌ Masukkan URL TikTok terlebih dahulu";
    return;
  }

  status.textContent = `⏳ Memproses ${urls.length} URL...`;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    status.textContent = `⏳ (${i + 1}/${urls.length}) Mengambil data...`;

    try {
      const res = await fetch(
        `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`
      );
      const json = await res.json();

      if (json.code !== 0 || !json.data) {
        const err = document.createElement("div");
        err.textContent = `❌ Gagal extract: ${url}`;
        preview.appendChild(err);
        continue;
      }

      renderPreview(json.data);

    } catch (err) {
      const errBox = document.createElement("div");
      errBox.textContent = `❌ Error fetch: ${url}`;
      preview.appendChild(errBox);
    }
  }

  status.textContent = `✅ Selesai memproses ${urls.length} URL`;
}

async function forceDownload(url, filename) {
  const res = await fetch(url);
  const blob = await res.blob();

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

function renderPreview(data) {
  const preview = document.getElementById("preview");
  const user = data.author?.unique_id || "tiktok";
  const postId = data.id || Date.now();

  if (Array.isArray(data.images) && data.images.length > 0) {
    data.images.forEach((imgUrl, index) => {
      const box = document.createElement("div");
      box.className = "card";

      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = "Image " + (index + 1);

      const btn = document.createElement("button");
      btn.className = "btn block";
      btn.textContent = "Download";
      btn.onclick = () => {
        const ext = imgUrl.split(".").pop().split("?")[0] || "jpg";
        const filename = `${user}_${postId}_${index + 1}.${ext}`;
        forceDownload(imgUrl, filename);
      };

      box.appendChild(img);
      box.appendChild(btn);
      preview.appendChild(box);
    });
    return;
  }

  if (data.wmplay) {
    const box = document.createElement("div");
    box.className = "card";

    const img = document.createElement("img");
    img.src = data.cover || "";
    img.alt = "Video Thumbnail";

    const btnHD = document.createElement("button");
    btnHD.className = "btn block";
    btnHD.textContent = "Download";
    btnHD.onclick = () => {
      const url = data.hdplay || data.play;
      const filename = `${user}_${postId}_HD.mp4`;
      forceDownload(url, filename);
    };

    box.appendChild(img);
    box.appendChild(btnHD);
    preview.appendChild(box);
    return;
  }

  const warn = document.createElement("div");
  warn.textContent = "⚠️ Tidak ada media yang dapat ditampilkan";
  preview.appendChild(warn);
}
</script>
-->