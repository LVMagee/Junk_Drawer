$(document).ready(function(){

	$(document).on("submit", "#asset-form", insertAsset);

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