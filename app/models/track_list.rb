class TrackList < ActiveRecord::Base
  validates :user_id, :title, presence: true
  validates :title, length: {maximum: 50}
  belongs_to :track
end
