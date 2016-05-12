class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :short_description
      t.string :url
      t.integer :creator_id

      t.timestamps null: false
    end 
  end
end
