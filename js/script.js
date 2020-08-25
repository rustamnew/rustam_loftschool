//Мобильное меню

const menuButton = document.querySelector('#menuButton');
const menuCloseButton =document.querySelector('#menuCloseButton');
const menuMobile = document.querySelector('.menu-mobile');

menuButton.addEventListener('click', function() {
    menuMobile.style.display = "flex";
});

menuCloseButton.addEventListener('click', function() {
    menuMobile.style.display = "none";
});

const menuLink = document.querySelectorAll('.menu-mobile__item');
menuLink.forEach(e => e.addEventListener('click', function() {
    menuMobile.style.display = "none";
}));




//Команда аккордеон
const openCloseItem = item => {
    const container = item.closest('.team__item');
    const description = container.find('.team__description');
    const descriptionBlock = description.find('.team__description-block');
    const reqHeight = descriptionBlock.height();

    const name = container.find('.team__name');


    if (description.height() == 0) {
        description.height(reqHeight);
        name.addClass('team__name-active')
    } else {
        description.height(0);
        name.removeClass('team__name-active')
    }
}

const closeAll = container => {
    const items = container.find('.team__description');
    const names = container.find('.team__name');

    items.height(0);
    names.removeClass('team__name-active');
}


$('.team__item').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');

    

    closeAll(container);
    openCloseItem($this);
})

// слайдер
let viewportWidth = window.innerWidth;
console.log(viewportWidth);


if (viewportWidth <= 768) {
    var slideWidth = viewportWidth - 80;
}

if (viewportWidth <= 480) {
    var slideWidth = 470
}


console.log(slideWidth);




$('.slider__list').bxSlider({
    pager: false,
    adaptiveHeight: true,
    slideWidth: slideWidth
});



//слайдшоу
const findBlockByAlias = (alias) => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-linked-width') == alias;
    });
}

$('.reviews__selector-item-link').click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlockByAlias(target);
    const currentItem = $this.closest('.reviews__selector-item');

    itemToShow.addClass('active-review').siblings().removeClass('active-review');
    currentItem.addClass('active-avatar').siblings().removeClass('active-avatar');

})

//модальное окно
$('.form').submit( e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $('#modal');
    const content = modal.find('.modal__content');



    [name, phone, comment,to].forEach(field => {
        field.removeClass('form__input-error');
        if (field.val().trim() == "") {
            field.addClass('form__input-error');
        }
    });

    const errorFields = $('.form__input-error');
    if (errorFields.length == 0) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: 'post',
            data: {
                name:name.val(),
                phone:phone.val(),
                comment:comment.val(),
                to:to.val()
            },

            success: data => {
                content.text(data.message)

                $.fancybox.open({
                    src: '#modal',
                    type: 'inline',
                })
            },

            error: data => {
                const message = data.responseJSON.message;
                content.text(message)

                $.fancybox.open({
                    src: '#modal',
                    type: 'inline',
                })
            },
        })
    }

    

    
})

$('.submit-button').click( e => {
    e.preventDefault();

    $.fancybox.close();
})



