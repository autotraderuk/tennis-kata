Tennis kata

## Quick Start

Run these commands:

<pre>
npm install
bower install
gulp
</pre>

You will get an error message if gulp (or bower) isn't installed. If so then you need to run these additional command:

<pre>
npm install -g bower
bower install
</pre>

<pre>
npm install -g gulp
gulp
</pre>

The gulp build pipeline will run tests, copy files and then spin up a local server on http://localhost:8080 .

Once you have a local server you can run protractor tests against it. To do this you need to also
run a local selenium server.

To do this, run this command in a new window:

<pre>webdriver-manager start</pre>

Once this is done, open a third window and run this command:

<pre>gulp end-to-end</pre>
