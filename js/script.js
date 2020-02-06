// menu -mobile

jQuery(document).ready(function () {
  jQuery('.burger').click(function () {
    jQuery('.burger,.mobile-menu,.header__content').toggleClass('active');
    jQuery('html,body').toggleClass('lock');
  })
})

// modal

function modal() {

  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }
}


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


// анимация плашка на главной

window.onscroll = () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let btn36 = document.querySelector('.movie__btn36');
  let btn20 = document.querySelector('.movie__btn20');
  let btn31 = document.querySelector('.movie__btn31');
  let btn171 = document.querySelector('.movie__btn171');
  let btn65 = document.querySelector('.movie__btn65');
  let btn38 = document.querySelector('.movie__btn38');
  let btn28 = document.querySelector('.movie__btn28');
  let btn23 = document.querySelector('.movie__btn23');

  if (scroll > 4000) {
    btn36.classList.add('movie__btn36--filled');
  }
  if (scroll > 4000) {
    btn20.classList.add('movie__btn20--filled');
  }
  if (scroll > 4600) {
    btn31.classList.add('movie__btn31--filled');
  }
  if (scroll > 4600) {
    btn171.classList.add('movie__btn171--filled');
  }
  if (scroll > 5200) {
    btn65.classList.add('movie__btn65--filled');
  }
  if (scroll > 5200) {
    btn38.classList.add('movie__btn38--filled');
  }
  if (scroll > 5800) {
    btn28.classList.add('movie__btn28--filled');
  }
  if (scroll > 5800) {
    btn23.classList.add('movie__btn23--filled');
  }
}

// спрятать-показать sidebar-menu в категориях


if (jQuery(window).width() > 480) {
  // Тут код для больших разрешений,
  //с шириной окна с сайтом больше 768 писелей
} else {
  // Тут код для маленьких экранов
  jQuery(".cat-item").hide();

  jQuery(".sidebar__title").click(
    function () {
      jQuery(".cat-item").toggle('slow')
    }
  );
}

// активная ссылка меню

let btnContainer = document.querySelector(".menu-items");

let btns = btnContainer.querySelector(".menu-items li");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// delivery-page
jQuery(".payment_method_bacs,.item__hide").hide();

jQuery(".payment_methods").click(
  function () {
    jQuery(".payment_method_bacs").toggle('slow')
  }
);

jQuery("#shipping_method").click(
  function () {
    jQuery(".item__hide").toggle('slow')
  }
);