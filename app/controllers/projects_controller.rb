class ProjectsController < ApplicationController
  before_action :set_project!, only: [:show, :destroy]

  def index
    @project = Project.new
    @projects = Project.all
    # @issues = @project.issues

    respond_to do |format|
      format.html { render 'index.html' }
      format.json { render 'index.js' }
    end
  end

  def show
    @issues = @project.issues
    @issue = Issue.new
    # @issue = @project.issues.build

    # respond_to do |format|
    #   format.html #{ render :show }
    #   format.json { render json: @project.issues.build.to_json(only: [:id, :description, :status])}
    # end
  end

  def create
    @project = Project.new(project_params)
    if @project.save

      # redirect_to project_url(@project)
      respond_to do |format|
        format.html { redirect_to project_url(@project) }
        format.js
      end
    else
      @projects = Project.all

    end
  end

  def destroy
    @project.destroy

    redirect_to projects_path
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

  def set_project!
    @project = Project.find(params[:id])
  end

end
