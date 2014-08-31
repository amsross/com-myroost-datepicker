com-myroost-datepicker [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
======================

## Insertion on page

Include the form on the page:

	<form role="form" class="row form-datepicker" action="https://reservations.millenniumhotels.com/ibe/index.aspx" method="GET">
		<div class="form-group">
			<div class="col-xs-12 col-sm-6">
				<div class="col-xs-12 input-daterange input-group">
					<div class="col-xs-12 input-group date check_in">
						<input type="text" class="form-control" id="check_in" name="check_in" value="" placeholder="Check In" required />
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-calendar"></i>
						</span>
					</div>
					<span class="input-group-addon invisible">&ndash;</span>
					<div class="col-xs-12 input-group date check_out">
						<input type="text" class="form-control" id="check_out" name="check_out" value="" placeholder="Check Out" required />
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-calendar"></i>
						</span>
					</div>
				</div>
			</div>
			<div class="col-xs-6 col-sm-2">
				<select class="form-control" id="adults" name="adults" required>
					<option value="1" selected>Adult</option>
					<option value="1">1 Adult</option>
					<option value="2">2 Adults</option>
					<option value="3">3 Adults</option>
					<option value="4">4 Adults</option>
					<option value="5">5 Adults</option>
					<option value="6">6 Adults</option>
					<option value="7">7 Adults</option>
					<option value="8">8 Adults</option>
					<option value="9">9 Adults</option>
				</select>
			</div>
			<div class="col-xs-6 col-sm-2">
				<select class="form-control" id="child" name="child"required>
					<option value="0" selected>Child</option>
					<option value="0">0 Children</option>
					<option value="1">1 Child</option>
					<option value="2">2 Children</option>
					<option value="3">3 Children</option>
					<option value="4">4 Children</option>
					<option value="5">5 Children</option>
					<option value="6">6 Children</option>
					<option value="7">7 Children</option>
					<option value="8">8 Children</option>
					<option value="9">9 Children</option>
				</select>
			</div>
			<div class="col-xs-12 col-sm-2">
				<input class="form-control" id="checkin" name="checkin" value="" type="hidden" />
				<input class="form-control" id="nights" name="nights" value="1" type="hidden" />
				<input class="form-control" id="hotelid" name="hotelid" value="13641" type="hidden" />
				<input class="form-control" id="langid" name="langid" value="1" type="hidden" />
				<input class="form-control" id="rooms" name="rooms" value="1" type="hidden" />

				<input class="form-control" id="submit" name="submit" value="Submit" type="Submit" />
			</div>
		</div>
	</form>

Include the style assets:

	<link rel="stylesheet" href="assets/css/main.min.css" ></link>

Include the javascript assets:

	<script src="assets/js/scripts.min.js" ></script>

## Development Workflow

1. Install global dependencies

		npm install -g grunt-cli

2. Install project dependencies

		npm install

3. Do work...

		vi <filename>
		git add <filenames>
		git commit
		git push origin master

4. Final build (optional)

		grunt build
