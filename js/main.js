function generateMadLib( adjective, noun ) {
    var madlib = 'Today I went to the zoo. ' + 
        'I saw a ' + adjective + ' ' + 
        noun + ' jumping up and down in its tree.';
    
    return madlib;
}

var firstMadLib = generateMadLib('fuzzy', 'panda');
console.log( firstMadLib  );


$(document).ready(function(){
  $('.your-class').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,    
  });
});
