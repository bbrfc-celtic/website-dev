# coding: utf-8
###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end


###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
helpers do

  def file_link(file)
    "/assets/static/" + file + ".pdf"
  end


  def nav_link(link_text, link_path)
    class_name = current_page.data.who?(link_text) ? 'active' : nil

    content_tag(:li, :class => class_name) do
      link_to link_text, link_path
    end
  end

  def page_title
    main_title = "BBRFC Celtic"
    separator = " - "
    [
      current_page.data.who,
      main_title
    ].join(separator)
  end

  def create_heading
    headings = current_page.data.headings
    output = content_tag(:div, :class => "page-header") do
      content_tag(:h2, headings.first, :id => headings.first.delete(' '))
    end
    headings << headings.shift
    return output
  end

  def create_nav
    content_tag(:div, :id => "myScrollSpy", :class => "col-md-3 hidden-xs hidden-sm") do
      content_tag(:ul, :class => "nav nav-pills nav-stacked") do
        current_page.data.headings.map do |heading|
          content_tag(:li) do
            link_to heading, "#" + heading.delete(' ')
          end
        end.join(' ')
      end
    end
  end
end


# Assets
set :css_dir, "assets/css"
set :js_dir, "assets/js"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/img"
set :partials_dir, "partials"


sprockets.append_path 'partials/dynamic/'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  activate :minify_html
  # Minify Javascript on build
  activate :minify_javascript, :inline => true
  set :js_compressor, Uglifier.new(:mangle => {:toplevel => true}, :compress => {:unsafe => true}, :output => {:comments => :none})
  activate :alias
  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  deploy.remote   = 'https://${GH_TOKEN}@github.com/bbrfc-celtic/bbrfc-celtic.github.io'
  deploy.branch   = 'master' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # =>  deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
