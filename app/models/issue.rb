class Issue < ApplicationRecord
  # add association methods to thi model
  belongs_to :project
  validates :description, :presence => true
end
