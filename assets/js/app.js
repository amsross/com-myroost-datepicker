(function($) {
	'use strict';
	$(document).ready(function() {

		var startDate = new Date(),
			dateStr = (startDate.getMonth()+1) + '/' + startDate.getDate() + '/' + startDate.getFullYear()
			;

		$('.form-datepicker #checkin').val(dateStr);

		$('.form-datepicker .date.check_in')
			.datepicker({
				autoclose: true,
				format: 'D, M d',
				multidate: false,
				orientation: 'auto',
				startDate: '+0d',
				todayBtn: 'linked',
				todayHighlight: true,
			})
			.on('changeDate', function(evt){
				if (!evt.date) {return false;}
				startDate = new Date(evt.date.valueOf());
				startDate.setDate(startDate.getDate(new Date(evt.date.valueOf())));
				$('.form-datepicker .date.check_out').datepicker('setStartDate', startDate);
				dateStr = (evt.date.getMonth()+1) + '/' + evt.date.getDate() + '/' + evt.date.getFullYear();
				$('.form-datepicker #checkin').val(dateStr);
			})
			;

		$('.form-datepicker .date.check_out')
			.datepicker({
				autoclose: true,
				format: 'D, M d',
				multidate: false,
				orientation: 'auto',
				startDate: '+1d',
				todayBtn: 'linked',
				todayHighlight: true,
			})
			.on('changeDate', function(evt){
				if (!evt.date) {return false;}
				var checkOut = Date.parse(evt.date);
				var checkIn = Date.parse($('.form-datepicker #checkin').val());
				if (checkIn < checkOut) {
					var timeDiff = Math.abs(checkOut - checkIn);
					var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					$('.form-datepicker #nights').val(diffDays);
				} else {
					$('.form-datepicker #nights').val(1);
				}
			})
			;
	});
})(jQuery);
