module ApplicationHelper
  def profile_img(user)
    unless user.provider.blank?
      img_url = user.image_url
    else
      img_url = 'user.svg'
    end
    image_tag(img_url, width: 80, alt: user.name)
  end
end
