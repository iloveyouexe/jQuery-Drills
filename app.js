$(document).ready(function () {
  // this is the submit button, its awful and i hate it, my blood hurts
  $("#btnSubmit").click(function () {
    let text = $("#inputText").val();
    if (text.length === 0) {
      $("#btnSubmit").prop("disabled", true);
    } else {
      alert($("#inputText").val());
    }
  });

  $("<div></div>").appendTo("body");
  $("<ul></ul>").appendTo("div");

  $("form").submit(function (e) {
    e.preventDefault();
    let msg = $("#inputText").val();
    $("ul").append(`<li>${msg}</li>`);
  });

  $("ul").click(function (event) {
    console.log(event);
    $(event.target).css({
      "background-color": getRandomColor(),
      "border-radius": "30px",
    });
  });

  $("ul").dblclick(function (event) {
    $(event.target).remove();
  });

  function getRandomColor() {
    let randColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    return randColor;
  }
});
