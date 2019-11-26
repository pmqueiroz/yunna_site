Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {

      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
    },
  
    fadeIn: function() {
        this.newContainer.classList.add("slide-in");
    }
  });
  
  Barba.Pjax.getTransition = function() {

    return FadeTransition;
  };
