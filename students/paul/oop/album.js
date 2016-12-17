/*
  Album
  
  usage:
    new Album( options ); // returns DOM element

  options:
    title // title of album
    photos // { title: string, filename: string, location: string }

*/
var Album = function(options){
  
    this.title = options.title;

    this.photos = [];
    this.currentPhoto = 0;

    this.addPhoto = function(photo){
      this.photos.push(photo);
    };

    this.addPhotos= function(photos) {
      for (var ph in photos) {
        this.addPhoto(photos[ ph ]);
      }
    };

    this.createElement = function(){
      this.element = document.createElement('div');
      this.element.classList.add('album');

      var album_html = '';
      album_html += "<h3 class='album_title'>" + this.title + "</h3>";
      album_html += "<div class='album_photos'>";
      for (var ph in this.photos) {
        album_html += "<span class='album_photo'>";
        album_html += this.photos[ ph ].title + "<br />";
        album_html += "<img src='"+this.photos[ ph ].filename+"' /><br />";
        album_html += "</span>";
      }
      album_html += "</div>";

      this.element.innerHTML = album_html;
      return this.element;
    };

    this.slideshowNext = function(){
      var photos = this.element.getElementsByClassName('album_photo');
      for (var i = 0; i < photos.length; i++) {
        photos[i].classList.remove('selected');
      }
      if ( this.currentPhoto >= photos.length) {
        this.currentPhoto -= photos.length;
      }
      photos[ this.currentPhoto ].classList.add('selected');
      this.currentPhoto++;
    }

    this.startSlideshow = function(){
      this.slideshowNext();
      this.element.onclick = this.slideshowNext.bind(this);
    };

    this.addPhotos(options.photos);
    this.createElement();
    this.startSlideshow();

    return this.element;
  
}