/*
@Author: Adesh M
@tplUrl - Handlebar HTML Template File Url
@dataUrl - Handlebar JSON Data File / API Url
@domElementId - Element Id to append template contents
*/
var loadHandlebarsTpl = function(tplUrl, dataUrl, domElementId){
	$.when(
		// Load data from json file
		$.ajax({
			dataType : "json",
			url : dataUrl
		}),
		// Load HTML template from file
		$.ajax({
			url : tplUrl
		})
	).done(function(data, html){
		// Compile + Render template
		var template = Handlebars.compile(html[0]);
		var jsonData = data[0]; testVar = jsonData; console.log(html[0]);
//		var wrap = template(jsonData);
//		console.log(wrap);
//		$('#'+domElementId).html(wrap);
		$(template(jsonData)).appendTo('#'+domElementId);
	});
}

var testVar;
// Build Carousel
loadHandlebarsTpl('templates/carousel.html', 'JSON/carousel-data.json', 'carousel-01');