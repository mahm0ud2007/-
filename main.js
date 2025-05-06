// التنقل بين الأقسام
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const duaas = {
    rizq: [
      "اللهم ارزقني رزقًا حلالاً طيبًا مباركًا فيه.",
      "اللهم افتح لي أبواب رزقك من حيث لا أحتسب.",
      "اللهم اجعل رزقي واسعًا وعملي مباركًا.",
      "اللهم اسقنا مما سقيت به أرضك وتربتك.",
      "اللهم اسقنا مما سقيت به سماءك وسحابك."
    ],
    study: [
      "اللهم اجعل القرآن ربيع قلبي، ونور صدري.",
      "اللهم افتح لي أبواب الفهم والحكمة.",
      "اللهم لا سهل إلا ما جعلته سهلاً، وأنت تجعل الحزن إذا شئت سهلاً.",
      "اللهم ذكرني ما نسيت، وعلمني ما جهلت.",
      "اللهم وفقني في دراستي وبارك لي في وقتي."
    ],
    rain: [
      "اللهم اسقنا غيثًا مغيثًا نافعًا غير ضار.",
      "اللهم اسق عبادك وبهائمك وانشر رحمتك وأحيي بلدك الميت.",
      "اللهم اجعلها سقيا رحمة لا سقيا عذاب.",
      "اللهم اسقنا مما سقيت به أوليائك وأصفيائك.",
      "اللهم اسقنا مما سقيت به نباتاتك وأشجارك."
    ],
    deceased: [
      "اللهم ارحم موتانا وموتى المسلمين.",
      "اللهم اجعل قبره روضة من رياض الجنة.",
      "اللهم آنس وحدته، ونور قبره.",
      "اللهم اغفر له وارحمه وعافه واعف عنه.",
      "اللهم اجعل مثواه الجنة."
    ],
    evening: [
      "أمسينا وأمسى الملك لله، والحمد لله.",
      "اللهم بك أمسينا وبك نحيا وبك نموت وإليك المصير.",
      "اللهم ما أمسى بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك.",
      "اللهم احفظنا من بين أيدينا ومن خلفنا.",
      "اللهم اجعل هذه الليلة ليلة خير ورحمة ومغفرة."
    ],
    istikhara: [
      "اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم.",
      "اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري، فاقدره لي ويسره لي، ثم بارك لي فيه.",
      "اللهم وإن كنت تعلم أن هذا الأمر شر لي في ديني ومعاشي وعاقبة أمري، فاصرفه عني واصرفني عنه، واقدر لي الخير حيث كان، ثم رضني به."
    ]
  };
  
  let currentIndex = 0;
  let currentCategory = 'rizq';
  
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
  
  // مسبحة
  let count = 0;
  
  function incrementCount() {
    count++;
    document.getElementById('count').textContent = count;
  }
  
  function resetCount() {
    count = 0;
    document.getElementById('count').textContent = count;
  }
  // التاريخ الهجري باستخدام التاريخ الميلادي الحالي
function getHijriDate() {
  const today = new Date().toLocaleDateString('ar-SA-u-ca-islamic', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById("hijri-date").textContent = "التاريخ الهجري: " + today;
}

// تنفيذ الدالة بعد تحميل الصفحة
window.onload = function() {
  showSection('adhkar'); // عرض قسم افتراضي
  getHijriDate(); // عرض التاريخ الهجري
};
  
  // زكاة
  function calculateZakah() {
    const money = parseFloat(document.getElementById("money").value);
    const goldPrice = 3000; // سعر جرام الذهب بالجنيه (غيّره حسب السعر الحالي)
    const nisab = goldPrice * 85;
  
    if (!isNaN(money) && money >= 0) {
      if (money >= nisab) {
        const zakah = money * 0.025;
        document.getElementById("zakahResult").textContent =
          `قيمة الزكاة: ${zakah.toFixed(2)} جنيه (لأن المبلغ بلغ النصاب وهو ${nisab.toFixed(2)} جنيه)`;
      } else {
        document.getElementById("zakahResult").textContent =
          `لا زكاة على هذا المبلغ لأنه أقل من النصاب (${nisab.toFixed(2)} جنيه).`;
      }
    } else {
      document.getElementById("zakahResult").textContent = "الرجاء إدخال مبلغ صالح.";
    }
  }
  
  
  // عرض الأقسام
  function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  }
