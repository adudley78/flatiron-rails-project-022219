class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # Log them in
      redirect_to root_path
    else
      render :new
    end
  end

  private

  # Implement strong params
  def user_params
    params.require(:user).permit(:email)
  end

end
