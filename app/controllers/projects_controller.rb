class ProjectsController < ApplicationController
  before_action :authentication_required

  # render all projects to projects/index.html.erb
  def index
    # If you're not logged in, you can't see this and go back to login page
      @project = Project.new
      @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])

    @issue = Issue.new
  end

  def create
    # raise params.inspect
    @project = Project.new(project_params)
    if @project.save

      redirect_to project_path(@project)
    else
      @projects = Project.all


      render :index
    end
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end
