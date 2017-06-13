$(document).ready(function() {

	var assetContainer = $(".asset-container");

	$(document).on("click", "href.items", displayAssets);

	var assets;

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
});