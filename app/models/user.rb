class User < ApplicationRecord
  has_many :projects
  has_many :projects, through: :issues
  validates :email, :presence => true
  validates :email, :uniqueness => true
end