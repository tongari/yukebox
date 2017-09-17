class CreateTrackLists < ActiveRecord::Migration
  def change
    create_table :track_lists do |t|
      t.string :title
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
