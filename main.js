document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("home-btn");
    const duasBtn = document.getElementById("duas-btn");
    const tasbeehBtn = document.getElementById("tasbeeh-btn");
    const duasSection = document.getElementById("duas-section");
    const tasbeehSection = document.getElementById("tasbeeh-section");
    const duaText = document.getElementById("dua-text");
    const prevDua = document.getElementById("prev-dua");
    const nextDua = document.getElementById("next-dua");

    const increaseBtn = document.getElementById("increase-btn");
    const resetBtn = document.getElementById("reset-btn");
    const counterDisplay = document.getElementById("counter");

    let counter = 0;
    let duaIndex = 0;

    const duas = [
        ["اللهم اغفر له وارحمه وعافه واعف عنه وأكرم نزله ووسع مدخله، واغسله بالماء والثلج والبرد.",
         "اللهم اجعل قبره روضة من رياض الجنة ولا تجعله حفرة من حفر النار.",
         "اللهم اجعل قبره آمناً ووسعه مد بصره."],

        ["اللهم أسكنه فسيح جناتك وارزق أهله الصبر والسلوان.",
         "اللهم أغفر له وارحمه وعافه واعف عنه وأكرم نزله.",
         "اللهم اجعل قبره روضة من رياض الجنة."],

        ["اللهم اجعل قبره آمناً ووسعه مد بصره.",
         "اللهم أجره وعافه واعف عنه وأكرم نزله.",
         "اللهم أسكنه فسيح جناتك وأعذه من عذاب القبر ومن عذاب النار."],

        ["اللهم أبدله داراً خيراً من داره وأهلاً خيراً من أهله.",
         "اللهم اجعل قبره روضة من رياض الجنة ولا تجعله حفرة من حفر النار.",
         "اللهم إنه في ذمتك وحبل جوارك فقه فتنه القبر وعذاب النار."],

        ["اللهم إنه جاء ببابك واناخ بجنابك فجد عليه بعفوك واكرامك.",
         "اللهم ان رحمتك وسعت كل شيء فارحمه رحمه تطمئن بها نفسه وتقر بها عينه.",
         "اللهم اجعل فقيدي وجمع موتى المسلمين في جنات الخلد منعمين مترفين."],

        ["اللهم إنه كان من عبادك الذين يشهدون بوحدانيتك فأحسن نزله.",
         "اللهم أعفو عنه واغفر له واجعله من عبادك الذين لا خوف عليهم ولا هم يحزنون.",
         "اللهم اجعلهم في جناتك ينعمون وتحت عرشك يسجدون وبنور وجهك يكرمون."],

        ["اللهم وسع عليهم في قبورهم واجمعنا بهم في جنتك.",
         "اللهم ارحم روحا كانت كالجنة على الأرض واجعلها ممن يقال لهم هذه الجنة التي كنتم بها توعدون.",
         "اللهم اغفر لموتانا وتجاوز عما تعلم عنهم فإنهم ضيوفك وأنت أرحم الراحمين."],

        ["اللهم وسع مدخلهم واغسلهم بالماء والبرد والثلج ونقهم من الذنوب والخطايا كما ينقى الثوب الأبيض من الدنس.",
         "اللهم اظلهم بظل عرشك يوم لا ظل إلا ظلك.",
         "اللهم مد لهم في قبورهم مد بصرهم واجعلهم مستبشرين برحمتك."]
    ];

    function showDua() {
        duaText.innerText = duas[duaIndex].join("\n\n");
    }

    function showOnly(section) {
        document.querySelectorAll(".content").forEach(sec => sec.classList.add("hidden"));
        section.classList.remove("hidden");
    }

    if (nextDua) {
        nextDua.addEventListener("click", function() {
            duaIndex = (duaIndex + 1) % duas.length;
            showDua();
        });
    }

    if (prevDua) {
        prevDua.addEventListener("click", function() {
            duaIndex = (duaIndex - 1 + duas.length) % duas.length;
            showDua();
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", function() {
            document.querySelectorAll(".content").forEach(sec => sec.classList.remove("hidden"));
            showDua();
        });
    }

    if (duasBtn) {
        duasBtn.addEventListener("click", function() {
            showOnly(duasSection);
            showDua();
        });
    }

    if (tasbeehBtn) {
        tasbeehBtn.addEventListener("click", function() {
            showOnly(tasbeehSection);
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener("click", function() {
            counter++;
            counterDisplay.innerText = counter;
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            counter = 0;
            counterDisplay.innerText = counter;
        });
    }

    showDua();
});