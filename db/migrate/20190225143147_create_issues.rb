class CreateIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :description
      t.string :status
      t.string :notes
      t.integer :project_id

      t.timestamps
    end
  end
end
