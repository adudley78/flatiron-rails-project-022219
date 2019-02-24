class ProjectsController < ApplicationController

  # render all projects to projects/index.html.erb
  def index
    @projects = Project.all
    # raise @projects.inspect
  end

end
