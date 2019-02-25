class Project < ApplicationRecord
  # add association methods to model
  has_many :issues
end
