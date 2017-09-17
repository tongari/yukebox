class Track < ActiveRecord::Base
  validates :track_id, :user_id, :video_id, :track_num, :track_title, presence: true
  has_many :track_lists
end
