class Issue < ApplicationRecord
  # add association methods to thi model
  belongs_to :project
  belongs_to :user
  validates :description, :presence => true
  validates :status, :presence => true

  scope :user_issues, -> (user){ where("user_id = ?", user.id) }

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
