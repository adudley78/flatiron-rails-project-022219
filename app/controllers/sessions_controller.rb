class SessionsController < ApplicationController

  def new

  end

  def create
    user = User.find_by(:email => params[:email])
  end

end
