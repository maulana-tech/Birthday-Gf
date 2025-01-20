document.addEventListener("DOMContentLoaded", () => {
      const mainContent = document.getElementById("main-content");

      const cardsData = [
        {
          img: "/img/Image (10).jpg",
          title: "Chapter 1",
          description:
            "Senyumanmu yang begitu cantik selalu mampu membuatku merasa bahwa segala hal dalam hidup ini baik-baik saja, dan aku ingin merasakan itu selamanya bersamamu.",
        },
        {
          img: "/img/Image (11).jpg",
          title: "Chapter 2",
          description:
            "Di balik kebaikan hatimu yang begitu tulus, aku menemukan sebuah senyuman yang begitu indah, yang terus menjadi alasan bagiku untuk mencintaimu tanpa batas waktu, selamanya.",
        },
        {
          img: "/img/Image (12).jpg",
          title: "Chapter 3",
          description:
            "Kamu adalah perpaduan sempurna antara kecantikan yang mempesona, kebaikan yang tulus, dan senyuman yang selalu membuatku percaya bahwa kebahagiaan kita akan bertahan selamanya.",
        },
        {
          img: "/img/Image (13).jpg",
          title: "Chapter 4",
          description:
            "Aku jatuh cinta tidak hanya pada kecantikanmu yang luar biasa, tetapi juga pada kebaikanmu yang tanpa akhir dan senyumanmu yang seolah berkata bahwa kita akan tetap bersama selamanya.",
        },
        {
          img: "/img/Image (14).jpg",
          title: "Chapter 5",
          description:
            "Dalam setiap senyuman yang kamu berikan, aku menemukan keindahan yang luar biasa, kebaikan yang tulus, dan keyakinan bahwa aku ingin bersamamu selamanya.",
        },
        {
          img: "/img/Image (8).jpg",
          title: "Chapter 6",
          description:
            "Bersama dengan kebaikan hatimu yang tak pernah habis, senyuman indahmu selalu memberikan keyakinan bahwa aku ingin menjalani hidup ini denganmu untuk selamanya.",
        },
        {
          img: "/img/Image (7).jpg",
          title: "Chapter 7",
          description:
            "Senyumanmu yang begitu cantik selalu menjadi cahaya dalam hidupku, sedangkan kebaikanmu adalah kehangatan yang membuatku ingin menjaga cinta kita selamanya.",
        },
      ];

      function createCard({ img, title, description }) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${img}" alt="${title}" loading="lazy">
          <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
          </div>
        `;
        const image = card.querySelector("img");
        image.addEventListener("click", () => openModal(img, title));

        return card;
      }

      const modal = document.getElementById("image-modal");
      const modalImg = modal.querySelector("#img01");
      const captionText = modal.querySelector("#caption");
      const closeBtn = modal.querySelector(".close-btn");

      function openModal(imgSrc, title) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerText = title;
        modal.style.animation = "fadeIn 0.5s";
      }

      function closeModal() {
        modal.style.animation = "fadeOut 0.5s";
        setTimeout(() => {
          modal.style.display = "none";
        }, 500);
      }

      closeBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });


      cardsData.forEach((data) => {
        const card = createCard(data);
        mainContent.appendChild(card);
      });
    });


  // Render semua kartu
  cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    mainContent.appendChild(card);
    setTimeout(() => {
      card.classList.remove("hidden");
    }, 200); // Menambahkan animasi delay
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
  }
