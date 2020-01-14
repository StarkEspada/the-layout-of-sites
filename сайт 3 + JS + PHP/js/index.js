var images = ["img/02-conference.jpg", "img/01.jpg", "img/7d5ca0a31a0831789503ac65812f99d9.jpg", 
"img/35e6a6c718416c26fd92a0bf943da.jpg", "img/2018.10.01_1_0187.jpg", "img/7939_psstage-970x440.jpg",
"img/business-conference.jpg", "img/Secure-Identification-2017-overview1.png","img/Тревел-гранты-и-гранты-на-посещение-конференций-от-Google-min.jpg",
"img/inx960x640.jpg"]
var kol = 'width="100%" height="100%"'


var home = document.querySelector(".home")
var aboutUs = document.querySelector(".about-us")
var events = document.querySelector(".events")
var speaker = document.querySelector(".speaker")
var pages = document.querySelector(".pages")
var blog = document.querySelector(".blog")
var contactUs = document.querySelector(".contact-us")
var contactFooterSubscribeButton = document.querySelector(".contact-footer-subscribe-button")
var containerSubscribeNow = document.querySelector(".container-subscribe-now")
var arrow = document.querySelector(".arrow")
var arrowAboutUs = document.querySelector(".arrow-about-us")
var arrowEvents = document.querySelector(".arrow-events")
var arrowSpeaker = document.querySelector(".arrow-speaker")
var arrowPages = document.querySelector(".arrow-pages")
var arrowBlog = document.querySelector(".arrow-blog")
var arrowContactUs = document.querySelector(".arrow-contact-us")
var searchImage = document.querySelector(".search-image")
var search = document.querySelector(".search")
var searchInput = document.querySelector(".search-input")
var ticket = document.querySelector(".ticket")
var cellPrise = document.querySelectorAll(".cell-prise")
var buyTicketPricing = document.querySelectorAll(".buy-ticket-pricing")
var numberDays = document.querySelector(".number-days")
var numberHours = document.querySelector(".number-hours")
var numberMinutes = document.querySelector(".number-minutes")
var numberSeconds = document.querySelector(".number-seconds")
var map = document.querySelector(".map")
var speakersBackground = document.querySelectorAll(".speakers-background")
var block = document.querySelector(".block")
var socialContainerSpeakers = document.querySelectorAll(".social-container-speakers")
var speakersOne = document.querySelector(".speakers-one")
var speakersTwo = document.querySelector(".speakers-two")
var speakersTree = document.querySelector(".speakers-tree")
var speakersFor = document.querySelector(".speakers-for")
var speakersFive = document.querySelector(".speakers-five")
var speakersSix = document.querySelector(".speakers-six")
var speakersSeven = document.querySelector(".speakers-seven")
var speakersEigth = document.querySelector(".speakers-eigth")
var popOne = document.querySelector(".pop-one")
var popTwo = document.querySelector(".pop-two")
var popTree = document.querySelector(".pop-tree")
var popFor = document.querySelector(".pop-for")
var popFive = document.querySelector(".pop-five")
var popSix = document.querySelector(".pop-six")
var popSeven = document.querySelector(".pop-seven")
var popEigth = document.querySelector(".pop-eigth")
var photoOne = document.querySelector(".photo-one")
var photoTwo = document.querySelector(".photo-two")
var photoTree = document.querySelector(".photo-tree")
var photoFor = document.querySelector(".photo-for")
var photoFive = document.querySelector(".photo-five")
var photoSix = document.querySelector(".photo-six")
var photoSeven = document.querySelector(".photo-seven")
var photoEigth = document.querySelector(".photo-eigth")
var cloze = document.querySelector(".cloze")
var blockPhoto = document.querySelector(".block-photo")
var containerPhoto = document.querySelector(".container-photo")




containerSubscribeNow.style.display = "none"
arrow.style.display = "none"
arrowAboutUs.style.display = "none"
arrowEvents.style.display = "none"
arrowSpeaker.style.display = "none"
arrowPages.style.display = "none"
arrowBlog.style.display = "none"
arrowContactUs.style.display = "none"
search.style.display = "none"


for(var i = 0; i < speakersBackground.length; i++){
    speakersBackground[i].style.display = "none"
}


var seconds = 15
var minutes = 15
var hourse = 15
var days = 15
var timerId

function timer(){
	seconds--
	
	if(seconds === 0){
		seconds = 15
		minutes--
	} else if (minutes === 0){
		minutes = 15
		hourse--
	} else if (hourse === 0){
		hourse = 15
		days--
	} else if (days === 0){
		days = 15
	} 

	
numberSeconds.innerHTML = seconds
numberMinutes.innerHTML = minutes	
numberHours.innerHTML = hourse
numberDays.innerHTML = days

}

setInterval(timer, 1000)



