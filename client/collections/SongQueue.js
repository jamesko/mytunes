// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // bind the function here to an event listener
    this.on("add", this.enqueue, this);
  },

  enqueue : function(song) {
    this.add(song);
    if (this.length === 1){
      this.playFirst()
    }
  },

  playFirst : function(){
    this.at(0).play()
  },



  // lengthOne : function(){
  //   if (this.length === 1){
  //     this.at(0).play()
  //   }
  // }

});
