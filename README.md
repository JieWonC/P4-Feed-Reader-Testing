# FEND P4: Feed Reader Testing


## Overview
This is a 4th project of Udacity's Front-End Web Developer Nanodegree (FEND). Using *Jasmine* testing framework create a series of test suites for more efficiency.

## Test List
1. Suite #1: RSS feeds
* Tests to make sure that the allFeeds variable has been defined and that it is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

2. Suite #2: The menu
* Test that ensures the menu element is hidden by default.
* Test that ensures the menu changes visibility when the menu icon is clicked.

3. Suite #3: Initial Entries
* Test that ensures when the loadFeed function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

4. Suite #4: New Feed Selection
* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


## Installation
1. Clone this repo
```
$ git clone https://github.com/JieWonC/P4-Feed-Reader-Testing.git
```
2. Run the index.html file in your browser
3. See the test completed and the result at the bottom of the page.

## Resources
* [Jasmine](http://jasmine.github.io/)
* Udacity FEND Project 4: Feed Reader Testing

### License
This application has no license.
