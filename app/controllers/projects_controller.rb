class ProjectsController < ApplicationController

  # render all projects to projects/index.html.erb
  def index
    @projects = Project.all
    # raise @projects.inspect
  end

  def show
    @project = Project.find(params[:id])
  end

end
