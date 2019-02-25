class AddDefaultValueToIssuesStatusColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :issues, :status, :integer, :default => 0
  end
end
