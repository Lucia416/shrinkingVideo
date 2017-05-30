	$(() => {

		$( ".video" ).on( "taphold", function() {
			console.log("ciaooo");

		  $( ".video" ).css( "position","fixed");
			$( ".video" ).css( "bottom","10px");
			$( ".video" ).css( "right","10px");
			$( ".video" ).css( "height","220px");
			$( ".video" ).css( "width","350px");
		},);


});
