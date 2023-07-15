var quotesArray = [
  {
    imag: "images/portrait-6064965_1280.jpg",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.”",
    name: "-- Marilyn Monroe",
  },
  {
    imag: "images/1744830._UX200_CR0,47,200,200_.jpg",
    quote: "“Be yourself; everyone else is already taken.”",
    name: "-- Oscar Wilde",
  },
  {
    imag: "images/man.jpg",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name: "-- Albert Einstein",
  },
  {
    imag: "images/3565._UX200_CR0,15,200,200_.jpg",
    quote: "“So many books, so little time.”",
    name: "-- Frank Zappa",
  },
  {
    imag: "images/testimonial-4.jpg",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name: "-- Bernard M. Baruch",
  },
  {
    imag: "images/testimonial-2.jpg",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    name: "-- Dr. Seuss",
  },
  {
    imag: "images/woman.jpg",
    quote: "“You only live once, but if you do it right, once is enough.”",
    name: "-- Mae West",
  },
  {
    imag: "images/testi-2.jpg",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    name: "-- Robert Frost",
  },
  {
    imag: "images/testi-3.jpg",
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    name: "-- J.K. Harry Potter",
  },
  {
    imag: "images/testi-1.jpg",
    quote: "“If you tell the truth, you don't have to remember anything.”",
    name: "-- Mark Twain",
  },
  {
    imag: "images/strong.jpg",
    quote: "“If you tell the truth, you don't have to remember anything.”",
    name: "-- Alex Smith",
  },
];
var x = 0;
function changeQuote() {
  var num = Math.floor(Math.random() * quotesArray.length);
  if (num != x) {
    x = num;
  } else {
    x += 1;
  }
  if (x < quotesArray.length && quotesArray.length != 0) {
    var box = `
    <img src="${quotesArray[x].imag}" class="img-thumbnail rounded-circle mb-3" width="110px" height="110px" alt="">
    <p class="lead">${quotesArray[x].quote}</p>
    <h2>${quotesArray[x].name}</h2>
    `;
    document.getElementById("quote").innerHTML = box;
  }
}
