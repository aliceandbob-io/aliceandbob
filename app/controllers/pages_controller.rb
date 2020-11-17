class PagesController < ApplicationController
  def content
    if user_signed_in?
      @email = current_user.email
    end
  end
end
