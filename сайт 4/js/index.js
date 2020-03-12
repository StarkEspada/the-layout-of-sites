var homeMenuLine = document.querySelector(".home-line");
var processMenuLine = document.querySelector(".process-line");
var featuresMenuLine = document.querySelector(".features-line");
var pricingMenuLine = document.querySelector(".pricing-line");
var faqMenuLine = document.querySelector(".faq-line-header");
var singUpMenuLine = document.querySelector(".sing-up-line");
var homeMenu = document.querySelector(".home");
var processMenu = document.querySelector(".process");
var featuresMenu = document.querySelector(".features");
var pricingMenu = document.querySelector(".pricing");
var faqMenu = document.querySelector(".faq");
var singUpMenu = document.querySelector(".sing-up");
var menuHeader = document.querySelectorAll(".menu-header")
var line = document.querySelectorAll(".line")
var containerSlaiderClientsSay = document.querySelector(".container-slaider-clients-say")
var slaiderCliantsButtonRight = document.querySelector (".slaider-cliants-button-right")
var slaiderCliantsButtonLeft = document.querySelector(".slaider-cliants-button-left")
var slaiderPageOne = document.querySelectorAll(".slaider-page-one");
var slaiderPageTwo = document.querySelectorAll(".slaider-page-two");
var buttonHeaderLearnMore = document.querySelector(".button-header-learn-more")
var personalAccountSignIn = document.querySelector(".personal-account-sign-in")
var transitButtonPlan = document.querySelectorAll(".transit-button-plan")
var storeTransitionButton = document.querySelectorAll(".store-transition-button")
var appStore = document.querySelector(".app-store")
var playStore = document.querySelector(".play-store")
var winStore = document.querySelector(".win-store")





for(var i = 0; i < menuHeader.length; i++){
	line[i].classList.add("hidden-element")
	menuHeader[i].setAttribute("count", i)


	
	
	menuHeader[i].addEventListener("mouseover", function(){
		var el = event.target
		var count = el.getAttribute("count")
		el.style.color = "white";
		el.classList.remove("hidden-element")
		if(count == 0){
			homeMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'http://www.yandex.ru/';
			})
		} else if (count == 1){
			processMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'https://www.google.com/';
			})
		} else if (count == 2){
			featuresMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'https://mail.ru/';
			})
		} else if (count == 3){
			pricingMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'https://yandex.ru/pogoda/kaluga';
			})
		} else if (count == 4){
			faqMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'https://yandex.ru/news/?clid=2323230&win=371';
			})
		} else if (count == 5){
			singUpMenuLine.style.display = "inline-block"
			el.addEventListener("click", function(){
				location.href = 'https://translate.yandex.ru/?clid=2323230&win=371';
			})
		}
	})
	menuHeader[i].addEventListener("mouseout", function(){
		var el = event.target
		el.style.color = "#9a9a9a";
		singUpMenu.style.color = "#05bca8";
		var count = el.getAttribute("count")
		if(count == 0){
			homeMenuLine.style.display = "none"
		}else if(count == 1){
			processMenuLine.style.display = "none"
		} else if (count == 2){
			featuresMenuLine.style.display = "none"
		} else if (count == 3){
			pricingMenuLine.style.display = "none"
		} else if (count == 4){
			faqMenuLine.style.display = "none"
		} else if (count == 5){
			singUpMenuLine.style.display = "none"
		}
	})
	
}

slaiderCliantsButtonRight.addEventListener("click", function(){
		containerSlaiderClientsSay.style.marginLeft = -1200  + "px";
		for(var i = 0; i < slaiderPageOne.length; i++){
			slaiderPageOne[i].style.border = 4 + "px solid #cdcdcd"
			slaiderPageOne[i].style.width = 8 + "px"
			slaiderPageOne[i].style.height = 8 + "px"
			slaiderPageOne[i].style.background = "white"
			slaiderPageTwo[i].style.background = "#08bba6"
			slaiderPageTwo[i].style.border = 4 + "px solid #08bba6"
		}
		
			})


