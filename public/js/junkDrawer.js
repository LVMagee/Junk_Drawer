$(document).ready(function() {

	var assetContainer = $(".asset-container");

	var assets;

	displayAssets();

	$( "#createLogin" ).click(function() {
		$( "#createAccountForm" ).show();
	});

	$( ".itemRowClick" ).click(function() {
		$( "#itemDetail" ).slideDown(1000);
		// show the details of this particular item within the div
	});

	$( ".itemEdit" ).click(function() {
	  $( "#itemDetail" ).slideDown(1000);
		// show the details of this particular item within the div
		// this will 
	});

	$( ".itemRowClick" ).click(function() {
	 	// she
	});

	//will display items when item tab is clicked
	function displayAssets(){

		$.get("/api/assets", function(data) {

	      console.log("Assets", data);
	      assets = data;
	      initializeRows();
	    });
	}

	function initializeRows() {
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
});