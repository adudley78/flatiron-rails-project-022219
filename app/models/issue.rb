class Issue < ApplicationRecord
  # add association methods to thi model
  belongs_to :project
  belongs_to :user
  validates :description, :presence => true
  validates :status, :presence => true

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
