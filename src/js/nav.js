// // // document.addEventListener("DOMContentLoaded", function () {
// // //   let navLinks = document.querySelector(".nav-links");
// // //   let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// // //   let menuCloseBtn = document.querySelector(".nav-links .bx-x");

// // //   menuOpenBtn.onclick = function () {
// // //     navLinks.style.left = "0";
// // //   };

// // //   menuCloseBtn.onclick = function () {
// // //     navLinks.style.left = "-100%";
// // //   };
// // //   document.querySelectorAll(".menu-toggle").forEach(function (toggle) {
// // //   toggle.addEventListener("click", function (e) {
// // //     e.preventDefault(); // əgər a href="#", səhifəni yuxarı atmaması üçün
// // //     let parentLi = toggle.closest("li");
// // //     if (parentLi && parentLi.querySelector(".sub-menu")) {
// // //       parentLi.querySelector(".sub-menu").classList.toggle("open");
// // //     }
// // //   });
// // // });
// // // document.querySelectorAll('.menu-toggle').forEach(function(toggle) {
// // //     toggle.addEventListener('click', function() {
// // //         this.classList.toggle('open');
// // //     });
// // // });
// // // });
// // document.addEventListener("DOMContentLoaded", function () {
// //   let navLinks = document.querySelector(".nav-links");
// //   let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// //   let menuCloseBtn = document.querySelector(".nav-links .bx-x");

// //   menuOpenBtn.onclick = function () {
// //     navLinks.style.left = "0";
// //   };

// //   menuCloseBtn.onclick = function () {
// //     navLinks.style.left = "-100%";
// //   };

// //   // menyular və ikonlar üçün klik event
// //   document.querySelectorAll(".menu-toggle").forEach(function (toggle) {
// //     toggle.addEventListener("click", function (e) {
// //       e.preventDefault();
// //       let parentLi = toggle.closest("li");
// //       let submenu = parentLi.querySelector(".sub-menu");
// //       let icon = toggle.querySelector(".rotate-icon");

// //       // menyunu aç/bağla
// //       submenu.classList.toggle("open");

// //       // iconu fırlat
// //       icon.classList.toggle("rotated");
// //     });
// //   });
// // });



// document.addEventListener("DOMContentLoaded", function () {
//   let navLinks = document.querySelector(".nav-links");
//   let menuOpenBtn = document.querySelector(".navbar .bx-menu");
//   let menuCloseBtn = document.querySelector(".nav-links .bx-x");

//   menuOpenBtn.onclick = function () {
//     navLinks.style.left = "0";
//   };

//   menuCloseBtn.onclick = function () {
//     navLinks.style.left = "-100%";
//   };

//   // Bütün menu-toggle-lar üzrə klik event
//   const toggles = document.querySelectorAll(".menu-toggle");

//   toggles.forEach(function (toggle) {
//     toggle.addEventListener("click", function (e) {
//       e.preventDefault();

//       const currentLi = toggle.closest("li");
//       const currentSubmenu = currentLi.querySelector(".sub-menu");
//       const currentIcon = toggle.querySelector(".rotate-icon");

//       // 1. Bütün digər açıq menyuları və ikonları bağla
//       document.querySelectorAll(".sub-menu.open").forEach(function (submenu) {
//         if (submenu !== currentSubmenu) {
//           submenu.classList.remove("open");
//         }
//       });

//       document.querySelectorAll(".rotate-icon.rotated").forEach(function (icon) {
//         if (icon !== currentIcon) {
//           icon.classList.remove("rotated");
//         }
//       });

//       // 2. Cari menyunu aç/bağla (toggle)
//       currentSubmenu.classList.toggle("open");
//       currentIcon.classList.toggle("rotated");
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");

  // ✅ MƏNZİLİ: Bu funksiyanı əlavə edirsən
  function closeMobileMenu() {
    navLinks.style.left = "-100%";

    // Bütün açıq sub-menuları bağla
    document.querySelectorAll(".sub-menu.open").forEach(function (submenu) {
      submenu.classList.remove("open");
    });

    // Bütün fırlanmış ikonları sıfırla
    document.querySelectorAll(".rotate-icon.rotated").forEach(function (icon) {
      icon.classList.remove("rotated");
    });
  }

  // Menyu açma
  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  };

  // ✅ Menyu bağlama (və hər şeyi sıfırlama)
  menuCloseBtn.onclick = closeMobileMenu;

  // Sub-menular üçün klik idarəsi
  const toggles = document.querySelectorAll(".menu-toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const currentLi = toggle.closest("li");
      const currentSubmenu = currentLi.querySelector(".sub-menu");
      const currentIcon = toggle.querySelector(".rotate-icon");

      // Digər açıq menyuları bağla
      document.querySelectorAll(".sub-menu.open").forEach(function (submenu) {
        if (submenu !== currentSubmenu) {
          submenu.classList.remove("open");
        }
      });

      // Digər fırlanmış ikonları sıfırla
      document.querySelectorAll(".rotate-icon.rotated").forEach(function (icon) {
        if (icon !== currentIcon) {
          icon.classList.remove("rotated");
        }
      });

      // Hazırkı menyunu aç/bağla
      currentSubmenu.classList.toggle("open");
      currentIcon.classList.toggle("rotated");


      
    });
  });
});


document.querySelector(".search-submit").addEventListener("click", function () {
  const query = document.querySelector(".search-expand").value.trim();
  if (query) {
    // Axtarışı həyata keçir
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});
