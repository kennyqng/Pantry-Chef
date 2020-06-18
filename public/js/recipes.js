$(document).ready(() => {
  $("#arrow").on("click", event => {
    event.preventDefault();
    const searchInput = $("#inlineFormInput");
    console.log("Searching " + searchInput);
  });

  $(".ingredients-list").on("click", event => {
    console.log(event.target.id);
  });
});
