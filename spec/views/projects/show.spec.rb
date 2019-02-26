require 'rails_helper'

RSpec.describe "projects/show.html.erb", type: :view do

  it "displays the project name" do
    assign :project, Project.new(name: "Rails")

    render

    expect(rendered).to have_css("header h3", text: "Rails")
  end

end
