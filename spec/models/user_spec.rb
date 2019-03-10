require 'rails_helper'

RSpec.describe User, type: :model do

  describe "attributes" do
    it "must have an email and password" do
      user = User.new(:email => "avalidemail@email.com", :password => "avalidpassword")

      expect(user).to be_valid
    end
  end

end
