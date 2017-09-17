class TrackListsController < ApplicationController
  def index
    @trackLists = TrackList.all
    @tracks = Track.all

    # TODO N+1問題解決できる？？
    trackLists = @trackLists.as_json
    trackLists.each do |item|
      item[:tracks] = @tracks.where(track_id: [item['id']])
    end
    render json: trackLists
  end
end
