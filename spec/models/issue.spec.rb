require 'rails_helper'

RSpec.describe Issue, type: :model do

  describe "attributes" do
    it "must have a description and a status" do
      issue = Issue.create(description: true, status: true) # arguments contain a name

      expect(issue.valid?).to eq(true)
    end
  end

end
