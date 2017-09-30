class TrackList < ActiveRecord::Base
  validates :user_id, :title, presence: true
  validates :title, length: {maximum: 50}

  has_many :tracks, primary_key: :id, foreign_key: :track_id, dependent: :destroy
  belongs_to :user
end
