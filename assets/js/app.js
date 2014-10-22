(function($) {
	'use strict';
	$(document).ready(function() {

		var startDate = new Date(),
			dateStr = (startDate.getMonth()+1) + '/' + startDate.getDate() + '/' + startDate.getFullYear()
			;

		// set a valid initial checkin date
		$('.form-datepicker #checkin').val(dateStr);

		$('.form-datepicker .input-daterange')
			.datepicker({
				autoclose: true,
				clearBtn: true,
				forceParse: true,
				format: 'D mm.dd.yy',
				multidate: false,
				orientation: 'auto',
				startDate: '+1d',
				todayBtn: false,
				todayHighlight: false,
			})
			.on('changeDate', function(evt){
				if (!evt.date) {return false;}

				var diffDays,
					timeDiff,
					arrival = $('#arrival').datepicker('getDate'),
					departure = $('#departure').datepicker('getDate')
					;

				// set a valid checkin date for the form values
				dateStr = (arrival.getMonth()+1) + '/' + arrival.getDate() + '/' + arrival.getFullYear();
				$('.form-datepicker #checkin').val(dateStr);

				if (arrival && departure) {
					if (arrival.valueOf() < departure.valueOf() || arrival.valueOf() === departure.valueOf()) {
						timeDiff = Math.abs(departure - arrival);
						diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
						// set the number of nights for the stay
						$('.form-datepicker #nights').val(diffDays||1);
					}
				}
			})
			;
	});
})(jQuery);
