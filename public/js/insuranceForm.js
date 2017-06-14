$(document).ready(function(){

  displayInsurance();

  //will retrieve insurance information from database and display insurance when insurance tab is clicked
  //====================================================================
  //====================================================================
  var insuranceContainer = $(".insurance-container");

  var insurances;

  function displayInsurance(){

    $.get("/api/insurance", function(data) {

        console.log("Insurance", data);
        insurances = data;
        initializeInsuranceRows();
      });
  }

  function initializeInsuranceRows() {
      var rowsToAdd = [];
      for (var i = 0; i < insurances.length; i++) {
        rowsToAdd.push(createNewInsuranceRow(insurances[i]));
      }

      insuranceContainer.append(rowsToAdd);
  }

    // This function constructs a new insurance row for each insurance user has submitted
  function createNewInsuranceRow(asset) {

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


  //Code to submit new insurance to data base via insurance form
  //======================================================================
  //======================================================================
	$(document).on("submit", "#insurance-form", insertInsurance);

  //function to add insurance to the database
  function insertInsurance(event) {
    event.preventDefault();
    // if (!newItemInput.val().trim()) {   return; }
    var insurance = {
      insur_type: $("#insur_type").val().trim(),
      company: $("#companyName").val().trim(),
      phone_num: $("#phoneNum").val().trim(),
      agent: $("#agent").val().trim(),
      policy_num: $("#policyNum").val().trim(),
      start_date: $("#startDate").val().trim(),
      info: $("#insurInfo").val().trim()
    };

    // Posting the new insurance, calling displayInsurance when done
    $.post("/api/insurance", insurance, function() {
      displayInsurance();
    });
    //clearing out form after adding to database
    $("#insur_type").val(""),
    $("#companyName").val("");
    $("#phoneNum").val("");
    $("#agent").val("");
    $("#policyNum").val("");
    $("#startDate").val("");
    $("#insurInfo").val("");
  }

  //code to update insurance when edit icon is clicked
  //=================================================================
  //=================================================================
  

  //code to delete insurance when delete icon in clicked
  //=================================================================
  //=================================================================
});