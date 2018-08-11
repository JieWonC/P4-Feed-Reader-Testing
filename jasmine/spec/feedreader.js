/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a URL defined that the URL is not empty', function () {
             for(let feed of allFeeds) {
                 let feedUrl = feed.url;
                 // Using toBeDefined method to check weather a class/field is empty or not
                 expect(feedUrl).toBeDefined();
                 expect(feedUrl.length).not.toBe(0);
             }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined that the name is not empty', function() {
             for(let feed of allFeeds) {
                 let feedName = feed.name;

                 expect(feedName).toBeDefined();
                 expect(feedName.length).not.toBe(0);
             }
         });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        const body = $('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
             expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when the icon is clicked', function() {
              const menuIcon = $('.menu-icon-link');
              // Test for menu display
              menuIcon.click();
              expect(body.hasClass('menu-hidden')).toBe(false);
              // Test for menu hide
              menuIcon.click();
              expect(body.hasClass('menu-hidden')).toBe(true);
          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function (done) {
             loadFeed(0, done);
         });

         it('there is at least a single entry', function() {
             expect($('.feed .entry').length).toBeGreaterThan(0);
         })

    })

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let previousFeed; // variable for previous feed(content)
         let newFeed; // variable for new feed(content)

         beforeEach(function(done) {
             loadFeed(0, function() {
                 previousFeed = $('.feed').html();
                 done();
             });
         });

         it('is changed content', function(done) {
             loadFeed(1, function() {
                 newFeed = $('.feed').html();
                 expect(newFeed).not.toEqual(previousFeed);
                 done();
             });
         });
    });
}());