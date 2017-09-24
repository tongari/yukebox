class TrackListsController < ApplicationController
  def index
    trackLists = TrackList.all
    tracks = Track.all

    # TODO N+1問題解決できる？？
    resTrackLists = trackLists.as_json
    resTrackLists.each do |item|
      item[:tracks] = tracks.where(track_id: [item['id']])
    end
    render json: {
      :success => true,
      :data => resTrackLists
    }
  end

  def myAlbum
    album = TrackList.where(user_id: current_user.id).order('id ASC')
    render json: {
      :success => true,
      :data => album
    }
  end

  def create
    params[:track_list][:user_id] = current_user.id

    @trackLists = TrackList.where(user_id: current_user.id)
    if(@trackLists.count === 3)
      render json: {
        :success => false,
        :message => 'アルバムは3件以上登録できません！'
      }
    else

      trackList = TrackList.new(trackList_params)
      if trackList.save
        album = TrackList.where(user_id: current_user.id).order('id ASC')
        render json: {
          :success => true,
          :data => album
        }
      else
        render json: {
          :error => trackList.errors.full_messages.as_json,
          :success => false,
          :message => '登録に失敗しました'
        }
      end
    end
  end


  def update
    params[:track_list][:user_id] = current_user.id
    trackList = TrackList.find(params[:id])
    if trackList.update(trackList_params)

      album = TrackList.where(user_id: current_user.id).order('id ASC')
      render json: {
        :success => true,
        :data => album
      }
      # render json: {
      #   :success => true,
      #   :data => @trackList
      # }
    else
      render json: {
        :error => trackList.errors.full_messages.as_json,
        :success => false,
        :message => '編集に失敗しました'
      }
    end
  end

  def destroy
    @trackList = TrackList.find(params[:id])
    if @trackList.destroy
      album = TrackList.where(user_id: current_user.id).order('id ASC')
      render json: {
        :success => true,
        :data => album
      }
    else
      render json: {
        :error => @trackList.errors.full_messages.as_json,
        :success => false,
        :message => '削除に失敗しました'
      }
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
