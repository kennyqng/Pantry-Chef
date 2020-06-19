$(document).ready(() => {
  const searchKeys = {};

  $("#arrow").on("click", event => {
    event.preventDefault();
    const searchInput = $("#inlineFormInput");
    console.log("Searching " + searchInput);
  });

  $(".ingredients-list").on("click", event => {
    if ($(event.target).is(":checked")) {
      searchKeys[event.target.id] = event.target.id;
      console.log(searchKeys);
    } else {
      delete searchKeys[event.target.id];
      console.log(searchKeys);
    }
  });
});
