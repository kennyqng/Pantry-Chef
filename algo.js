//I have an array of arrays of data ie. [[a,b,c], [d,e,f]....], write a func to take in an array and return the array of data filtered to having 50% matching elements of the array passed in.

const db = [
  "1/2 cup celery, finely chopped",
  "1 small green pepper finely chopped",
  "1/2 cup finely sliced green onions",
  "1/4 cup chopped parsley",
  "1 pound crabmeat",
  "1 1/4 cups coarsely crushed cracker crumbs",
  "1/2 teaspoon salt",
  "3/4 teaspoons dry mustard",
  "Dash hot sauce",
  "1/4 cup heavy cream",
  "1/2 cup melted butter",
];

function algo(arr, db) {
  //returns filtered db, based on arr
  let string = db.join(" ");
  console.log(arr.filter((a) => new RegExp(a, "gi").test(string)));
}

algo(["crabmeat", "mustard", "cream", "cracker", "horsemeat"], db);
