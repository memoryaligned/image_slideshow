var imageCarousel = (function() {
   var initModule,
       imageArray,
       $DOMimage;

   initModule = function($DOMcontainer, images, millis) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
         $DOMcontainer.innerHTML = xhr.responseText;
         $DOMimage = $DOMcontainer.getElementsByTagName("img")[0];
         $DOMimage.setAttribute('data-image-index', "0");
         setInterval(function() {
            var path 
               = $DOMimage.src.substring(0, $DOMimage.src.lastIndexOf("/"));
            $DOMimage.setAttribute('data-image-index', 
               parseInt($DOMimage.dataset.imageIndex) + 1);

            if(parseInt($DOMimage.dataset.imageIndex) >= images.length) {
               $DOMimage.setAttribute('data-image-index', '0');
            }
            console.log($DOMimage.dataset.imageIndex);

            var p = path + "/" + images[parseInt($DOMimage.dataset.imageIndex)];
            $DOMimage.src = p
         }, millis);
      }
      xhr.open("get", "templates/image-carousel.html", true);
      xhr.send();
   };

   return { 
      initModule : initModule
   };
}());
