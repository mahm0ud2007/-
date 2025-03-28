// التنقل بين الأقسام
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // إخفاء كل الأقسام
        document.querySelectorAll('.content').forEach(section => section.classList.add('hidden'));

        // معرفة القسم اللي المستخدم اختاره
        const sectionId = link.id.replace('-btn', '-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});

// بيانات الأدعية
const duas = {
    "for-deceased": ["اللهم اغفر له وارحمه", "اللهم اجعل قبره روضة من رياض الجنة"],
    "for-study": ["اللهم افتح علينا فتوح العارفين", "اللهم زدني علمًا"],
    "for-money": ["اللهم ارزقني من حيث لا أحتسب", "يا رب وسع رزقي"],
    "for-rain": ["اللهم اسقنا غيثًا مغيثًا", "اللهم أنزل علينا من بركاتك"],
    "istikharah": ["اللهم إن كنت تعلم أن هذا خير لي", "اللهم اختر لي ولا تخيرني"]
};

// عرض الدعاء عند اختيار الفئة
document.querySelectorAll(".dua-category").forEach(category => {
    category.addEventListener("click", () => {
        const selectedCategory = category.getAttribute("data-category");
        const duaText = document.getElementById("dua-text");
        document.getElementById("dua-section").classList.remove("hidden");
        duaText.textContent = duas[selectedCategory][Math.floor(Math.random() * duas[selectedCategory].length)];
    });
});

// السبحة
let count = 0;

document.getElementById("count-btn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});

document.getElementById("reset-btn").addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").textContent = count;
});
