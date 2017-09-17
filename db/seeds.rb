# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do |n|
  title = "サンプルtackその #{n+1}"

  TrackList.create(
      title: title,
      user_id: n+1
  )
end

[
  '43D_nBGfuGY',
  '2MNL2mU8pBE',
  'AfjteCMzYUo',
  '7aJmUeLMZi4',
  'oGLKmSpgzXA',
  'qA6a7hrpoRg',
  'gj5Nu6feFTQ',
  '_B09-nM3knE',
  'JHlX4MtHSeU',
  'QqqlBerbOhE'
].each_with_index do |item, n|

  idx = n+1

  track_id = 1
  user_id = 1
  video_id = item
  track_num = idx
  track_title = "ミスチルtrackその #{idx}"

  Track.create(
      track_id: track_id,
      user_id: user_id,
      video_id: video_id,
      track_num: track_num,
      track_title: track_title
  )
end