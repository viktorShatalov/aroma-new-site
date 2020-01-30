// menu -mobile
$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger,.mobile-menu').toggleClass('active');
    $('body').toggleClass('lock');
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
modal();

// card ptoduct description TABS

$('.btn').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.specifications__block[data-tab="' + id + '"]');

  $('.btn.active').removeClass('active');
  $(this).addClass('active');

  $('.specifications__block.active').removeClass('active');
  content.addClass('active');
});

// сортировка по цене на странице category

$('#category__sortBy').ready(function () {
  $("#down-price").hide();

  $('#img-sort').on('click', function () {
    $("#down-price").toggle('slow');
  });
});

// categoryPage filtr

$('.sidebar-filtr').ready(function () {
  $(".filtr-item__sub").hide();

  $('.filtr-item').click(function () {
    $(this).children(".filtr-item__sub").stop(true, true).toggle('slow');
  });
});

// счетчик количества товара cart-page

// function addHandlers(count) {

//   let minus = count.querySelector("#btnMinus");
//   let number = count.querySelector("#product-input");
//   let plus = count.querySelector("#btnPlus");

//   plus.addEventListener("click", function () {
//     +number.value++;
//     if (number.value >= 1) {
//       minus.disabled = false;
//     }
//   });

//   minus.addEventListener("click", function () {
//     +number.value--;
//     if (number.value == 1) {
//       minus.disabled = true;
//     }
//   });
// }

// let counts = document.querySelectorAll(".order-product__count");
// counts.forEach(addHandlers);