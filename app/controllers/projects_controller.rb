class ProjectsController < ApplicationController

  # render all projects to projects/index.html.erb
  def index
    @project = Project.new
    @projects = Project.all
    # raise @projects.inspect
  end

  def show
    @project = Project.find(params[:id])

    @issue = @project.issues.build
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
