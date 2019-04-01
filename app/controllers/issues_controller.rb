class IssuesController < ApplicationController
  before_action :set_issue!, only: [:update, :destroy]

  def create
    @project = Project.find(params[:project_id])
    @issue = @project.issues.build(issue_params)
    if @issue.save

      redirect_to project_path(@project)
    else

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

end
