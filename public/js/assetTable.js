$(document).ready(function(){

  displayAssets();

  //will retrieve asset information from database and display list of assets when items tab is clicked
  //====================================================================
  //====================================================================
  var assetContainer = $(".asset-container");

  var assets;

  //will display items when item tab is clicked
  function displayAssets(){

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

      assetContainer.append(rowsToAdd);
  }

    // This function constructs a asset row
  function createNewRow(asset) {

      var newItemRow = $("<tr>");
      newItemRow.addClass("itemRowClick");
      newItemRow.data("asset", asset);

      var newIndex = $("<td>");
      newIndex.text(asset.id);
      newItemRow.append(newIndex);

      var newAsset = $("<td>");
      newAsset.text(asset.itemName);
      newItemRow.append(newAsset);

      var newLinkRowContainer = $("<td>");

      var newLinksRow = $("<div>");
      newLinksRow.attr("id", "manageLinks")
      newLinkRowContainer.append(newLinksRow);

      var editIcon = $("<span>");
      editIcon.addClass("glyphicon glyphicon-pencil itemEdit");
      editIcon.attr("aria-hidden", "true");
      newLinksRow.append(editIcon);

      var deleteIcon = $("<span>");
      deleteIcon.addClass("glyphicon glyphicon-remove itemRemove");
      deleteIcon.data("id", asset.id);
      newLinksRow.append(deleteIcon);

      newItemRow.append(newLinkRowContainer);

      return newItemRow;
    }

  //code to display full asset information when asset row is clicked
  //=================================================================
  //=================================================================

  //Code to submit new asset to database via asset form
  //======================================================================
  //======================================================================
	$(document).on("submit", "#asset-form", insertAsset);

  //function to add asset to the database
  function insertAsset(event) {
    event.preventDefault();

    var asset = {
      itemName: $("#itemName").val().trim(),
      category: $("#category").val().trim(),
      make: $("#make").val().trim(),
      model: $("#model").val().trim(),
      serial_num: $("#serialNumber").val().trim(),
      bought: $("#date").val().trim(),
      price: $("#price").val().trim(),
      info: $("#itemInfo").val().trim()
    };

    // Posting the new asset, calling displayAssests when done
    $.post("/api/assets", asset, function() {
      displayAssets();
    });
    //clearing out form after adding to database
    $("#itemName").val(""),
    $("#category").val("");
    $("#make").val("");
    $("#model").val("");
    $("#serialNumber").val("");
    $("#date").val("");
    $("#price").val("");
    $("#itemInfo").val("");
  }

  //code to update asset when edit icon is clicked
  //=================================================================
  //=================================================================


  //code to delete asset when delete icon in clicked
  //=================================================================
  //=================================================================
  $(document).on("click", ".itemRemove", deleteAsset);

  //function to remove asset from the database
  function deleteAsset() {
    var id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      url: "/api/assets/" + id
    }).done(function(){

      displayAssets();
    });
  }
});