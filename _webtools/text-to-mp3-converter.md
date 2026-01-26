---
layout: static
title: Text to MP3 Converter
permalink: /alat/text-to-mp3-converter/
description: Alat untuk mengkonversi teks menjadi audio atau MP3 dalam berbagai bahasa yang bisa digunakan secara gratis.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiemB2cJMHYTXB8Jh2n1ntLFjPtW7CgSW7OrZVDNDrIa-Glo0PbxpaKLCFIjLthHEPz9DvgS7XOaXtOt42IXLJ8EgTTDrRYVcQQGErrmMKGjRkTr0fQoaP13mstGyS6BrTjyFkcd64UBffU1yUJnkCwNpSPpN1H1va_TQUzty1oCZ31TCrA8IvDNI8AACbc/s0-rw/text-to-audio-converter.jpeg
keywords: text to mp3 converter, free tts, tts gratis, unlimited
author: ASIBUKA Group
robots: index, follow
lang: id
comments: true
sitemap: false
toc: false
---
{% if page.is_amp %}
<p class="text-center">Mohon maaf, fitur ini tidak tersedia di versi AMP. Silahkan klik tombol di bawah untuk masuk ke versi asli.</p>
<p class="text-center"><a class='btn block' href="{{ page.url | remove: '/amp/' | relative_url }}" title="Buka Versi Asli">Buka Versi Asli</a></p>
{% else %}
<div class="text-to-mp3">
<h2>Text to MP3 Converter 🎙️</h2>
<label for="textInput">Enter Text:</label>
<textarea id="textInput" placeholder="Type your text here..."></textarea>
<label for="languageSelect">Choose Language:</label>
<select id="languageSelect">
<option value='ar-eg'>Arabic (Egypt)</option>
<option value='ar-sa'>Arabic (Saudi Arabia)</option>
<option value='bg-bg'>Bulgarian</option>
<option value='ca-es'>Catalan</option>
<option value='zh-cn'>Chinese (China)</option>
<option value='zh-hk'>Chinese (Hong Kong)</option>
<option value='zh-tw'>Chinese (Taiwan)</option>
<option value='hr-hr'>Croatian</option>
<option value='cs-cz'>Czech</option>
<option value='da-dk'>Danish</option>
<option value='nl-be'>Dutch (Belgium)</option>
<option value='nl-nl'>Dutch (Netherlands)</option>
<option value='en-au'>English (Australia)</option>
<option value='en-ca'>English (Canada)</option>
<option value='en-gb'>English (Great Britain)</option>
<option value='en-in'>English (India)</option>
<option value='en-ie'>English (Ireland)</option>
<option value='en-us'>English (United States)</option>
<option value='fi-fi'>Finnish</option>
<option value='fr-ca'>French (Canada)</option>
<option value='fr-fr'>French (France)</option>
<option value='fr-ch'>French (Switzerland)</option>
<option value='de-at'>German (Austria)</option>
<option value='de-de'>German (Germany)</option>
<option value='de-ch'>German (Switzerland)</option>
<option value='el-gr'>Greek</option>
<option value='he-il'>Hebrew</option>
<option value='hi-in'>Hindi</option>
<option value='hu-hu'>Hungarian</option>
<option value='id-id' selected>Indonesian</option>
<option value='it-it'>Italian</option>
<option value='ja-jp'>Japanese</option>
<option value='ko-kr'>Korean</option>
<option value='ms-my'>Malay</option>
<option value='nb-no'>Norwegian</option>
<option value='pl-pl'>Polish</option>
<option value='pt-br'>Portuguese (Brazil)</option>
<option value='pt-pt'>Portuguese (Portugal)</option>
<option value='ro-ro'>Romanian</option>
<option value='ru-ru'>Russian</option>
<option value='sk-sk'>Slovak</option>
<option value='sl-si'>Slovenian</option>
<option value='es-mx'>Spanish (Mexico)</option>
<option value='es-es'>Spanish (Spain)</option>
<option value='sv-se'>Swedish</option>
<option value='ta-in'>Tamil</option>
<option value='th-th'>Thai</option>
<option value='tr-tr'>Turkish</option>
<option value='vi-vn'>Vietnamese</option></select>
<label for="genderSelect">Choose Gender:</label>
<select id="genderSelect">
<option value="male" selected>Male</option>
<option value="female">Female</option>
</select>
<label for="voiceSelect">Choose Voice:</label>
<select id="voiceSelect"></select>
<label for="speedRange">Set Speed (50% - 150%):</label>
<div class="range-container">
<input type="range" id="speedRange" min="50" max="150" value="100">
<span id="speedValue">100%</span>
</div>
<label for="codecSelect">Choose Output:</label>
<select id="codecSelect">
<option value="MP3" selected>MP3</option>
<option value="WAV">WAV</option>
<option value="AAC">AAC</option>
<option value="OGG">OGG</option>
<option value="CAF">CAF</option>
</select>
<label for="formatSelect">Choose Format:</label>
<select id="formatSelect">
<option value='Audio format code'>Audio format description</option>
<option value='8khz_8bit_mono'>8 kHz, 8 Bit, Mono</option>
<option value='8khz_8bit_stereo'>8 kHz, 8 Bit, Stereo</option>
<option value='8khz_16bit_mono'>8 kHz, 16 Bit, Mono</option>
<option value='8khz_16bit_stereo'>8 kHz, 16 Bit, Stereo</option>
<option value='11khz_8bit_mono'>11 kHz, 8 Bit, Mono</option>
<option value='11khz_8bit_stereo'>11 kHz, 8 Bit, Stereo</option>
<option value='11khz_16bit_mono'>11 kHz, 16 Bit, Mono</option>
<option value='11khz_16bit_stereo'>11 kHz, 16 Bit, Stereo</option>
<option value='12khz_8bit_mono'>12 kHz, 8 Bit, Mono</option>
<option value='12khz_8bit_stereo'>12 kHz, 8 Bit, Stereo</option>
<option value='12khz_16bit_mono'>12 kHz, 16 Bit, Mono</option>
<option value='12khz_16bit_stereo'>12 kHz, 16 Bit, Stereo</option>
<option value='16khz_8bit_mono'>16 kHz, 8 Bit, Mono</option>
<option value='16khz_8bit_stereo'>16 kHz, 8 Bit, Stereo</option>
<option value='16khz_16bit_mono'>16 kHz, 16 Bit, Mono</option>
<option value='16khz_16bit_stereo' selected>16 kHz, 16 Bit, Stereo</option>
<option value='22khz_8bit_mono'>22 kHz, 8 Bit, Mono</option>
<option value='22khz_8bit_stereo'>22 kHz, 8 Bit, Stereo</option>
<option value='22khz_16bit_mono'>22 kHz, 16 Bit, Mono</option>
<option value='22khz_16bit_stereo'>22 kHz, 16 Bit, Stereo</option>
<option value='24khz_8bit_mono'>24 kHz, 8 Bit, Mono</option>
<option value='24khz_8bit_stereo'>24 kHz, 8 Bit, Stereo</option>
<option value='24khz_16bit_mono'>24 kHz, 16 Bit, Mono</option>
<option value='24khz_16bit_stereo'>24 kHz, 16 Bit, Stereo</option>
<option value='32khz_8bit_mono'>32 kHz, 8 Bit, Mono</option>
<option value='32khz_8bit_stereo'>32 kHz, 8 Bit, Stereo</option>
<option value='32khz_16bit_mono'>32 kHz, 16 Bit, Mono</option>
<option value='32khz_16bit_stereo'>32 kHz, 16 Bit, Stereo</option>
<option value='44khz_8bit_mono'>44 kHz, 8 Bit, Mono</option>
<option value='44khz_8bit_stereo'>44 kHz, 8 Bit, Stereo</option>
<option value='44khz_16bit_mono'>44 kHz, 16 Bit, Mono</option>
<option value='44khz_16bit_stereo'>44 kHz, 16 Bit, Stereo</option>
<option value='48khz_8bit_mono'>48 kHz, 8 Bit, Mono</option>
<option value='48khz_8bit_stereo'>48 kHz, 8 Bit, Stereo</option>
<option value='48khz_16bit_mono'>48 kHz, 16 Bit, Mono</option>
<option value='48khz_16bit_stereo'>48 kHz, 16 Bit, Stereo</option>
<option value='alaw_8khz_mono'>ALaw, 8 kHz, Mono</option>
<option value='alaw_8khz_stereo'>ALaw, 8 kHz, Stereo</option>
<option value='alaw_11khz_mono'>ALaw, 11 kHz, Mono</option>
<option value='alaw_11khz_stereo'>ALaw, 11 kHz, Stereo</option>
<option value='alaw_22khz_mono'>ALaw, 22 kHz, Mono</option>
<option value='alaw_22khz_stereo'>ALaw, 22 kHz, Stereo</option>
<option value='alaw_44khz_mono'>ALaw, 44 kHz, Mono</option>
<option value='alaw_44khz_stereo'>ALaw, 44 kHz, Stereo</option>
<option value='ulaw_8khz_mono'>uLaw, 8 kHz, Mono</option>
<option value='ulaw_8khz_stereo'>uLaw, 8 kHz, Stereo</option>
<option value='ulaw_11khz_mono'>uLaw, 11 kHz, Mono</option>
<option value='ulaw_11khz_stereo'>uLaw, 11 kHz, Stereo</option>
<option value='ulaw_22khz_mono'>uLaw, 22 kHz, Mono</option>
<option value='ulaw_22khz_stereo'>uLaw, 22 kHz, Stereo</option>
<option value='ulaw_44khz_mono'>uLaw, 44 kHz, Mono</option>
<option value='ulaw_44khz_stereo'>uLaw, 44 kHz, Stereo</option>
</select>
<button class="btn block" onclick="convertTextToMP3()">Convert & Play Preview</button>
<div id="previewContainer" hidden>
<audio id="audioPreview" controls></audio>
<button class="btn download block" hidden id='downloadButton' onclick="downloadMP3()">Download</button>
</div>
</div>
{% endif %}

