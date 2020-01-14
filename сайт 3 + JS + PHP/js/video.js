	
	var container = document.querySelector(".container")
	var videos = ["https://www.youtube.com/embed/H6G63NKRSi8?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem", "https://www.youtube.com/embed/5JEkiHHUOFs", "https://www.youtube.com/embed/-GWOP5JdPpo", "https://www.youtube.com/embed/t19W25ROjss", "https://www.youtube.com/embed/0VbK_WPgZmQ"]
	for(var i = 0; i < videos.length; i++){
		var iframe = document.createElement("iframe")
		iframe.classList.add("video")
		iframe.setAttribute("src", videos[i])
		iframe.setAttribute("allowfullscreen", "")
		iframe.setAttribute("allow", "accelerometer")
		iframe.setAttribute
		container.appendChild(iframe)
		console.log(iframe)
	}