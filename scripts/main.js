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

    // скрываем все блоки кроме первого и подсвечиваем 1 пункт меню при загрузке страницы
    function hideTabs() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.add('hide');
        }
        blocks[0].classList.remove('hide');
        blocks[0].classList.add('show');

        tabs[0].classList.add('btn-color');
    }

    function hidden() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.add('hide');
        }

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('btn-color');
        }
    }

    hideTabs();

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {

            hidden();
            tabs[i].classList.add('btn-color');

            if (blocks[i].classList.contains('hide')) {
                blocks[i].classList.remove('hide');
                blocks[i].classList.add('show');
            }
        });
    }

    /*
        КОНЕЦ ТАБОВ !!!!!!!!!!!!!!!!!!!!!!!!!
    */


    // Прокрутка вверх
    let upBtn = document.createElement('div');
    upBtn.classList.add('up-btn');
    upBtn.classList.add('hide');
    upBtn.textContent = 'UP';

    let body = document.querySelector('body');

    body.insertAdjacentElement('beforeend', upBtn);

    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 200) {
            upBtn.classList.remove('hide');
        } else {
            upBtn.classList.add('hide');
        }
    });

    upBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
    });



    ////////// TIMER //////////// 

    let minutesDiv = document.querySelector('.minutes');
    let minutes = document.querySelector('.minutes').textContent;

    let secondsDiv = document.querySelector('.seconds');
    let seconds = document.querySelector('.seconds').textContent;

    let millisecondsDiv = document.querySelector('.millieconds');
    let milliseconds = document.querySelector('.millieconds').textContent;


    let startBtn = document.querySelector('.start-btn');
    let plusMinuteBtn = document.querySelector('.plus-minute');
    let plusSecondBtn = document.querySelector('.plus-second');

    function makeNoActive(elem1, elem2) {
        elem1.disabled = 'disabled';
        elem2.disabled = 'disabled';

        elem1.style.cursor = 'not-allowed';
        elem2.style.cursor = 'not-allowed';
    }

    function makeActive(elem1, elem2) {
        elem1.removeAttribute('disabled');
        elem2.removeAttribute('disabled');

        elem1.style.cursor = 'pointer';
        elem2.style.cursor = 'pointer';
    }

    // function addZero(num) {
    //     if (seconds.length < 2) {
    //         alert(5555555555555);
    //     }
    // }



    startBtn.addEventListener('click', function () {

        seconds = String(seconds);
        minutes = String(minutes);

        if (seconds.length < 2) {
            secondsDiv.textContent = 0 + seconds;
        }

        if (minutes.length < 2) {
            minutesDiv.textContent = 0 + minutes;
        }

        makeNoActive(plusMinuteBtn, plusSecondBtn);

        secondsDiv.textContent = --seconds;

        seconds = String(seconds);
        minutes = String(minutes);

        if (seconds.length < 2) {
            secondsDiv.textContent = 0 + seconds;
        }

        let timerID = setInterval(function () {

            secondsDiv.textContent = --seconds;

            if (seconds === 0) {
                minutes--;
                seconds = 60;
            }

            if (seconds === 59) {
                ++minutes;
                minutesDiv.textContent = --minutes;
            }

            if (minutes < 0) {
                makeActive(plusMinuteBtn, plusSecondBtn);
                clearInterval(timerID);
            }

            seconds = String(seconds);
            minutes = String(minutes);

            if (seconds.length < 2) {
                secondsDiv.textContent = 0 + seconds;
            }

            if (minutes.length < 2) {
                minutesDiv.textContent = 0 + minutes;
            }

        }, 1000);

        let timerID2 = setInterval(function () {

            millisecondsDiv.textContent = milliseconds--;

            if (milliseconds < 0) {
                milliseconds = 9;
            }

            if (minutes < 0) {
                clearInterval(timerID2);
                millisecondsDiv.textContent = 0;
            }

        }, 60);
    });

    plusMinuteBtn.addEventListener('click', function () {
        minutes++;
        minutesDiv.textContent = minutes;
    });

    plusSecondBtn.addEventListener('click', function () {
        seconds++;

        if (seconds > 59) {
            ++minutes;
            minutesDiv.textContent = minutes;
            seconds = 0;
            secondsDiv.textContent = seconds;
        }

        secondsDiv.textContent = seconds;
    });


    /////////// CLASSESS ///////////////

    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.sayHi = function () {
    //         alert('hi');
    //     };
    // }

    // User.prototype.exit = function (name) {
    //     console.log('Пользователь ' + this.name + ' вышел');

    // }

    // let john = new User('John', 666);
    // let alex = new User('Alex', 999);

    // alex.sayHi();
    // alert(john.name);

    // john.exit();

    // console.log(john);

    ////// ES6 ///////

    // class User {
    //     constructor(name, id) {
    //         this.name = name;
    //         this.id = id;
    //         this.human = true;
    //     }

    //     sayHi() {
    //         alert('hi');
    //     }
    // }

    // User.prototype.sss = function() {
    //     alert(123456789000000);
    // }

    // let xxx = new User('Asdfgfghj', 48528);

    // console.log(xxx.id);
    // console.log(xxx.sss());

    // let obj = {
    //     a: 10,
    //     b: 20,
    //     sum: function() {
    //         return this.a + this.b;
    //     }
    // };

    // alert(obj.sum());
    
    
    // let user = {
    //     name: 'test',

    // }

    // function sayName() {
    //     alert(this.name);
    // }

    // sayName.call(user);






    ///// MODAL WINDOW //////

    let knowMoreBtn = document.querySelector('.knowMore-btn');
    let overlay = document.querySelector('.overlay');
    let closePopup = document.querySelector('.close-popup');
    let btnsInTabs = document.querySelectorAll('.btn-in-tab');
    let popupContent = document.querySelector('.popup-content');    
    let popupWindow = document.querySelector('.popup');    

    // function createModalWindow() {
    //     let window = document.createElement('div');
    //     let scriptElement = document.querySelector('script');

    //     window.classList.add('overlay');
    //     scriptElement.insertAdjacentElement('beforebegin', window);        
    // }

    // function getText() {
    //     let text = 
    // }

    function setText(elem, text) {
        elem.insertAdjacentText('afterBegin', text);
    }

    btnsInTabs.forEach(function(item) {
        item.addEventListener('click', function() {

            

            let text = this.previousElementSibling.textContent;
            
            setText(popupContent, text); 
            overlay.classList.remove('hidden');  
            
            
        });
    });

    knowMoreBtn.addEventListener('click', function() {
        overlay.classList.remove('hidden');

        // console.log(btnsInTabs);        
        // createModalWindow();
    });

    overlay.addEventListener('click', function(e) {    

        let target = e.target;
        
        if (target.className == 'overlay' || target.className == 'close-popup') {   
            popupContent.textContent = '';
            overlay.classList.add('hidden');
        }       
    });

    document.addEventListener('keyup', function(e) {   
             
        if (e.keyCode == 27) {   
            popupContent.textContent = '';
            overlay.classList.add('hidden');
        }       
    });
    



};