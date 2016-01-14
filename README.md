Originally I was trying to create a simple deriviative of [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate)
that uses gulp instead of grunt.

I'm now starting to change other parts of it. I'm slowly implementing a tennis kata using angular, protractor and karma.

## Quick Start

Run these commands:

<pre>
npm install
bower install
gulp
</pre>

The gulp build pipeline will run tests, copy files and then spin up a local server on http://localhost:8080 .

Once you have a local server you can run protractor tests against it. To do this you need to also
run a local selenium server.

To do this, run this command in a new window:

<pre>webdriver-manager start</pre>

Once this is done, open a third window and run this command:

<pre>gulp end-to-end</pre>