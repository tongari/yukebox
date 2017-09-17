class ChangeDatatypeVideoIdOfTracks < ActiveRecord::Migration
  def change
    change_column :tracks, :video_id, :string
  end
end
