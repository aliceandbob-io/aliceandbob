class ApplicationController < ActionController::Base
  def default_url_options
    if Rails.env.production?
      { host: 'https://aliceandbob.io'}
    else
      { host: 'http://localhost:3000/' }
    end
  end
end
