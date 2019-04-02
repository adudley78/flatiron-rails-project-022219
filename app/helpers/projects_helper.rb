module ProjectsHelper

  # return hash map with model attributes
  def projects_as_json(projects)
    projects.collect do |project|
      {
        :id => project.id,
        :name => project.name,
        :status => project.status,
        :user_id => project.user_id,
      }
    end.to_json
  end


  # def li_class_for_project(project)
  #   "completed" if project.complete?
  # end
  #
  # def li_for_project(project)
  #   content_tag_for :li, project, :class => li_class_for_project(project) do
  #     yield
  #   end
  # end
  #
  # # Render form_for inline within the method
  # def form_for_project_status(project)
  #   form_for(project) do |f|
  #     f.check_box :status, :class => "toggle", :checked => project.complete?
  #   end
  # end

end
