module IssuesHelper

  def li_class_for_issue(issue)
    "completed" if issue.complete?
  end

end
