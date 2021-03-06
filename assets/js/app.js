(function($) {
	'use strict';
	$(document).ready(function() {

		var startDate = new Date(),
			dateStr = (startDate.getUTCMonth()+1) + '/' + (startDate.getUTCDate()+1) + '/' + startDate.getUTCFullYear()
			;

		// set a valid initial checkin date
		$('.form-datepicker #checkin').val(dateStr);

		$('.form-datepicker').on('submit', function(e) {
			if ( $('#adults').val().length < 1 ||
				$('#checkin').val().length < 1 ||
				$('#hotelid').val().length < 1 ||
				$('#langid').val().length < 1 ||
				$('#nights').val().length < 1 ||
				$('#rooms').val().length < 1 ) {
				e.preventDefault();
				return false;
			}
		});

		$('.form-datepicker .input-daterange')
			.datepicker({
				autoclose: true,
				clearBtn: true,
				format: 'D mm.dd.yy',
				inputs: [
					$('#arrival'),
					$('#departure'),
				],
				startDate: '+1d',
			})
			.on('changeDate clearDate', function() {
				var checkinDate,
					diffDays,
					diffTime,
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
				$('.form-datepicker #checkin').val((checkinDate.getUTCMonth()+1) + '/' + checkinDate.getUTCDate() + '/' + checkinDate.getUTCFullYear());

				if (arrival && departure) {
					if (arrival.valueOf() < departure.valueOf() || arrival.valueOf() === departure.valueOf()) {
						diffTime = departure.getTime() - arrival.getTime();
						diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
					}
				}
				// set the number of nights for the stay
				$('.form-datepicker #nights').val(diffDays||1);
			})
			;

		$('.form-datepicker .input-group-addon').on('click', function(evt) {
			$(evt.currentTarget)
				.siblings('input#arrival, input#departure')
				.datepicker('show')
				;
		});

		$('.form-datepicker .dropdown-container').on('show.bs.dropdown', function(evt) {
			var $window = $(window),
				$target = $(evt.currentTarget),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop(),
				offset = $target.parent().offset(),
				yorient = 'down',
				top_overflow, bottom_overflow
				;

			$target.removeClass('dropup dropdown');

			top_overflow = -scrollTop + offset.top;
			bottom_overflow = scrollTop + windowHeight - offset.top;
			if (Math.max(top_overflow, bottom_overflow) === bottom_overflow) {
				yorient = 'down';
			} else {
				yorient = 'up';
			}

			$target.addClass('drop' + yorient);
		});

		$('.form-datepicker ul.hotelid li.footer a').on('click', function(evt) {
			var $target = $(evt.currentTarget);

			// unmark any selected options
			$target
				.parents('ul')
				.find('.selected')
				.removeClass('selected')
				;

			// update the dropdown button text
			$('.form-datepicker #hotelid').val('');
			$('#form-datepicker-hotelid span.lbl').text('Location');
			evt.preventDefault();
		});

		$('.form-datepicker ul.hotelid li a.selectable').on('click', function(evt) {
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
			$('.form-datepicker #hotelid').val($target.attr('value'));
			$('#form-datepicker-hotelid span.lbl').text($target.text().split('–').pop().trim());
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
