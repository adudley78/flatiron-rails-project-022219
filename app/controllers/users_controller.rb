class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # raise params.inspect
    @user = User.new(user_params)
    if @user.save

      # add user to project association so I get the path I need below
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end

end
