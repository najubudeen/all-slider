// document.addEventListener('DOMContentLoaded', function() {
//     var container = document.getElementById('custom-block-container');
//     if (container) {
//         container.style.backgroundColor = 'yellow'; // Change background color
//         container.innerHTML += '<p>JavaScript is working!</p>'; // Add new content
//     }
// });
// jQuery(document).ready(function($) {
//     alert('hi');
// 	// carouselList.css({"marginLeft": "-=400px"});
// 	// function changeSlide() {
// 	// 	if ((carouselList).is(':animated'))
//     // 	{
//     //     return false;
//     // 	}
//     // 	else {
// 	// 	carouselList.animate({"marginLeft": "-=400px"}, 500, moveFirstSlide);
// 	// 	}
// 	// };
// 	// function moveFirstSlide() {
// 	// 	var firstItem = carouselList.find("li:first");
// 	// 	var lastItem = carouselList.find("li:last");
// 	// 	lastItem.after(firstItem);
// 	// 	carouselList.css({"marginLeft": "+=400px"});
// 	// 	var active = $('.carousel-controls .active');
// 	// 	var next = active.next();
// 	// 	if (next.length == 0) {
//    	// 		next = $('.carousel-controls div').first();
//   	// 	}
// 	// 	next.addClass('active');
// 	// 	active.removeClass('active');
// 	// }
// 	// function moveFirstSlideRightButton() {
// 	// 	var firstItem = carouselList.find("li:first");
// 	// 	var lastItem = carouselList.find("li:last");
// 	// 	lastItem.after(firstItem);
// 	// 	carouselList.css({"left": "+=400px"});
// 	// }
// 	// function moveFirstSlideLeftButton() {
// 	// 	var firstItem = carouselList.find("li:first");
// 	// 	var lastItem = carouselList.find("li:last");
// 	// 	firstItem.before(lastItem);
// 	// 	carouselList.css({"left": "-=400px"});
// 	// }
// 	// setInterval(changeSlide, 3000);
// 	// var slideLeft = $('.carousel-button-slide-left');
// 	// slideLeft.on('click', function() {
// 	// 	if ((carouselList).is(':animated'))
//     // 	{
//     //     return false;
//     // 	}
//     // 	else {
// 	// 	carouselList.animate({"left": "+=400px"}, 300, moveFirstSlideLeftButton());
// 	// 	var active = $('.carousel-controls .active');
// 	// 	var prev = active.prev();
// 	// 	if (prev.length == 0) {
//    	// 		prev = $('.carousel-controls div').last();
//   	// 	}
// 	// 	prev.addClass('active');
// 	// 	active.removeClass('active');
// 	// 	}
// 	// });
// 	// var slideRight = $('.carousel-button-slide-right');
// 	// slideRight.on('click', function() {
// 	// 	if ((carouselList).is(':animated'))
//     // 	{
//     //     return false;
//     // 	}
//     // 	else {
// 	// 	carouselList.animate({"left": "-=400px"}, 300, moveFirstSlideRightButton());
// 	// 	var active = $('.carousel-controls .active');
// 	// 	var next = active.next();
// 	// 	if (next.length == 0) {
//    	// 		next = $('.carousel-controls div').first();
//   	// 	}
// 	// 	next.addClass('active');
// 	// 	active.removeClass('active');
// 	// 	}
// 	// 	});
// 	});
jQuery.noConflict();
// jQuery(document).ready(function($) {
    
    $('#your-div-id').attr('style', '');
    $('#your-div-id').css('background-color', '#ffcc00');

	// let currentIndex = 0;
    // const slides = $('.slide');
    // const totalSlides = slides.length;
	// $('.slider').css("background-color", "red");

    // $('#next').click(function(){
    //     nextSlide();
    // });

    // $('#prev').click(function(){
    //     prevSlide();
    // });

    // function nextSlide(){
    //     currentIndex = (currentIndex + 1) % totalSlides;
    //     showSlide(currentIndex);
    // }

    // function prevSlide(){
    //     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    //     showSlide(currentIndex);
    // }

    // function showSlide(index){
    //     const offset = -index * 100 + '%';
    //     // $('.slides').css('transform', 'translateX(' + offset + ')');
    // }

    // // Automatically move to the next slide every 3 seconds
    // setInterval(nextSlide, 3000);
// });




