class Project < ApplicationRecord
  # add association methods to model
  has_many :issues
  validates :name, :presence => true
end
