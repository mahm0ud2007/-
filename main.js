// التنقل بين الأقسام
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active-section'));
  document.getElementById(sectionId).classList.add('active-section');
}

// الأدعية
const duaas = {
  rizq: [
    "اللهم ارزقنا من حيث لا نحتسب.",
    "اللهم بارك لنا في أرزاقنا وأعمالنا.",
    "اللهم اجعل رزقنا واسعًا حلالاً طيبًا.",
    "اللهم افتح لنا أبواب رزقك وفضلِك.",
    "اللهم ارزقنا رزقًا يغنينا عن من سواك.",
    "اللهم سخر لنا أسباب الرزق وبارك لنا فيها."
  ],
  study: [
    "اللهم لا سهل إلا ما جعلته سهلاً.",
    "اللهم ارزقني الفهم والحفظ والتركيز.",
    "اللهم اجعل الامتحان بردًا وسلامًا علي.",
    "اللهم افتح علي فتوح العارفين.",
    "اللهم اجعلني من الناجحين المتميزين."
  ],
  rain: [
    "اللهم اسقنا غيثًا نافعًا غير ضار.",
    "اللهم اسقنا سقيا رحمة لا سقيا عذاب.",
    "اللهم اجعلها أمطار خير وبركة.",
    "اللهم اسق قلوبنا كما سقيت أرضك.",
    "اللهم اسقنا من فيض رحمتك وكرمك."
  ],
  death: [  // <-- تم تعديله ليتطابق مع value="death" في HTML
    "اللهم اغفر له وارحمه وعافه واعف عنه.",
    "اللهم اجعل قبره روضة من رياض الجنة.",
    "اللهم نور له قبره ووسع مدخله.",
    "اللهم اجعل الجنة داره ومستقره.",
    "اللهم آنسه في وحدته وارحمه برحمتك."
  ],
  morning: [
    "اللهم بك أصبحنا وبك نحيا.",
    "اللهم اجعل يومنا هذا خيرًا وبركة.",
    "اللهم إني أسألك خير هذا اليوم ونوره.",
    "أصبحنا وأصبح الملك لله وحده.",
    "رضيت بالله ربًا وبالإسلام دينًا وبمحمد ﷺ نبيًا."
  ],
  istikhara: [
    "اللهم إني أستخيرك بعلمك وأستقدرك بقدرتك.",
    "اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري فاقدره لي.",
    "وإن كنت تعلم أنه شر لي فاصرفه عني واصرفني عنه.",
    "واقدر لي الخير حيث كان ثم رضني به."
  ]
};

let currentCategory = 'rizq';
let currentIndex = 0;

function loadDuaa() {
  currentCategory = document.getElementById('category').value;
  currentIndex = 0;
  updateDuaa();
}

function updateDuaa() {
  const text = duaas[currentCategory][currentIndex];
  document.getElementById('duaaText').textContent = text;
}

function nextDuaa() {
  currentIndex = (currentIndex + 1) % duaas[currentCategory].length;
  updateDuaa();
}

function prevDuaa() {
  currentIndex = (currentIndex - 1 + duaas[currentCategory].length) % duaas[currentCategory].length;
  updateDuaa();
}

// المسبحة
let count = 0;

function incrementCount() {
  count++;
  document.getElementById('count').textContent = count;
}

function resetCount() {
  count = 0;
  document.getElementById('count').textContent = count;
}

// حساب الزكاة
function calculateZakah() {
  const money = parseFloat(document.getElementById("money").value);
  if (!isNaN(money) && money >= 0) {
    const zakah = money * 0.025;
    document.getElementById("zakahResult").textContent = `قيمة الزكاة: ${zakah.toFixed(2)} جنيه`;
  } else {
    document.getElementById("zakahResult").textContent = "الرجاء إدخال مبلغ صالح.";
  }
}

// التقويم الهجري والميلادي
function loadDates() {
  const today = new Date();

  const gregorianFormatter = new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const gregorianDate = gregorianFormatter.format(today);
  document.getElementById("gregorianDate").textContent = `التاريخ الميلادي: ${gregorianDate}`;

  const hijriFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const hijriDate = hijriFormatter.format(today);
  document.getElementById("hijriDate").textContent = `التاريخ الهجري: ${hijriDate}`;
}

// تشغيل عند تحميل الصفحة
window.onload = loadDates;

