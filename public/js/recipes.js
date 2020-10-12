$(document).ready(() => {
  let searchInput = "";
  const selectedIngredients = [];

  $("#arrow").on("click", event => {
    event.preventDefault();
    searchInput = $("#inlineFormInput").val();
    console.log("Searching " + searchInput);
    window.location.replace("/api/recipe/" + searchInput);
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
    window.location.replace(
      "/search/ingredients/?ingredients=" + JSON.stringify(selectedIngredients)
    );
  });
});
