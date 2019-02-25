class UpdateIssuesChangeStatusColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :issues, :status, :integer
  end
end
