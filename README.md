<h1 align="center"> BBRFC Celtic Website Dev </h1>

<a href="https://travis-ci.org/bbrfc-celtic/website-dev" target="_blank"><img src="https://travis-ci.org/bbrfc-celtic/website-dev.svg?branch=master" alt="Build Status" /></a> [![Coverage Status](https://coveralls.io/repos/github/Mixone-FinallyHere/website-dev/badge.svg?branch=master)](https://coveralls.io/github/Mixone-FinallyHere/website-dev?branch=master)

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Goal of the project</a></li>
<li><a href="#sec-2">2. Main features</a>
<ul>
<li><a href="#sec-2-1">2.1. Landing page</a></li>
<li><a href="#sec-2-2">2.2. Each section</a></li>
<li><a href="#sec-2-3">2.3. 'More' section</a></li>
</ul>
</li>
<li><a href="#sec-3">3. What tools does it use?</a>
<ul>
<li><a href="#sec-3-1">3.1. Content generation and template system, building the website</a>
<ul>
<li><a href="#sec-3-1-1">3.1.1. Deployment</a></li>
</ul>
</li>
<li><a href="#sec-3-2">3.2. Dependency manager</a></li>
<li><a href="#sec-3-3">3.3. Stylesheets</a>
<ul>
<li><a href="#sec-3-3-1">3.3.1. Responsiveness</a></li>
<li><a href="#sec-3-3-2">3.3.2. Sponsors images = spriting with Compass</a></li>
</ul>
</li>
<li><a href="#sec-3-4">3.4. Documentation</a></li>
</ul>
</li>
<li><a href="#sec-4">4. Previewing, simple install</a></li>
<li><a href="#sec-5">5. "<i>Dynamic content</i>"</a></li>
<li><a href="#sec-6">6. Other "patches"</a></li>
<li><a href="#sec-7">7. Known issues</a></li>
<li><a href="#sec-8">8. Possible problems</a></li>
<li><a href="#sec-9">9. Improvements</a></li>
</ul>
</div>
</div>


# Goal of the project<a id="sec-1" name="sec-1"></a>

To create a no-bullshit-attractive-static-HTML-website and give the
impression there is some "dynamic" content in it. Cleanliness and
clarity are important.


# Main features<a id="sec-2" name="sec-2"></a>

## Landing page<a id="sec-2-1" name="sec-2-1"></a>

-   Full width slideshow with pictures of the different sections of
    the club. The pictures are shuffled on every refresh so people
    cannot complain a certain picture is always there when they open
    the page.
-   Facebook Page plugin
-   Gallery with 20 randomly chosen pictures from the Facebook
    page. Updated every day.
-   Calendar showing ALL individual calendars from
    Teamer/Teamingly/<any-sports-team-management-tool> AND facebook
    events from the Facebook page. The Facebook events are only
    updated at a certain time every day, so updates do not occur
    instantaneously.
-   Sponsors images with links. Good visibility is important.
-   Footer with all social buttons and contact info. Very easy to
    send a quick email or check our address.

## Each section<a id="sec-2-2" name="sec-2-2"></a>

-   General information
-   A customised calendar showing all trainings and fixtures. It is
    connected to Teamer/Teamingly/<any-sports-team-management-tool>.

## 'More' section<a id="sec-2-3" name="sec-2-3"></a>

This section is reserved for other matters like the history of the
club and other extra-curricular activities.

# What tools does it use?<a id="sec-3" name="sec-3"></a>

## Content generation and template system, building the website<a id="sec-3-1" name="sec-3-1"></a>

[Middleman](<https://middlemanapp.com/>) (a Ruby static site
generator) using [Slim](<http://slim-lang.com/>) as a template
engine.

There are some helpers defined in `config.rb` like `nav_link`,
`file_link`, `create_heading` and `page_title` that help when
writing the markup.

Others are provided by the [Padrino
framework](<http://www.padrinorb.com/>).

### Deployment<a id="sec-3-1-1" name="sec-3-1-1"></a>

Pushing will trigger a Travis build. Travis will build the site,
run some tests and upload to another GitHub-Pages-enabled-repo
using the `middleman-deploy` gem and an access token.

This behaviour can be avoid by committing and including the text
`[ci skip]` somewhere in the commit message.

Pull requests will not build.

The website can also be deployed by running `rake deploy_droplet`,
if a server is configured beforehand. Just figure something out
with the `/build/` folder.

Check the Rakefile, config.rb and .travis.yml !

## Dependency manager<a id="sec-3-2" name="sec-3-2"></a>

RubyGems are all provided in the Gemfile to use with Bundler.

[Sprockets](<https://github.com/sstephenson/sprockets>) is used to
manage JS assets mainly. It concatenates and uglifies all the
necessary files. The latter are 'imported' with `//= require`

Rakefile to execute simple tasks is available too.

## Stylesheets<a id="sec-3-3" name="sec-3-3"></a>

Sass files are automatically generated, the main Sass file is
located at: `assets/css/style.sass`, and it uses partials (with
`@import`, not Sprockets!) from the same folder and other gems (like
bootstrap). Compiles to `assets/css/style.css`, which is
compressed.

Another stylesheet - `assets/css/delayed.sass` - is loaded after
the document is ready, to make HTML parsing and rendering seem a
bit faster.

### Responsiveness<a id="sec-3-3-1" name="sec-3-3-1"></a>

Bootstrap framework (v3.3.5) - <http://getbootstrap.com>.

### Sponsors images = spriting with Compass<a id="sec-3-3-2" name="sec-3-3-2"></a>

All sponsor images are put in a folder which is then passed to
Compass to generate the sprite PNG and the necessary CSS. This
process is automatic and makes it very simple to just add or
remove sponsors when needed.

Copy an image to `/assets/img/sponsors/` and it will be available
with the class `.sponsors-<name-of-image>`.

The images are then put in a kind of 'masonry' layout, which does
not look too bad.

## Documentation<a id="sec-3-4" name="sec-3-4"></a>

OPTIONAL: Emacs Org mode - to generate docs
(`README.md`). Otherwise just edit markdown.

# Previewing, simple install<a id="sec-4" name="sec-4"></a>

First two things are bundler and rake. Install all dependencies with
`bundle install`.

Then run:

`rake preview` or `middleman server`.

The site should be available at:

`localhost:4567/`

Everything works out of the box, if you have a JavaScript runtime,
like JavaScriptCore for Mac OS X (Webkit) or something like Node
JS. Otherwise install one of these or uncomment the line `gem
  therubyracer` in the Gemfile and run bundler to have a dedicated
Ruby-Javascript runtime.

# "*Dynamic content*"<a id="sec-5" name="sec-5"></a>

Files in the partials folder mainly. Generated with PHP scripts
(using Facebook Graph API) elsewhere and pushed with a Machine User
every X minutes using cron.

It will generate:

1.  A number of `<img>` tags (10) with random pictures, to use with a
    gallery in the landing page.
2.  A JSON object containing all Facebook events, stored in a
    variable in a `.js` file (for simplicity and so Sprockets can
    require it)
3.  Updated league tables with scores, to include in the different
    sections.

Events that Fullcalendar shows that are not on Facebook are updated
on the fly with Ajax.

A Facebook page plugin is also used in the landing page. This is a
simplified version of the original one, which was built from scratch
using the Facebook Graph API, and is more convenient. This one, and
the fotorama gallery are loaded only when the user scrolls past a
certain point, to avoid having to load it at the beginning.

# Other "patches"<a id="sec-6" name="sec-6"></a>

-   `middleman-alias` gem is used to make redirects. For example, some
    people still append `/site/en/` or `/site/index.php` as `/`, since
    that was the normal use with the old website. For the rest of
    pages, a custom 404 is provided to go back to the home page.

-   Contact forms supported by Formspree - although a good idea - are
    dropped for the moment due to the lack of a clear Privacy
    Policy. A contact list is provided instead.

# Known issues<a id="sec-7" name="sec-7"></a>

# Possible problems<a id="sec-8" name="sec-8"></a>

Automatically pushing "dynamic content" with the Machine User could
break stuff or have unintended results. However Travis CI could avoid
this, since it runs tests before deployment, and if one step fails, it
does not carry on, hence it will not deploy.

# Improvements<a id="sec-9" name="sec-9"></a>

-   Include PHP scripts in this repo or submodule.

-   Using the Google Maps API, create a nice map showing where all
    members come from, extracting info using the Facebook Graph
    API. Then link it to string: "most international rugby club".

-   Make use of the blogging feature/extension to make the website
    feel even more 'alive' (who is going to be in charge of writing
    posts/news/updates?)

-   Make use of Middleman's i18n feature and translate the content to
    Dutch and French.

-   Related to above: use `data` folder for different purposes. Read middleman docs on
    it.
