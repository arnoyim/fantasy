$(function() {

	$.ajax({
		url  : "mockdata.json",
		type : "GET",
		dataType : 'json',
		success : function(data){
			var length = data.length
			for(var i=length; i--;) {
				tableRow(data[i]);
			}
		}
	});

	var tableRow = function(dataInfo) {
		var table = $('#contests');
		var name = dataInfo.name;
		var prize = dataInfo.prize;
		var entries = dataInfo.entries;
		var start = dataInfo.start;
		var entryFee = dataInfo.entry_fee;
		var win = dataInfo.win;
		var row = $('<tr></tr>').addClass('row').html('<td>' + name + '</td>' +
																 '<td>' + prize + '</td>' +
																 '<td>' + entries + '</td>' +
																 '<td>' + win + '</td>' +
																 '<td>' + entryFee + '</td>' +
																 '<td>' + start + '</td>')
		table.append(row);
	};



})