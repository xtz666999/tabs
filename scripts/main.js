window.onload = function () {

    'use strict';


    // блок кнопок
    let tabContainer = document.querySelector('.tab-container');

    // кнопки меню
    let tabs = document.querySelectorAll('.tab-btn');

    // блок основного контента
    let cont = document.querySelector('.content');

    // контентные блоки
    let blocks = document.querySelectorAll('.item');

    // скрываем все блоки кроме первого
    function hideTabs() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.add('hide');
        }
        blocks[0].classList.remove('hide');
        blocks[0].classList.add('show');
    }

    function hidden() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.add('hide');
        }
    }

    hideTabs();

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {

            hidden();

            if (blocks[i].classList.contains('hide')) {
                blocks[i].classList.remove('hide');
                blocks[i].classList.add('show');    
            }
        });
    }



    // tabs.forEach(function(item) {
    //     item.addEventListener('click', function(e) {

    //     });
    // });















};