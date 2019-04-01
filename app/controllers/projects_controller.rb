class ProjectsController < ApplicationController

  def index
    render json: Project.all
      # @project = Project.new
      # @projects = Project.all
  end

  def show
      @project = Project.find(params[:id])
      # @issue = Issue.new
      @issue = @project.issues.build
  end

  def create
    @project = Project.new(project_params)
    if @project.save

      redirect_to project_url(@project)
    else
      @projects = Project.all

      render :index
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    render :index
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end