## My Personal Words

Saya harap ini bisa menjadi salah satu cara untuk memberi manfaat bagi banyak orang. Saya membuat alat ini untuk membantu Anda mengkonversi teks menjadi audio sehingga kamu dapat menyebarkan ide tulisanmu dalam bentuk yang lebih beragam dan supaya kamu dapat menyebarkan ide dan gagasanmu ke lebih banyak platform.

Sejujurnya, saya ingin membuat alat ini 100% gratis selamanya. Kendati demikian, saya rasa akan sedikit sulit karena alat ini menggunakan API berbayar.

Jadi, jika kamu merasa alat sederhana ini bermanfaat bagimu, saya akan sangat menghargai dukungan dalam bentuk finansial berapapun nominalnya supaya saya dapat membayar API yang digunakan untuk alat ini. Dengan demikian, saya dapat memastikan alat ini dapat berfungsi lebih lama atau mungkin selamanya.

Sekedar informasi, harga untuk API alat ini adalah $300 USD per bulan atau setara Rp4,800,000 per bulan.

Jika ada masalah apapun terkait alat ini, atau pertanyaan seputar penggunaan alat ini, silahkan sampaikan melalui kolom komentar di bawah.

Selamat menggunakan dan semoga bermanfaat.

<!--<script>
const apiKey = '7ede82ce4af246288d1aac8915a1ee9c';
const ttsVoices = {
  "ar-eg": { male: [], female: ["Oda"] },
  "ar-sa": { male: ["Salim"], female: [] },
  "bg-bg": { male: ["Dimo"], female: [] },
  "ca-es": { male: [], female: ["Rut"] },
  "zh-cn": { male: ["Wang"], female: ["Luli", "Shu", "Chow"] },
  "zh-hk": { male: ["Chen"], female: ["Jia", "Xia"] },
  "zh-tw": { male: ["Lee"], female: ["Akemi", "Lin"] },
  "hr-hr": { male: ["Nikola"], female: [] },
  "cs-cz": { male: ["Josef"], female: [] },
  "da-dk": { male: [], female: ["Freja"] },
  "nl-be": { male: ["Daan"], female: [] },
  "nl-nl": { male: ["Bram"], female: ["Lotte"] },
  "en-au": { male: ["Jack"], female: ["Zoe", "Isla", "Evie"] },
  "en-ca": { male: ["Mason"], female: ["Rose", "Clara", "Emma"] },
  "en-gb": { male: ["Harry"], female: ["Alice", "Nancy", "Lily"] },
  "en-in": { male: ["Ajit"], female: ["Eka", "Jai"] },
  "en-ie": { male: ["Oran"], female: [] },
  "en-us": { male: ["John", "Mike"], female: ["Linda", "Amy", "Merry"] },
  "fi-fi": { male: [], female: ["Aada"] },
  "fr-ca": { male: ["Felix"], female: ["Emile", "Olivia", "Logan"] },
  "fr-fr": { male: ["Axel"], female: ["Bette", "Iva", "Zola"] },
  "fr-ch": { male: ["Theo"], female: [] },
  "de-at": { male: ["Lukas"], female: [] },
  "de-de": { male: ["Jonas"], female: ["Hanna", "Lina"] },
  "de-ch": { male: ["Tim"], female: [] },
  "el-gr": { male: ["Neo"], female: [] },
  "he-il": { male: ["Rami"], female: [] },
  "hi-in": { male: ["Kabir"], female: ["Puja"] },
  "hu-hu": { male: ["Mate"], female: [] },
  "id-id": { male: ["Intan"], female: [] },
  "it-it": { male: ["Pietro"], female: ["Bria", "Mia"] },
  "ja-jp": { male: ["Akira"], female: ["Hina", "Airi", "Fumi"] },
  "ko-kr": { male: [], female: ["Nari"] },
  "ms-my": { male: ["Aqil"], female: [] },
  "nb-no": { male: [], female: ["Marte"] },
  "pl-pl": { male: ["Jan"], female: ["Julia"] },
  "pt-br": { male: ["Dinis"], female: ["Marcia", "Ligia", "Yara"] },
  "pt-pt": { male: [], female: ["Leonor"] },
  "ro-ro": { male: ["Doru"], female: [] },
  "ru-ru": { male: ["Peter"], female: ["Olga", "Marina"] },
  "sk-sk": { male: ["Beda"], female: [] },
  "sl-si": { male: ["Vid"], female: [] },
  "es-mx": { male: ["Jose"], female: ["Juana", "Silvia", "Teresa"] },
  "es-es": { male: ["Diego"], female: ["Camila", "Sofia", "Luna"] },
  "sv-se": { male: ["Hugo"], female: ["Molly"] },
  "ta-in": { male: ["Sai"], female: [] },
  "th-th": { male: ["Ukrit"], female: [] },
  "tr-tr": { male: ["Omer"], female: [] },
  "vi-vn": { male: ["Chi"], female: [] }
};

