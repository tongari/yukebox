class SpaController < ApplicationController
  def index

    # ログインしていない場合
    if !user_signed_in?
      # トップのurlの以外はログインページへリダイレクト
      if request.path != '/'
        redirect_to new_user_session_path
      end
    else
      # 編集画面の場合
      if request.path == "/my-play-list-edit/#{params[:id]}"
        myEdit = TrackList.where(['id = ? and user_id =?', params[:id], current_user.id])
        # 自分が保持している編集IDではない場合、自分のプレイリストのurlへリダイレクト
        if myEdit.count == 0
          redirect_to my_play_list_path
        end
      end
    end
  end
end
