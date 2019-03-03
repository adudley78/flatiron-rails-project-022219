class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || "is not an email") unless
      value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class User < ApplicationRecord
  include ActiveModel::Validations
  has_secure_password

  has_many :issues
  has_many :projects, through: :issues

  validates :email, :presence => true, email: true
  validates :email, :uniqueness => true

 def self.find_or_create_by_omniauth(auth_hash)
   self.where(:email => auth_hash["info"]["email"]).first_or_create do |user|
     user.password = SecureRandom.hex
   end
 end

end
