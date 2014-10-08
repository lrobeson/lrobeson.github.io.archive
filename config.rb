# Compass / Sass config file
#
# This file is only needed for Compass/Sass integration. If you are not using
# Compass, you may safely ignore or delete this file.
# All config options: http://compass-style.org/help/documentation/configuration-reference/

# Environment setting, 3 options:
# dev_max: sourcemaps, line comments, expanded output (not ideal if committing CSS to a code repo)
# dev_min: sourcemaps and expanded output (good for theming in progress)
# production: compressed CSS with no debug info
#
# Change this to :production when ready to deploy the CSS to the live server.
environment = :dev_min

# Location of the theme's resources.
css_dir = "css"
fonts_dir = "css/fonts"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

# Require any additional compass plugins installed on your system.
require 'compass'
require 'breakpoint'
require 'sass-globbing'
require 'singularitygs'
require 'singularity-extras'

#
# You probably don't need to edit anything below this.
#

# enable Sass sourcemaps to make live edits in browser
sourcemap = (environment == :production) ? false : true

# You can select your preferred output style here (can be overridden via the
# command line):
# default: output_style = (environment == :development) ? :expanded : :compressed
output_style = (environment == :production) ? :compressed : :expanded

# Show debugging comments during development.
# default: line_comments = (environment == :development) ? true : false
line_comments = (environment == :dev_max) ? true : false

# Output debugging info in development mode.
sass_options = (environment == :dev_max && debug == true) ? {:debug_info => true} : {}

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server root.
relative_assets = true

# Increased decimal precision.
# 33.33333% instead of 33.333%
Sass::Script::Number.precision = 5

# Disable cache busting on image assets.
asset_cache_buster :none

# Show debug information / partial location for FireSass and similar tools.
# Uncomment to enable.
# debug = (environment == :dev_max) ? true : false
