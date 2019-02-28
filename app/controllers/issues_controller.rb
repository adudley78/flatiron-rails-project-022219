class IssuesController < ApplicationController

  def create
    # find the parent
    @project = Project.find(params[:project_id])
    @issue = @project.issues.build(issue_params)
    if @issue.save

      redirect_to project_path(@project)
    else

      render "projects/show"
    end
  end

  def update
    @issue = Issue.find(params[:id])
    @issue.update(issue_params)

    redirect_to project_path(@issue.project)
  end

  def destroy
    @issue = Issue.find(params[:id])
    @issue.destroy

    redirect_to project_path(@issue.project)
  end

  private

  def issue_params
    params.require(:issue).permit(:description, :status, :user_id)
  end

end
