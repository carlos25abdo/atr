// المتغير الذي يحفظ رقم الشريحة الحالية
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// دالة لعرض الشريحة المطلوبة
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// التنقل عن طريق لوحة المفاتيح
document.addEventListener('keydown', (e) => {
    // السهم الأيسر أو الأسفل أو المسطرة للانتقال للشريحة التالية (لأننا في اللغة العربية RTL)
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') { 
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    } 
    // السهم الأيمن أو الأعلى للعودة للشريحة السابقة
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }
});

// التنقل عن طريق النقر بالماوس على الشاشة (للتسهيل)
document.addEventListener('click', (e) => {
    // النقر بالماوس ينتقل للشريحة التالية دائماً
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

console.log("نظام التنقل يعمل بنجاح! يمكنك استخدام الأسهم، المسطرة، أو النقر بالماوس للتنقل.");
