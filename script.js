"use strict";

$(document).ready(function() {
	for(var i = 1; i <= 151; i++) {
		var el = '<img src="http://pokeapi.co/media/img/' + i + '.png" data-num="' + i + '"" />';	
		$('.col1').append(el);
	}


	$(document).on('click', 'img', function() {
		var url = 'https://pokeapi.co/api/v2/pokemon/' + $(this).attr('data-num');
		$.get(url, function(res) {

			console.log(res);

			// var el = '';
			// el += '<h2>' + res.forms[0].name + '</h2>';

			// $('#pokedex').html(el);

		}, "json");
	})


});