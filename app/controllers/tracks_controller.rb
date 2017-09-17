class TracksController < ApplicationController

  def show
    @track = Track.where(track_id: params[:id])
    render json: @track
  end


  def create
    @tracks = Track.where(track_id: params[:id])
    if(@tracks.count === 10)
      render json: {
        :result => false,
        :message => '既に登録数が10件となっています。'
      }
    else
      @track = Track.new(track_params)
      if @track.save
        render json: {
          :result => true
        }
      else
        render json: {
          :error => @track.errors.full_messages.as_json,
          :result => false,
          :message => '登録に失敗しました'
        }
      end

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