slaiderCliantsButtonLeft.addEventListener("click", function(){
	console.log("hello")
		containerSlaiderClientsSay.style.marginLeft = 0  + "px"
		/*slaiderPageOne.style.background = "#08bba6";
		slaiderPageTwo.style.border = 4 + "px solid #cdcdcd"*/
		for(var i = 0; i < slaiderPageOne.length; i++){
			slaiderPageTwo[i].style.background = "white"
			slaiderPageTwo[i].style.border = 4 + "px solid #cdcdcd"
			slaiderPageOne[i].style.background = "#08bba6"
			slaiderPageOne[i].style.border = 4 + "px solid #08bba6"

		}
			})

buttonHeaderLearnMore.addEventListener("mouseover", function(){
	buttonHeaderLearnMore.style.background = "white";
	buttonHeaderLearnMore.style.border = 3 + "px solid black"
	buttonHeaderLearnMore.style.color = "black"
})
buttonHeaderLearnMore.addEventListener("mouseout", function(){
	buttonHeaderLearnMore.style.background = "#ffffff00";
	buttonHeaderLearnMore.style.border = 3 + "px solid white"
	buttonHeaderLearnMore.style.color = "white"
})


personalAccountSignIn.addEventListener("mouseover", function(){
	personalAccountSignIn.style.background = "white";
	personalAccountSignIn.style.color = "black";
})

personalAccountSignIn.addEventListener("mouseout", function(){
	personalAccountSignIn.style.background = "#ffffff00"
	personalAccountSignIn.style.color = "#0abca6";
})


for(var i = 0; i < transitButtonPlan.length; i++){
	transitButtonPlan[i].addEventListener("mouseover", function(){
		var element = event.target
		element.style.background = "#ff000000"
		element.style.border = 3 + "px solid black"
	})
	
	transitButtonPlan[i].addEventListener("mouseout", function(){
		var element = event.target
		element.style.background = "#d8d8d8"
		element.style.border = 3 + "px solid #d8d8d8"
	})
		
	
}


appStore.addEventListener("mouseover", function(){
	var elem = event.target
	appStore.style.border = 3 + "px solid black"
	appStore.style.color = "black"
		elem.addEventListener("click", function(){
			location.href = 'https://yandex.ru/pogoda/kaluga';
		})
})

appStore.addEventListener("mouseout", function(){
	appStore.style.border = 3 + "px solid #05a394"
	appStore.style.color = "white"
})

playStore.addEventListener("mouseover", function(){
	var elem = event.target
	playStore.style.border = 3 + "px solid black"
	playStore.style.color = "black"
		elem.addEventListener("click", function(){
			location.href = 'https://yandex.ru/';
		})
})

playStore.addEventListener("mouseout", function(){
	playStore.style.border = 3 + "px solid #05a394"
	playStore.style.color = "white"
})

winStore.addEventListener("mouseover", function(){
	var elem = event.target
	winStore.style.border = 3 + "px solid black"
	winStore.style.color = "black"
		elem.addEventListener("click", function(){
			location.href = 'https://mail.ru/';
		})
})

winStore.addEventListener("mouseout", function(){
	winStore.style.border = 3 + "px solid #05a394"
	winStore.style.color = "white"
})




/*class sait {
	constructor(lineMenu, containerMenu){
		this.containerMenu = document.querySelector(containerMenu)
		this.lineMenu = document.querySelectorAll(lineMenu)
		this.init();
	}

	menuDynamics(){
		for(var i = 0; i < this.lineMenu.length; i++){
			this.lineMenu[i].style.display = "none";
			this.containerMenu.addEventListener("mouseover", handler.bind(this))

			function handler(event){
				var place = event.target.classList.contains("pop")
				console.log(place)
				if(place === true){
					console.log(place)
				}
			}

		}
	}




	init(){
		this.menuDynamics()

	}
}


var proba = new sait(".line", ".menu")*/