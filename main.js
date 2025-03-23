
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.content').forEach(section => section.classList.add('hidden'));
        const sectionId = link.id.replace('-btn', '-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});


const duas = {
    "المتوفى": "اللهم اغفر له وارحمه وعافه واعف عنه.",
   
    "المذاكرة": "اللهم افتح عليّ فتوح العارفين.",
    "المطر": "اللهم صيبًا نافعًا.",
    "الاستخارة": "اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي... فاقدره لي."
};

function showDua(type) {
    document.getElementById('dua-text').innerText = duas[type];
}


let count = 0;
document.getElementById("increase-btn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});
document.getElementById("reset-btn").addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").textContent = count;
});

