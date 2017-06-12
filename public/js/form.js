$(document).ready(function(){

	var assetContainer = $(".asset-container");

	$(document).on("submit", "#asset-form", insertAsset);

  var assets; 

	getAssets();

// This function grabs assets from the database and updates the view
  function getAssets() {
    $.get("/api/assets", function(data) {
      console.log("Assets", data);
      assets = data;
      initializeRows();
    });
  }

   function initializeRows() {
    assetContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < assets.length; i++) {
      rowsToAdd.push(createNewRow(assets[i]));
    }
    assetContainer.prepend(rowsToAdd);
  }

  // This function constructs a asset row
  function createNewRow(asset) {

    var newInputRow = $("<li>");
    newInputRow.addClass("asset-item");

    var newTodoSpan = $("<span>");
    newTodoSpan.text(asset.model);
    newInputRow.append(newTodoSpan);

    return newInputRow;
  }

  //function to add asset to the database
  function insertAsset(event) {
    event.preventDefault();
    // if (!newItemInput.val().trim()) {   return; }
    var asset = {
      category: $("#category").val().trim(),
      make: $("#make").val().trim(),
      model: $("#itemName").val().trim(),
      serial_num: $("#serialNumber").val().trim(),
      bought: $("#date").val().trim(),
      price: $("#price").val().trim(),
      info: $("#itemInfo").val().trim()
    };

    // Posting the new todo, calling getTodos when done
    $.post("/api/assets", asset, function() {
      getAssets();
    });
    //clearing out form after adding to database
    $("#category").val("");
    $("#make").val("");
    $("#itemName").val("");
    $("#serialNumber").val("");
    $("#data").val("");
    $("#price").val("");
    $("#itemInfo").val("");
  }

});