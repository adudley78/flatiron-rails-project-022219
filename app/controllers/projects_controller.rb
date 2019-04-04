class ProjectsController < ApplicationController

  def index
    @project = Project.new
    @projects = Project.all
    @issues = @project.issues
    respond_to do |format|
      format.html { render 'index.html' }
      format.json { render 'index.js' }
    end
    # render :index
  end

  def show
    @project = Project.find(params[:id])
    @issues = @project.issues
    @issue = Issue.new
    @issue = @project.issues.build

    respond_to do |format|
      format.html #{ render :show }
      format.json { render json: @project.issues.build.to_json(only: [:id, :description, :status])}
    end
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
