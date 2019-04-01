class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :status

  has_many :users, through: :issues

end
