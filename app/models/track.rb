class Track < ActiveRecord::Base
  validates :track_id, :user_id, :video_id, :track_num, :track_title, presence: true
  belongs_to :track_list
end
