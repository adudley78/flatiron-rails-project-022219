class ProjectsController < ApplicationController
  before_action :authentication_required

  # render all projects to projects/index.html.erb
  def index
    # If you're not logged in, you can't see this and go back to login page
      @project = Project.new
      @projects = Project.all
  end

  def show
    # only show issues that belong to this user
    # and when a new issue is created associate with the current user
      @project = Project.find(params[:id])
      @issue = Issue.new
      # @issues = Issue.where(:user_id => current_user.id)
  end

  def create
    # @user = current_user
    # @project = @user.projects.build(project_params)
    @project = Project.new(project_params)
    if @project.save

      redirect_to project_path(@project)
    else
      @projects = Project.all


      render :index
    end
  end

    def destroy
      @project = Project.find(params[:id])
      @project.destroy

      redirect_to project_path(@project)
    end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end
