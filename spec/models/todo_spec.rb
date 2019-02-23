require 'rails_helper'

RSpec.describe Todo, type: :model do

  describe "attributes" do
    it "must have a title" do
      todo = Todo.create(completed: false) # arguments contain no title

      expect(todo.valid?).to eq(false)
    end
    pending "has a completed attributes"

  end

end
