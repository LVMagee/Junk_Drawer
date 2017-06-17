
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
    var assets;

    function search(){
      $.get("/api/assets", function(data) {
            console.log("Assets", data);
            assets = data;
      }).then(

        $(document).on("click", ".alphabet", function(){
          var letter = $(this).value;
          for (var i = 0; i < assets.length; i++){
            // var letter = this.value;
            if ( letter = assets[i].itemName.charAt(0).toLowerCase() ){
              assetContainer.empty();
              var specificSearch = [];
              specificSearch.push(createNewRow(assets[i]));
            }
          }
          assetContainer.append(specificSearch);
        })
      );
      
    };

    
    search();



});


