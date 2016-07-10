var $ = require("jQuery");

$.ajax({
	type:"GET",
	url:"https://kissanime.to/Anime/Bakegyamon",
	success:function(xhr) {
		$body = $("<div>", {
			html:xhr
		});
		$body.find(".listing tr").find("td:eq(0) a");
		var count = 0;
		$a.each(function() {
			$.ajax({
				url:$(this).attr("href"),
				success: function(xhr, text, jqXHR) {
					var $div = $("<div>", {
						html:xhr
					});
					var success = $div.find("#selectQuality").length;
					count += success;
					
					console.log("SUCCESS:",count);
				},
				error: function(xhr, text, jqXHR) {
					count++;
				}
			})
		})

	}
})
/*
var $a = $(".listing tr").find("td:eq(0) a");
var count = 0;
$a.each(function() {
	$.ajax({
		url:$(this).attr("href"),
		success: function(xhr, text, jqXHR) {
			var $div = $("<div>", {
				html:xhr
			});
			var success = $div.find("#selectQuality").length;
			count += success;
			
			console.log("SUCCESS:",count);
		},
		error: function(xhr, text, jqXHR) {
			count++;
		}
	})
})
*/