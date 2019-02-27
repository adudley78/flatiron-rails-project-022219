class Project < ApplicationRecord
  # add association methods to model
  has_many :issues
  has_many :users, through: :issues
  validates :name, :presence => true
end
