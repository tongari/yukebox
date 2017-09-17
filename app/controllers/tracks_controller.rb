class TracksController < ApplicationController

  def show
    @track = Track.where(track_id: params[:id])
    render json: @track
  end


  def create
    @tracks = Track.where(track_id: params[:track_id])
    if(@tracks.count === 10)
      render json: {
        :success => false,
        :message => '１つのアルバムには10件以上は登録できません！'
      }
    else
      @track = Track.new(track_params)
      if @track.save
        render json: {
          :success => true
        }
      else
        render json: {
          :error => @track.errors.full_messages.as_json,
          :success => false,
          :message => '登録に失敗しました'
        }
      end
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render json: {
        :success => true,
        :data => @track
      }
    else
      render json: {
        :error => @track.errors.full_messages.as_json,
        :success => false,
        :message => '編集に失敗しました'
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
