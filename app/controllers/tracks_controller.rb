class TracksController < ApplicationController

  def show
    tracks = Track.where(track_id: params[:id])
    render json: {
      :success => true,
      :data => tracks,
    }
  end

  def create
    tracks = Track.where(track_id: params[:track_id])
    if(tracks.count === 10)
      render json: {
        :success => false,
        :message => '１つのアルバムには10件以上は登録できません！'
      }
    else
      len = tracks.count;
      bulkTracks = []
      params[:video_ids].each_with_index do |item, idx|
        params[:track][:video_id] = item;
        params[:track][:track_title] = params[:track_titles][idx];
        params[:track][:track_num] = len+idx+1;
        params[:track][:user_id] = current_user.id
        bulkTracks << Track.new(track_params)
      end
      newTrack = Track.import bulkTracks
      if newTrack
        resTracks = Track.where(track_id: params[:track_id]).order('track_num ASC')
        render json: {
          :success => true,
          :data => resTracks
        }
      else
        render json: {
          :error => newTrack.errors.full_messages.as_json,
          :success => false,
          :message => '登録に失敗しました'
        }
      end
    end
  end

  def bulkEdit
    tracks = Track.where(id: params[:ids])
    bulkTracks = []
    tracks.each_with_index do |item, idx|
      item[:track_num] = params[:track_nums][idx];
      bulkTracks << item
    end
    newTrack = Track.import bulkTracks, on_duplicate_key_update: [:track_num]
    if newTrack
      resTracks = Track.where(track_id: params[:track_id]).order('track_num ASC')
      render json: {
        :success => true,
        :data => resTracks
      }
    else
      render json: {
        :error => newTrack.errors.full_messages.as_json,
        :success => false,
        :message => '編集に失敗しました'
      }
    end
  end


  def destroy
    track = Track.find(params[:id])
    if track.destroy
      render json: {
        :success => true
      }
    else
      render json: {
        :error => track.errors.full_messages.as_json,
        :success => false,
        :message => '削除に失敗しました'
      }
    end
  end


  private
    def track_params
      params.require(:track).permit(
        :track_id,
        :user_id,
        :video_id,
        :track_num,
        :track_title
      )
    end
end
