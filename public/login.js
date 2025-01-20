document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const correctDate = "2024-02-27"; // Format YYYY-MM-DD
    const inputDate = document.getElementById('jadian-date').value;
  
    if (inputDate === correctDate) {
        
        window.location.href = "/public/index.html";
    } else {
        
        alert("Kamu lupaa yaaa!");
    }
  });

  let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const sliderInner = document.querySelector('.slider-inner');
        const totalSlides = slides.length;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            sliderInner.style.transform = `translateY(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 3000);

        sliderInner.addEventListener('transitionend', () => {
            if (currentIndex >= totalSlides) {
                sliderInner.style.transition = 'none';
                currentIndex = 0;
                sliderInner.style.transform = `translateY(0)`;
                setTimeout(() => {
                    sliderInner.style.transition = 'transform 0.5s ease-in-out';
                }, 0);
            }
        });