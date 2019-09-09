function main() {
  return 'Hello, World!';
}

main();

// document.ready makes the JS wait until the page fully loads


//carousel  

$('.carousel-container').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay:3,
  
  });

  // Photo galary
  $(document).ready(function() {


    $('#Pro').click(function(){
      $('.columnPor').show()
    });

// END //