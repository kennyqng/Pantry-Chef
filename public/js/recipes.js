$(document).ready(() => {
  let searchInput = "";
  const selectedIngredients = [];

  $("#arrow").on("click", event => {
    event.preventDefault();
    searchInput = $("#inlineFormInput");
    console.log("Searching " + searchInput);
  });

  $(".ingredients-list").on("click", event => {
    if ($(event.target).is(":checked")) {
      selectedIngredients.push(event.target.id);
      console.log(selectedIngredients);
    } else {
      selectedIngredients.splice(
        selectedIngredients.indexOf(event.target.id),
        1
      );
      console.log(selectedIngredients);
    }
  });
  $("#goButton").on("click", () => {
    $.get(`/search/ingredients/?ingre=${JSON.stringify(selectedIngredients)}`);
  });
});
