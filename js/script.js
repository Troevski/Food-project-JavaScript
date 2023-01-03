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
});
















// // в ес6 , если мы знаем , что наша функция стартует с 0 по счёту объекту , то можем I прировнять к 0 , и не передавать в функцию при вызове значение , оно будет и так автоматом 0
//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', function(event) {
//         const target = event.target;
//         if(target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
// });
// Tabs
    
	// let tabs = document.querySelectorAll('.tabheader__item'),
	// 	tabsContent = document.querySelectorAll('.tabcontent'),
	// 	tabsParent = document.querySelector('.tabheader__items');

	// function hideTabContent() {
        
    //    tabsContent.forEach(item => {
    //     item.classList.add('hide');
    //     item.classList.remove('show' , 'fade');
    //    });

    //    tabs.forEach((item)=>{
    //     item.classList.remove('tabheader__item_active');
    //    })
       
	// }
    
    // function showTabContent (i = 0 ){
    //     tabsContent[i].classList.add('show' , 'fade');
    //     tabsContent[i].classList.remove('hide');
    //     tabs[i].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent ();


    // tabsParent.addEventListener('click' , (event)=> {
        
    //     const target = event.target;

    //    if ( target && target.classList.contains('tabheader__item')){
    //         tabs.forEach((item , i) => {
    //             if(target == item) {
    //                 hideTabContent();
    //                 showTabContent (i);
    //             }
    //         })
    //    }