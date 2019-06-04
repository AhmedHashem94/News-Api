/* jshint esversion: 6 */
let error;
let news = "bitcoin";
let data;
$("#search").click(function() {
  news = $("#newsWord").val();
  let getPosts = new Promise(function(resolved, rejected) {
    let req = new XMLHttpRequest();
    req.open(
      "get",
      "https://newsapi.org/v2/everything?q=" +
        news +
        "&from=2019-06-30&sortBy=publishedAt&apiKey=c2a977e851cf42d3894be89afe141cce"
    );
    req.send();
    req.onload = function() {
      if (req.status == 200) {
        resolved(req.response);
      } else if (req.status == 404) {
        error = "Page Not Found";
        rejected(error);
      } else if (req.status == 403) {
        error = "Page Not Respond";
        rejected(error);
      }
    };
  });
  getPosts.then(
    function(d) {
      data = JSON.parse(d).articles;
      for (let index = 0; index < data.length; index++) {
        if (data[index].urlToImage == null || data[index].description == "") {
          data.splice(index, 1);
        }
      }
      displayData();
    },
    function(err) {
      console.log(err);
    }
  );
  function displayData() {
    let newsContent = "";
    for (let index = 0; index < data.length; index++) {
      newsContent += `<div class="col-md-3 text-light py-3"><h4>${
        data[index].title
      }</h4>
      <p>${data[index].description}</p>
      <img src="${data[index].urlToImage}" class="img-fluid">
      </div>`;
    }
    $("#newsContainer").html(newsContent);
  }
});
let getPosts = new Promise(function(resolved, rejected) {
  let req = new XMLHttpRequest();
  req.open(
    "get",
    "https://newsapi.org/v2/everything?q=" +
      news +
      "&from=2019-04-30&sortBy=publishedAt&apiKey=c2a977e851cf42d3894be89afe141cce"
  );
  req.send();
  req.onload = function() {
    if (req.status == 200) {
      resolved(req.response);
    } else if (req.status == 404) {
      error = "Page Not Found";
      rejected(error);
    } else if (req.status == 403) {
      error = "Page Not Respond";
      rejected(error);
    }
  };
});
getPosts.then(
  function(d) {
    data = JSON.parse(d).articles;
    for (let index = 0; index < data.length; index++) {
      if (
        data[index].urlToImage == (null || "") &&
        data[index].description == (null || "")
      ) {
        data.splice(index, 1);
      }
    }
    displayData();
  },
  function(err) {
    console.log(err);
  }
);
function displayData() {
  let newsContent = "";
  for (let index = 0; index < data.length; index++) {
    newsContent += `<div class="col-md-3 text-light py-3"><h4>${
      data[index].title
    }</h4>
    <p>${data[index].description}</p>
    <img src="${data[index].urlToImage}" class="img-fluid">
    </div>`;
  }
  $("#newsContainer").html(newsContent);
}
// function getNews() {
//   var req = new XMLHttpRequest();
//   req.open(
//     "get",
//     "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-18&sortBy=publishedAt&apiKey=46d39bd198f545a39009284be2f862e6"
//   );
//   req.send();
//   req.onload = function() {
//     if (req.status == 200) {
//       news = JSON.parse(req.response).articles;
//       console.log(news);
//     }
//   };
// }
// getNews();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmV3cztcclxudmFyIHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3c1dvcmRcIik7XHJcbnZhciBnZXRQb3N0cyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmVkLCByZWplY3RlZCkge1xyXG4gIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICByZXEub3BlbihcImdldFwiLCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuICByZXEuc2VuZCgpO1xyXG4gIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICByZXNvbHZlZChyZXEucmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIGlmIChyZXEuc3RhdHVzID09IDQwNCkge1xyXG4gICAgICB2YXIgZXJyb3IgPSBcIlBhZ2UgTm90IEZvdW5kXCI7XHJcbiAgICAgIHJlamVjdGVkKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBlcnJvciA9IFwiUGFnZSBOb3QgUmVzcG9uZFwiO1xyXG4gICAgICByZWplY3RlZChlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbmdldFBvc3RzLnRoZW4oXHJcbiAgZnVuY3Rpb24oZCkge1xyXG4gICAgY29uc29sZS5sb2coZCk7XHJcbiAgfSxcclxuICBmdW5jdGlvbihlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG4pO1xyXG4vLyBmdW5jdGlvbiBnZXROZXdzKCkge1xyXG4vLyAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuLy8gICByZXEub3BlbihcclxuLy8gICAgIFwiZ2V0XCIsXHJcbi8vICAgICBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPWJpdGNvaW4mZnJvbT0yMDE5LTAzLTE4JnNvcnRCeT1wdWJsaXNoZWRBdCZhcGlLZXk9NDZkMzliZDE5OGY1NDVhMzkwMDkyODRiZTJmODYyZTZcIlxyXG4vLyAgICk7XHJcbi8vICAgcmVxLnNlbmQoKTtcclxuLy8gICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBpZiAocmVxLnN0YXR1cyA9PSAyMDApIHtcclxuLy8gICAgICAgbmV3cyA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlKS5hcnRpY2xlcztcclxuLy8gICAgICAgY29uc29sZS5sb2cobmV3cyk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuLy8gfVxyXG4vLyBnZXROZXdzKCk7XHJcbiJdfQ==
