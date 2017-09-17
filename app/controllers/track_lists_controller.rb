class TrackListsController < ApplicationController
  def index
    @trackLists = TrackList.all
    @tracks = Track.all

    # TODO N+1問題解決できる？？
    resTrackLists = @trackLists.as_json
    resTrackLists.each do |item|
      item[:tracks] = @tracks.where(track_id: [item['id']])
    end
    render json: resTrackLists
  end

  def create
    @trackLists = TrackList.where(user_id: params[:user_id])
    if(@trackLists.count === 3)
      render json: {
        :success => false,
        :message => 'アルバムは3件以上登録できません！'
      }
    else

      @trackList = TrackList.new(trackList_params)
      if @trackList.save
        render json: {
          :success => true
        }
      else
        render json: {
          :error => @trackList.errors.full_messages.as_json,
          :success => false,
          :message => '登録に失敗しました'
        }
      end
    end
  end


  private
    def trackList_params
      params.require(:track_list).permit(
        :title,
        :user_id
      )
    end
end
