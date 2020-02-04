// menu -mobile

jQuery(document).ready(function () {
  jQuery('.burger').click(function () {
    jQuery('.burger,.mobile-menu,.header__content').toggleClass('active');
    jQuery('html,body').toggleClass('lock');
  })
})

// modal

// function modal() {

//   const openModalButtons = document.querySelectorAll('[data-modal-target]');
//   const closeModalButtons = document.querySelectorAll('[data-close-button]');
//   const overlay = document.getElementById('overlay');

//   openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = document.querySelector(button.dataset.modalTarget)
//       openModal(modal)
//     })
//   })

//   overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//       closeModal(modal)
//     })
//   })

//   closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = button.closest('.modal')
//       closeModal(modal)
//     })
//   })

//   function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
//   }

//   function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
//   }
// }
// modal();

// paralax-effect

function Parallax(options) {
  options = options || {};
  this.nameSpaces = {
    wrapper: options.wrapper || 'body',
    layers: options.layers || '.parallax-layer',
    deep: options.deep || 'data-parallax-deep'
  };
  this.init = function () {
    let self = this,
      parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
    for (let i = 0; i < parallaxWrappers.length; i++) {
      (function (i) {
        parallaxWrappers[i].addEventListener('mousemove', function (e) {
          let x = e.clientX,
            y = e.clientY,
            layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
          for (let j = 0; j < layers.length; j++) {
            (function (j) {
              let deep = layers[j].getAttribute(self.nameSpaces.deep),
                disallow = layers[j].getAttribute('data-parallax-disallow'),
                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
              if (disallow && disallow === 'both') return;
              layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);
          }
        })
      })(i);
    }
  };
  this.init();
  return this;
}

window.addEventListener('load', function () {
  new Parallax();
});

// hidden-show block на главной

jQuery(document).ready(function () {
  jQuery('.serviceType-navigation ul li').click(function () {
    jQuery('.try').addClass('active')
  })
})


// анимация плашека на главной
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 0) {
    jQuery(".movie__btn36 button::before").css("width", "36%");
  }
});

// спрятать-показать sidebar-menu в категориях

// jQuery(document).ready(function () {

//   jQuery('').click(function(){

//   })
// })
if ($(window).width() > 768) {
  // Тут код для больших разрешений,
  //с шириной окна с сайтом больше 768 писелей
} else {
  // Тут код для маленьких экранов
  $(".cat-item").hide();

  $(".sidebar__title").click(
    function () {
      $(".cat-item").toggle('slow')
    }
  );
  
}