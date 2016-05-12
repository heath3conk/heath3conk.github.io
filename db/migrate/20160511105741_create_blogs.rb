class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :subtitle
      t.string :partial_name
      t.datetime :original_date
      t.integer :author_id

      t.timestamps null: false
    end
  end
end
