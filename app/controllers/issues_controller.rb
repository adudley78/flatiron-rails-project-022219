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
    raise params.inspect
  end

  private

  def issue_params
    params.require(:issue).permit(:description)
  end

end
