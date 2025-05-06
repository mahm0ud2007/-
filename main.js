function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// دعاء
const duaas = {
  rizq: ["اللهم ارزقني رزقًا طيبًا", "اللهم افتح لي أبواب رزقك"],
  study: ["اللهم لا سهل إلا ما جعلته سهلًا", "رب زدني علمًا"],
  rain: ["اللهم اسقنا غيثًا مغيثًا", "اللهم اجعلها سقيا رحمة"],
  death: ["اللهم ارحم موتانا وموتى المسلمين", "اللهم اجعل قبورهم روضة من رياض الجنة"],
  morning: ["اللهم بك أصبحنا وبك نحيا", "أصبحنا وأصبح الملك لله"],
  istikhara: ["اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك", "فإنك تعلم ولا أعلم وأنت علام الغيوب"]
};

let currentIndex = 0;
let currentCategory = 'rizq';

function loadDuaa() {
  currentCategory = document.getElementById("category").value;
  currentIndex = 0;
  updateDuaa();
}

function updateDuaa() {
  const text = duaas[currentCategory][currentIndex];
  document.getElementById("duaaText").textContent = text;
}

function nextDuaa() {
  currentIndex = (currentIndex + 1) % duaas[currentCategory].length;
  updateDuaa();
}

function prevDuaa() {
  currentIndex = (currentIndex - 1 + duaas[currentCategory].length) % duaas[currentCategory].length;
  updateDuaa();
}

// مسبحة
let count = 0;
function setTasbeeh(text) {
  document.getElementById("tasbeehText").textContent = text;
  count = 0;
  document.getElementById("count").textContent = count;
}
function incrementCount() {
  count++;
  document.getElementById("count").textContent = count;
}
function resetCount() {
  count = 0;
  document.getElementById("count").textContent = count;
}

// زكاة
function calculateZakah() {
  const money = parseFloat(document.getElementById("money").value);
  if (money >= 0) {
    const zakah = money * 0.025;
    document.getElementById("zakahResult").textContent = "قيمة الزكاة: " + zakah.toFixed(2) + " جنيه";
  } else {
    document.getElementById("zakahResult").textContent = "الرجاء إدخال مبلغ صحيح.";
  }
}

// التاريخ الهجري
function getHijriDate() {
  const date = new Date().toLocaleDateString('ar-SA-u-ca-islamic', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  document.getElementById("hijri-date").textContent = "التاريخ الهجري: " + date;
}

window.onload = function() {
  showSection('adhkar');
  getHijriDate();
};
