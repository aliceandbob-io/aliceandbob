class ApplicationController < ActionController::Base
  def default_url_options
    if Rails.env.production?
      { host: 'https://aliceandbob.io'}
    else
      { host: 'http://localhost:3000/' }
    end
  end

  def after_sign_out_path_for(resource)
    online_pgp_tool_path
  end
end
