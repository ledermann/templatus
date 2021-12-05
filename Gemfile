source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.3'

# Full-stack web application framework. (https://rubyonrails.org)
gem 'rails', '~> 6.1.4', '>= 6.1.4.1'

# Pg is the Ruby interface to the {PostgreSQL RDBMS}[http://www.postgresql.org/] (https://github.com/ged/ruby-pg)
gem 'pg', '~> 1.1'

# Puma is a simple, fast, threaded, and highly parallel HTTP 1.1 server for Ruby/Rack applications (https://puma.io)
gem 'puma', '~> 5.0'

# Use webpack to manage app-like JavaScript modules in Rails (https://github.com/rails/webpacker)
gem 'webpacker', '>= 6.0.0.rc.5'

# Boot large ruby/rails apps faster (https://github.com/Shopify/bootsnap)
gem 'bootsnap', '>= 1.4.4', require: false

# Timezone Data for TZInfo (https://tzinfo.github.io)
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# A Ruby client library for Redis (https://github.com/redis/redis-rb)
gem 'redis'

# Error reports you can be happy about. (https://github.com/honeybadger-io/honeybadger-ruby)
gem 'honeybadger'

# Tame Rails' multi-line logging into a single line per request (https://github.com/roidrage/lograge)
gem 'lograge'

# Middleware for enabling Cross-Origin Resource Sharing in Rack apps (https://github.com/cyu/rack-cors)
gem 'rack-cors', require: 'rack/cors'

# Rack middleware for defining a canonical host name. (https://github.com/tylerhunt/rack-canonical-host)
gem 'rack-canonical-host'

# Brotli compression for Rack responses (http://github.com/marcotc/rack-brotli/)
gem 'rack-brotli'

# Simple, efficient background processing for Ruby (https://sidekiq.org)
gem 'sidekiq'

# Sidekiq Cron helps to add repeated scheduled jobs (http://github.com/ondrejbartas/sidekiq-cron)
gem 'sidekiq-cron'

group :development, :test do
  # Ruby fast debugger - base + CLI (https://github.com/deivid-rodriguez/byebug)
  gem 'byebug', platforms: %i[mri mingw x64_mingw]

  # Rails application preloader (https://github.com/rails/spring)
  gem 'spring'

  # Autoload dotenv in Rails. (https://github.com/bkeepers/dotenv)
  gem 'dotenv-rails'

  # rspec command for spring (https://github.com/jonleighton/spring-commands-rspec)
  gem 'spring-commands-rspec'

  # RSpec for Rails (https://github.com/rspec/rspec-rails)
  gem 'rspec-rails'

  # Automatic Ruby code style checking tool. (https://github.com/rubocop/rubocop)
  gem 'rubocop', require: false

  # Automatic performance checking tool for Ruby code. (https://github.com/rubocop/rubocop-performance)
  gem 'rubocop-performance', require: false

  # Automatic Rails code style checking tool. (https://github.com/rubocop/rubocop-rails)
  gem 'rubocop-rails', require: false

  # Code style checking for RSpec files (https://github.com/rubocop/rubocop-rspec)
  gem 'rubocop-rspec', require: false
end

group :development do
  # A debugging tool for your Ruby on Rails applications. (https://github.com/rails/web-console)
  gem 'web-console', '>= 4.1.0'

  # Profiles loading speed for rack applications. (https://miniprofiler.com)
  # gem 'rack-mini-profiler', '~> 2.0'

  # Listen to file modifications (https://github.com/guard/listen)
  gem 'listen', '~> 3.3'

  # Guard gem for RSpec (https://github.com/guard/guard-rspec)
  gem 'guard-rspec', require: false
end

group :test do
  # Code coverage for Ruby (https://github.com/simplecov-ruby/simplecov)
  gem 'simplecov', require: false
end
