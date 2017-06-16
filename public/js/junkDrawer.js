$(document).ready(function(){
	var nav = document.getElementById("navBar")

	$(document).on('click','.itemRowClick',function(){
		$("#itemDetail").toggle("blind", 1000);
		nav.style.opacity = 0.25;
		$("#displayItemName").empty();
	});

	$(".alphabet").click(function(){
		
	});

	$("#closeItemDetail").click(function(){
		$("#itemDetail").hide();
		nav.style.opacity = 1;
	});
});


