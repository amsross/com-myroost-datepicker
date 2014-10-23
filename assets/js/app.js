(function($) {
	'use strict';
	$(document).ready(function() {

		var startDate = new Date(),
			dateStr = (startDate.getMonth()+1) + '/' + (startDate.getDate()+1) + '/' + startDate.getFullYear()
			;

		// set a valid initial checkin date
		$('.form-datepicker #checkin').val(dateStr);

		$('.form-datepicker .input-daterange')
			.datepicker({
				autoclose: true,
				clearBtn: true,
				format: 'D mm.dd.yy',
				startDate: '+1d',
			})
			.on('changeDate clearDate', function() {
				var checkinDate,
					diffDays,
					timeDiff,
					arrival = $('#arrival').datepicker('getDate'),
					departure = $('#departure').datepicker('getDate')
					;

				if (arrival.valueOf()) {
					// set the checkin date to the arrival date
					checkinDate = arrival;
					// limit the departure to after the arrival
					$('#departure').datepicker('setStartDate', arrival);
				} else {
					// set the checkin date to tomorrow's date
					checkinDate = startDate;
					if (departure.valueOf()) {
						// set the checkin date to the departure date
						checkinDate = departure;
					}
					// limit the departure to after the current date
					$('#departure').datepicker('setStartDate', startDate);
				}

				if (departure.valueOf()) {
					// limit the arrival to before the departure
					$('#arrival').datepicker('setEndDate', departure);
				} else {
					// remove the limit on the arrival
					$('#arrival').datepicker('setEndDate', false);
				}

				// set a valid checkin date for the form values
				$('.form-datepicker #checkin').val((checkinDate.getMonth()+1) + '/' + checkinDate.getDate() + '/' + checkinDate.getFullYear());

				if (arrival && departure) {
					if (arrival.valueOf() < departure.valueOf() || arrival.valueOf() === departure.valueOf()) {
						timeDiff = Math.abs(departure - arrival);
						diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					}
				}
				// set the number of nights for the stay
				$('.form-datepicker #nights').val(diffDays||1);
			})
			;

		$('.form-datepicker .input-group-addon').on('click', function(evt) {
			$(evt.currentTarget)
				.siblings('input')
				.datepicker('show')
				;
		});

		$('.form-datepicker ul.adults li a.selectable').on('click', function(evt) {
			var $target = $(evt.currentTarget);

			// unmark any selected options
			$target
				.parents('ul')
				.find('.selected')
				.removeClass('selected')
				;

			// select this option
			$target
				.addClass('selected')
				;

			// update the dropdown button text
			$('.form-datepicker #adults').val($target.text().trim());
			$('#form-datepicker-adults span.lbl').text($target.text().trim() + ' Adult' + (+$target.text().trim() > 1 ? 's' : ''));
		});

		$('.form-datepicker ul.adults li.footer a').on('click', function(evt) {
			var $target = $(evt.currentTarget);

			// unmark any selected options
			$target
				.parents('ul')
				.find('.selected')
				.removeClass('selected')
				;

			// update the dropdown button text
			$('.form-datepicker #adults').val('');
			$('#form-datepicker-adults span.lbl').text('Adults');
			evt.preventDefault();
		});
	});
})(jQuery);
