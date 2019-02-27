class User < ApplicationRecord
  has_secure_password

  has_many :projects
  has_many :projects, through: :issues

  validates :email, :presence => true
  validates :email, :uniqueness => true

end
