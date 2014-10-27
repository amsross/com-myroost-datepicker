com-myroost-datepicker [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
======================

## Insertion on page

Include the form on the page:

	<form role="form" class="row form-datepicker" action="https://reservations.millenniumhotels.com/ibe/index.aspx" method="GET">
		<div class="form-group clearfix input-daterange">
			<div class="col-xs-12 col-sm-3">
				<div class="col-xs-12 input-group date">
					<input type="text" class="form-control" id="arrival" name="start" value="" placeholder="Arrival" autocomplete="off" required />
					<span class="input-group-addon">
						<i class="glyphicon glyphicon-calendar"></i>
					</span>
				</div>
			</div>
			<div class="col-xs-12 col-sm-3">
				<div class="col-xs-12 input-group date">
					<input type="text" class="form-control" id="departure" name="end" value="" placeholder="Departure" autocomplete="off" required />
					<span class="input-group-addon">
						<i class="glyphicon glyphicon-calendar"></i>
					</span>
				</div>
			</div>
			<div class="col-xs-12 col-sm-3">
				<div class="dropup">
					<button class="form-control btn btn-default dropdown-toggle" type="button" id="form-datepicker-adults" data-toggle="dropdown">
						<span class="lbl">Adults</span>
						<span class="caret"></span>
					</button>
					<ul class="dropdown-menu adults" role="menu" aria-labelledby="form-datepicker-adults">
						<li class="header"><a># of Adults</a></li>
						<li><a href="javascript:;" class="selectable selected"><span>1</span></a></li>
						<li><a href="javascript:;" class="selectable"><span>2</span></a></li>
						<li><a href="javascript:;" class="selectable"><span>3</span></a></li>
						<li><a href="javascript:;" class="selectable"><span>4</span></a></li>
						<li class="footer"><a>Clear</a></li>
					</ul>
				</div>
			</div>
			<div class="col-xs-12 col-sm-3">
				<input class="form-control" id="adults" name="adults" value="1" type="hidden" />
				<input class="form-control" id="checkin" name="checkin" value="" type="hidden" />
				<input class="form-control" id="hotelid" name="hotelid" value="13641" type="hidden" />
				<input class="form-control" id="langid" name="langid" value="1" type="hidden" />
				<input class="form-control" id="nights" name="nights" value="1" type="hidden" />
				<input class="form-control" id="rooms" name="rooms" value="1" type="hidden" />

				<button class="form-control btn" id="submit" value="Availability" type="Submit" >Availability</button>
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
