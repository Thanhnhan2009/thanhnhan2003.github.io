var titles = [
  "T",
  "Th",
  "Tha",
  "Than",
  "Thanh",
  "Thanh N",
  "Thanh Nh",
  "Thanh Nha",
  "Thanh Nhan",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
