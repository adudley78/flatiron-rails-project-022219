class Project < ApplicationRecord
  # add association methods to model
  has_many :issues
  has_many :users, through: :issues
  validates :name, :presence => true

  STATUS = {
    :incomplete => 0,
    :complete => 1
  }

  def complete?
    self.status == STATUS[:complete]
  end

  def incomplete?
    self.status == STATUS[:incomplete]
  end

end
