require 'rails_helper'

RSpec.describe Project, type: :model do

  describe "attributes" do
    it "must have a name" do
      project = Project.create(name: true)
      expect(project.valid?).to eq(true)
    end
  end

end
