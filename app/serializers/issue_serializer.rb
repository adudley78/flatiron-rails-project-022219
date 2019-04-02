class IssueSerializer < ActiveModel::Serializer
  attributes :id, :description, :status

  belongs_to :project
  belongs_to :user

end