/* Update voices based on selected language and gender */
function updateVoices() {
  const language = languageSelect.value;
  const gender = document.getElementById('genderSelect').value;
  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';

  const availableVoices = ttsVoices[language] ? ttsVoices[language][gender] : [];

  if (availableVoices.length > 0) {
    availableVoices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice;
      option.textContent = voice;
      voiceSelect.appendChild(option);
    });
  } else {
    /* No voice for selected gender, fallback to the other gender */
    const fallbackGender = gender === 'male' ? 'female' : 'male';
    const fallbackVoices = ttsVoices[language] ? ttsVoices[language][fallbackGender] : [];

    fallbackVoices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice;
      option.textContent = voice;
      voiceSelect.appendChild(option);
    });
  }
}

/* Event listeners */
languageSelect.addEventListener('change', updateVoices);
document.getElementById('genderSelect').addEventListener('change', updateVoices);

/* Initialize */
updateVoices();

/* Update speed display */
document.getElementById('speedRange').addEventListener('input', function() {
  document.getElementById('speedValue').textContent = this.value + '%';
});

/* Convert text to MP3 and preview */
function convertTextToMP3() {
  const text = document.getElementById('textInput').value.trim();
  const language = document.getElementById('languageSelect').value;
  const voice = document.getElementById('voiceSelect').value;
  const speed = document.getElementById('speedRange').value;
  const format = document.getElementById('formatSelect').value;

  if (!text) {
    alert('Please enter some text!');
    return;
  }

  /* Save last settings to localStorage with timestamp */
  const settings = {
    text: text,
    language: language,
    voice: voice,
    speed: speed,
    format: format,
    savedAt: Date.now() /* Store the time when settings were saved */
  };
  localStorage.setItem('ttsSettings', JSON.stringify(settings));

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${language}&v=${voice}&r=${speed - 100}&src=${encodeURIComponent(text)}&f=${format}`;

  document.getElementById('previewContainer').removeAttribute('hidden');
  const audio = document.getElementById('audioPreview');
  audio.src = url;

  audio.onended = function() {
    document.getElementById('downloadButton').removeAttribute('hidden');
  };
}

/* Load saved settings if still valid */
window.addEventListener('DOMContentLoaded', function() {
  const savedSettingsRaw = localStorage.getItem('ttsSettings');

  if (savedSettingsRaw) {
    const savedSettings = JSON.parse(savedSettingsRaw);
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000; /* 7 days in milliseconds */

    if (savedSettings.savedAt && (now - savedSettings.savedAt) < sevenDays) {
      /* Settings are still fresh, load them */
      document.getElementById('textInput').value = savedSettings.text || '';
      document.getElementById('languageSelect').value = savedSettings.language || 'id-id';
      updateVoices();
      document.getElementById('voiceSelect').value = savedSettings.voice || '';
      document.getElementById('speedRange').value = savedSettings.speed || 100;
      document.getElementById('speedValue').textContent = (savedSettings.speed || 100) + '%';
      document.getElementById('formatSelect').value = savedSettings.format || 'mp3';
    } else {
      /* Settings are too old, remove them */
      localStorage.removeItem('ttsSettings');
    }
  }
});


/* Download MP3 file */
function downloadMP3() {
  const text = document.getElementById('textInput').value.trim();
  const language = document.getElementById('languageSelect').value;
  const voice = document.getElementById('voiceSelect').value;
  const speed = document.getElementById('speedRange').value;
  const codec = document.getElementById('codecSelect').value;
  const format = document.getElementById('formatSelect').value;

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${language}&v=${voice}&r=${speed - 100}&src=${encodeURIComponent(text)}&c=${codec}&f=${format}`;

  const link = document.createElement('a');
  link.href = url;
  link.download = 'tts.mp3';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

</script>-->