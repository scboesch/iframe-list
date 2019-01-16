var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: false,
        title: "Chorus",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE?controls=0&amp;start=55"
      },
      {
        show: false,
        title: "Beginning",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE"
      }
    ]
  },
  methods: {
    go: function() {
      console.log("working");
      var obj = {
        show: true,
        title: this.newTitle,
        url: "https://www.youtube.com/embed/iWZmdoY1aTE"
      };
      this.videos.push(obj);
    }
  }
});
