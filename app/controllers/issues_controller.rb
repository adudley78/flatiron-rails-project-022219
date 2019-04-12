class IssuesController < ApplicationController
  before_action :set_issue!, only: [:update, :destroy]
  before_action :set_project!, only: [:index, :create]

  def index
    @issues = @project.issues

    respond_to do |format|
      format.html { render 'index.html' }
      format.json { render 'index.js' }
    end
  end

  def create
    # @project = Project.find(params[:project_id])
    # @issue = current_user.issues.new(params[:issue])
    @issue = @project.issues.build(issue_params)
    if @issue.save
      # render 'projects/show'
      # render 'create.js'
      respond_to do |format|
        format.html { redirect_to project_path(@project) }
        format.js { redirect_to project_path(@project) }
        # binding.pry
      end
    else
      # binding.pry
      render "projects/show"
    end
  end

  def update
    # binding.pry
    @issue.update(:status => @issue.status == 0 ? 1 : 0)

    redirect_to project_path(@issue.project)
  end

  def destroy
    @issue.destroy

    redirect_to project_path(@issue.project)
  end

  private

  def issue_params
    params.require(:issue).permit(:description, :status, :user_id, :project_id)
  end

  def set_issue!
    @issue = Issue.find(params[:id])
  end

  def set_project!
    @project = Project.find(params[:project_id])
  end

end
