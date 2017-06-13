$(document).ready(function() {
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
});

(function () {
    var previous;

    $("select").on('focus', function () {
        // Store the current value on focus and on change
        previous = this.value;
    }).change(function() {
        // Do something with the previous value after the change
        alert(previous);

        // Make sure the previous value is updated
        previous = this.value;
    });
})();