class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :user_id

  has_many :users, through: :issues

end
