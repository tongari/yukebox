class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :track_id
      t.integer :user_id
      t.string :video_id
      t.integer :track_num
      t.string :track_title

      t.timestamps null: false
    end
  end
end
