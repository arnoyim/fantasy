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
		
		/** Creating the Days difference.*/
		var start = new Date(dataInfo.start);
		var today = new Date();
		var timeDiff = Math.abs(start.getTime() - today.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

		var name = dataInfo.name;
		var prize = dataInfo.prize;
		var entries = dataInfo.entries;
		var maxEntries = dataInfo.max_entries;
		var entryFee = dataInfo.entry_fee;
		var win = dataInfo.win;
		var row = $('<tr></tr>').addClass('row').html('<td>' + name + '</td>' +
			 '<td>' + '$ ' +  prize + '</td>' +
			 '<td>' + entries + '/' + maxEntries + '</td>' +
			 '<td>' + win + '%' + '</td>' +
			 '<td>' + '$ ' + entryFee + '</td>' +
			 '<td>' + diffDays + ' Days' + '</td>' +
			 '<td>' + '<p class="enter">' +'ENTER CONTEST' + '</p>' + '</td>');
		table.append(row);
	};



})