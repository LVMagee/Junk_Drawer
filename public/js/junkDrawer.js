$(document).ready(function(){
	var nav = document.getElementById("navBar")

	$(document).on('click','.itemRowClick',function(){
		$("#itemDetail").toggle("blind", 1000);
		nav.style.opacity = 0.25;
		$("#displayItemName").empty();
	});

	$("#closeItemDetail").click(function(){
		$("#itemDetail").hide();
		nav.style.opacity = 1;
	});

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

    var assetContainer = $(".asset-container");
    
    function search(){
		$.get("/api/assets", function(data) {
	        assets = data;
	        var specificSearch = [];
		    for (var i = 0; i < assets.length; i++){
		        if ($('.alphabet').val() === assets[i].itemName.charAt(0) ){
		    		console.log(alphabetValue);
		    		console.log(assets[i].itemName);
		    		specificSearch.push(createNewRow(assets[i]));
		    	}
		    }
	    });
	}

    	$(".alphabet").click(function(){
    		assetContainer.empty();
    		search();
		});

});


