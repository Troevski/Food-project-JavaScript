window.addEventListener('DOMContentLoaded', function() {

const tabs = this.document.querySelectorAll('.tabheader__item'),
      tabsContent = this.document.querySelectorAll('.tabcontent'),
      tabsParent = this.document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show' , 'fade');
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        })
    };
// i - для того , тк нам надо строго понимать к какому элементу мы обращаемся 
    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show' , 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active')
    }     
    hideTabContent ();
    showTabContent ();

    tabsParent.addEventListener ('click' , (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i)=>{
                if(target == item){
                    hideTabContent ();
                    showTabContent (i);
                }
            })
        };
    });
// target = тот элемент , в который мы только что кликнули

    const deadline = '2023-01-05';

    function getTimeRemaining (endtime){
// кол-во времени оставшегося до конца нашего таймера (1 часть)
        const t = Date.parse(endtime) - Date.parse(new Date ()),
// получили разницу в миллисекундах , надо ее превратить в дни,часы,минуты,миллисекунды
// сколько суток до окончании даты дедлайн
              days = Math.floor(t / (1000 * 60 * 60 * 24 )),
// % - это оператор , который нам будет помогать возвращать хвостик от оставшегося времени , и перекидывать в другое ( 5 % 2 = 2 2 1 ( хвостик 1 будет перекидываться))
              hours = Math.floor ((t / (1000 * 60 * 60 ) % 24)) ,
              minutes = Math.floor ((t / 1000 / 60 ) % 60) ,
              seconds = Math.floor ((t / 1000) % 60) ;

        return {
            'total':t ,
            'days': days ,
            'hours': hours,
            'minutes': minutes ,
            'seconds': seconds
        }
    }

// функция , которая устанавливает таймер на страничку 
// внутри содержит три главных действия 1- оставшийся расчёт на теперешнюю секунду 2- расчётные велечины с реторна получить на страницу , 3 - запускать функцию каждую секунду(обновляется же )

function setClock (selector , endtime){
    
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock , 1000);


    function updateClock (){
        const t = getTimeRemaining(endtime);

// помещаем расчётные элементы на саму страницу 
        days.textContent = t.days,
        hours.textContent = t.hours,
        minutes.textContent = t.minutes,
        seconds.textContent = t.seconds;

        if(t.total <= 0){
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer', deadline)
});