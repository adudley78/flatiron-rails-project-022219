class ApplicationController < ActionController::Base
  protect_from_forgery :with => :exception
  helper_method :current_user
  helper_method :logged_in?
  helper_method :require_login

  def authentication_required
    if !logged_in?

      redirect_to login_path
    end
  end

  def logged_in?
    !!current_user
  end

  def current_user
    # Return previously found user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_login
    unless logged_in?
      flash[:error] = "You do not have access to this page"

      redirect_to "projects/show"
    end
  end

end
