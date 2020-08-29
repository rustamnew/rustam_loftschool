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


if (viewportWidth <= 768) {
    var slideWidth = viewportWidth - 80;
}

if (viewportWidth <= 480) {
    var slideWidth = viewportWidth - 10;
}


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

        const fields = $('.form__input');
        fields.val('');
    }

})

$('.submit-button').click( e => {
    e.preventDefault();

    $.fancybox.close();
})



//горизонтальный аккордеон

$('.color__title').click( e => {

    const item = $(e.currentTarget);
    
    const description = item.siblings('.color__description');

    const items = $('.color__description');
    items.removeClass('active-description');

    if (description.width() == 0) {
        description.addClass('active-description');
    } else if (description.width > 0) {
        description.removeClass('.active-description');
    }



    console.log(description.width())
})


$('.color__close-button').click( e => {
    const item = $(e.currentTarget);
    const description = item.closest('.color__description');

    description.removeClass('active-description');
})

/*
const windowWidth = $(window).width();
console.log(windowWidth)

const mesureWidth = item => {
    const screenWidth = $(window).width();
    
    const container = item.closest('.colors__list');
    console.log(container);

    const titleBlocks = container.find('.color__title');
    console.log(titleBlocks);

    const titleWidth = titleBlocks.width() * titleBlocks.length;
    console.log(titleWidth);

    const reqWidth = screenWidth - 3 * 104;
    const reqWidthString = reqWidth.toString() +'px';
    return reqWidthString
}
*/
/*
if (windowWidth > 768) {
    $('.color__title').click( e => {

        const item = $(e.currentTarget);
        
        const description = item.siblings('.color__description');
    
        const items = $('.color__description');
        items.removeClass('active-description');
    
        if (description.width() == 0) {
            description.addClass('active-description');
        } else if (description.width > 0) {
            description.removeClass('.active-description');
        }
    
    
    
        console.log(description.width())
    })
    
    
    $('.color__close-button').click( e => {
        const item = $(e.currentTarget);
        const description = item.closest('.color__description');
    
        description.removeClass('active-description');
    })
} else if (windowWidth <= 768) {
    $('.color__title').click( e => {

        const item = $(e.currentTarget);
        console.log(mesureWidth(item))
        const description = item.siblings('.color__description');
        console.log(description)
    
        const items = $('.color__description');
        items.removeClass('active-description');
    
        console.log(description.width())
        if (description.width() == 0) {
            console.log('desc width = 0')
            description.addClass('active-description');
            
            description[0].style.width = mesureWidth();
            
        } else {
            console.log('desc width > 0')
            description.width(0)
            description.removeClass('.active-description');
            description[0].style.width = '0px'
        }
        
    
        
    })
    
    
    $('.color__close-button').click( e => {
        const item = $(e.currentTarget);
        const description = item.closest('.color__description');
    
        description.removeClass('active-description');
    })
}
/*
const openItem = item => {
    const hiddenContent = item.find('.color__description');
    const reqWidth = mesureWidth()

    hiddenContent.width(reqWidth);
    hiddenContent.addClass('active-description');
}

const closeItems = container => {
    console.log('close');

    const items = container.find('.color__description')
    const content = container.find('.color__description');

    items.removeClass('active-description')
    content.width(0)
}

$('.color__title').click( e => {
    const $this = $(e.currentTarget);
    const item = $this.closest('.colors__item');
    const desc = $this.siblings('.color__description');
    const itemOpened = desc.hasClass('active-description');
    console.log(itemOpened);

    const container = $this.closest('.colors__list');

    if (itemOpened) {
        console.log('itemOpenedTrue');
        closeItems(container)
    } else {
        openItem(item)
    }
    
    openItem(item)
});

const mesureWidth = item => {
    /*const screenWidth = $(window).width();
    
    const container = item.closest('.colors__list');
    console.log();

    const titleBlocks = container.find('.colors__item');
    console.log();

    const titleWidth = titleBlocks.width() * titleBlocks.length;
    console.log();

    console.log(titleWidth);
   
    return 500;
}
*/



//onepage scroll 

const sections = $('.section');
const display = $('.maincontent');


const performTransition = sectionEq => {
    const position = sectionEq * -100;

    display.css({
        transform: `translateY(${position}%)`
    })
}

var transitionNumber = 0;
var inScroll = false;

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;

    if (inScroll == false) {
        inScroll = true;

        if (transitionNumber > 0) {
            if (deltaY < 0) {
                transitionNumber--;
                performTransition(transitionNumber);
            }
        }
    
        if (transitionNumber < 8) {
            if (deltaY > 0) {
                transitionNumber++;
                performTransition(transitionNumber);
            }
        }

        setTimeout(() => {
            inScroll = false;
        }, 90);
    }

})

$(window).on('keydown', e=> {
    
})

//сделать через prev() next()







//Яндекс карты

let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
    center: [55.742049, 37.584159],
    zoom: 15,
    controls: [],
    });

    const coords = [
        [55.743364, 37.578186],
        [55.748689, 37.588957],
        [55.743460, 37.588440],
        [55.750330, 37.582549],
        
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, 52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);


