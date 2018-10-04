(function(window, undefined) {
  var dictionary = {
    "a3dc6bc0-af9c-4012-98df-9a63d959eca6": "become a member",
    "97c03afb-b121-4f88-a97a-2d6967119bd8": "Payment",
    "67262893-fcdc-4e02-bd70-baacb55bfe31": "gift cards",
    "8718abab-4a1c-43db-87cc-bbf8ad3375bc": "Checkout",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "a5ebec72-f5bc-46d7-9e54-6ac97372e4a3": "Price",
    "15866e5e-b9e8-47ff-bdad-23e8f8c69f62": "Need Help",
    "ce713e8b-79e5-4c58-99f8-b157ddf76688": "Account",
    "d4b52083-bd6c-4324-bec0-b373affc5ab0": "seating",
    "2c1de2a6-70ee-46f9-9c23-2ee068a89d64": "Paradise chicken",
    "296f5e5b-a284-40ed-b5c8-9136c5fe4d34": "Main Menu",
    "2f4206fd-7ee9-477f-8af9-98f76e643bc3": "Login",
    "15261b01-dfb8-4ad2-ba07-ed1ee2e080f0": "Confirmation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);