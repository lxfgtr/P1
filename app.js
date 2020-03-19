// comentariu

var poze = [	
'img/PICT2289ed an.JPG', 		//0
'img/20180608_204203.jpg',		//1
'img/20180607_144426.jpg',		//2
'img/20180607_143701.jpg'		//3
];

var btn = document.querySelector('button')
var img = document.querySelector('img')
var counter = 1

btn.addEventListener('click', function() {
	if (counter === 4) {
		counter = 0;
	}
	img.src = poze[counter]
	counter = counter+1
});