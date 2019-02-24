require 'rails_helper'

RSpec.describe Project, type: :model do

  describe "attributes" do
    it "must have a name" do
      project = Project.create(name: true, status:true) # arguments contain a name

      expect(project.valid?).to eq(true)
    end

    it "must have a status" do
      project = Project.create(status:true) # arguments contain a name

      expect(project.valid?).to eq(true)
    end
  end

end
