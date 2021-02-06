class OnlinePgpToolController < ApplicationController
  def online_pgp_tool
    if user_signed_in?
      @email = current_user.email
    end
  end
end
