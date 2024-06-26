
const { createApp } = Vue;
createApp({
  data() {
    return {
      indexImg: 0,
      directionNext: true,
      autoPlay: true,
      timer:null,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
  
    };
  },
  created (){
    this.timer=setInterval(() => {
      this.nextPic()
    }, 3000)
  },
  methods: {
    nextPic: function () {

      if (this.indexImg === this.images.length-1) {
        this.indexImg = 0;
      } else{
        this.indexImg++;
      }

    },
    prevPic: function () {

      if (this.indexImg === 0 ) {
        this.indexImg = this.images.length-1;
      } else{
        this.indexImg--;
      }

  },
  change: function () {

    if (this.directionNext) {
      clearInterval(this.timer);
      this.timer=setInterval(() => {
        this.prevPic()
      }, 3000)
      this.directionNext=false;
    } else{
      clearInterval(this.timer);
      this.timer=setInterval(() => {
        this.nextPic()
      }, 3000)
      this.directionNext=true;
    }

},
stop: function () {

  if (this.autoPlay) {
    clearInterval(this.timer);
    this.autoPlay=false;
  } else{
    this.autoPlay=true;
    if (this.directionNext) {
      clearInterval(this.timer);
      this.timer=setInterval(() => {
        this.nextPic()
      }, 3000)
      
    } else{
      clearInterval(this.timer);
      this.timer=setInterval(() => {
        this.prevPic()
      }, 3000)
    }
  }

},
}
}).mount("#app");