for(var i = 0; i < images.length; i++ ){
    var photo = document.createElement("div")
    var cloze = document.createElement("div")
    photo.classList.add("photo")
    cloze.classList.add("cloze")
    blockPhoto.appendChild(photo)
    var img = document.createElement("img")
    img.style.width = 100 + "%"
    img.style.height = 100 + "%"
    cloze.innerHTML = "&#10006;"
    img.setAttribute("src", images[i])
    photo.appendChild(img)
    containerPhoto.appendChild(photo)
    console.log(photo)
    /*img.src = images[i]*/
    /*var src = document.createElement("header")*/
    /* src.appendChild(img)*/

photo.addEventListener("click", function(){
    window.bigPhoto = document.createElement("div")
    bigPhoto.classList.add("big-photo")
    blockPhoto.appendChild(bigPhoto)
    bigPhoto.innerHTML = this.innerHTML
    bigPhoto.appendChild(cloze)
    console.log(cloze)
    console.log(bigPhoto)
    console.log(photo.innerHTML)
})

cloze.addEventListener("click", function(){
    bigPhoto.style.display = "none"
})






}



home.addEventListener("click", function(){
	arrow.style.display = "inline-flex"
})

aboutUs.addEventListener("click", function(){
	arrowAboutUs.style.display = "inline-flex"
})

events.addEventListener("click", function(){
	arrowEvents.style.display = "inline-flex"
})

speaker.addEventListener("click", function(){
	arrowSpeaker.style.display = "inline-flex"
})

pages.addEventListener("click", function(){
	arrowPages.style.display = "inline-flex"
})

blog.addEventListener("click", function(){
	arrowBlog.style.display = "inline-flex"
})

contactUs.addEventListener("click", function(){
	arrowContactUs.style.display = "inline-flex"
})

searchImage.addEventListener("click", function(){
 	search.style.display = "inline-block"
 	searchImage.style.display = "none"
})


/*photoOne.addEventListener("click", function(){
    popOne.style.display = "block"
})
cloze.addEventListener("click", function(){
    popOne.style.display = "none"
})*/

for(var i = 0; i < buyTicketPricing.length; i++){

	buyTicketPricing[0].addEventListener("click", function(){
			cellPrise[0].style.background = "#ff2c55"
			cellPrise[0].style.color = "white"


	})
	buyTicketPricing[1].addEventListener("click", function(){
			cellPrise[1].style.background = "#ff2c55"
			cellPrise[1].style.color = "white"


	})
	buyTicketPricing[2].addEventListener("click", function(){
			cellPrise[2].style.background = "#ff2c55"
			cellPrise[2].style.color = "white"


	})
	buyTicketPricing[3].addEventListener("click", function(){
			cellPrise[3].style.background = "#ff2c55"
			cellPrise[3].style.color = "white"


	})
}


speakersOne.addEventListener("mouseover", function(){
    speakersBackground[0].style.display = "inline-block"
})
speakersOne.addEventListener("mouseout", function(){
    speakersBackground[0].style.display = "none"
})
speakersTwo.addEventListener("mouseover", function(){
    speakersBackground[1].style.display = "inline-block"
})
speakersTwo.addEventListener("mouseout", function(){
    speakersBackground[1].style.display = "none"
})
speakersTree.addEventListener("mouseover", function(){
    speakersBackground[2].style.display = "inline-block"
})
speakersTree.addEventListener("mouseout", function(){
    speakersBackground[2].style.display = "none"
})
speakersFor.addEventListener("mouseover", function(){
    speakersBackground[3].style.display = "inline-block"
})
speakersFor.addEventListener("mouseout", function(){
    speakersBackground[3].style.display = "none"
})
speakersFive.addEventListener("mouseover", function(){
    speakersBackground[4].style.display = "inline-block"
})
speakersFive.addEventListener("mouseout", function(){
    speakersBackground[4].style.display = "none"
})
speakersSix.addEventListener("mouseover", function(){
    speakersBackground[5].style.display = "inline-block"
})
speakersSix.addEventListener("mouseout", function(){
    speakersBackground[5].style.display = "none"
})
speakersSeven.addEventListener("mouseover", function(){
    speakersBackground[6].style.display = "inline-block"
})
speakersSeven.addEventListener("mouseout", function(){
    speakersBackground[6].style.display = "none"
})
speakersEigth.addEventListener("mouseover", function(){
    speakersBackground[7].style.display = "inline-block"
})
speakersEigth.addEventListener("mouseout", function(){
    speakersBackground[7].style.display = "none"
})


ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ]);

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
            balloonContent: '<strong>серобуромалиновый</strong> цвет'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            balloonContent: 'цвет <strong>детской неожиданности</strong>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            balloonContent: 'цвет <strong>красный</strong>'
        }, {
            preset: 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            balloonContent: 'цвет <strong>фэйсбука</strong>'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent: 'цвет <strong>носика Гены</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: 'цвет <strong>голубой</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}





    














contactFooterSubscribeButton.addEventListener("click", function(){
	containerSubscribeNow.style.display = "inline-block"
})