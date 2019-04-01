module IssuesHelper

  def li_class_for_issue(issue)
    "completed" if issue.complete?
  end

  def li_for_issue(issue)
    content_tag_for :li, issue, :class => li_class_for_issue(issue) do
      yield
    end
  end

  # Render form_for inline within the method
  def form_for_issue_status(issue)
    form_for([issue.project, issue]) do |f|
      # binding.pry
      # f.check_box :status, :class => "toggle", :checked => issue.complete?
      f.hidden_field(:status, :value => (issue.complete? ? 1 : 0))
      # binding.pry
      f.submit(:value => (issue.complete? ? "complete" : "incomplete"))
    end
  end

end

# create partial for complete/incomplete button or write directly into HTML
