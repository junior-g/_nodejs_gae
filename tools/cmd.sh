ADD A BLACK PANTHER CHARACTER
================================
curl --request POST \
  --url http://localhost:1000/api/v1/blackpanther \
  --header 'content-type: application/json' \
  --data '{"alias":"tchalla","occupation":"King of Wakanda","gender":"male","place_of_birth":"Wakanda","abilities":"enhanced strength","played_by":"Chadwick Boseman"}'

GET ALL BLACK PANTHER CHARACTERS
================================
curl --request GET \
  --url http://localhost:1000/api/v1/blackpanthers

GET A BLACK PANTHER CHARACTER
================================
curl --request GET \
  --url http://localhost:1000/api/v1/blackpanther/5aa37892f12f5f0f841252e5

DELETE A BLACK PANTHER CHARACTER
================================
curl --request DELETE \
  --url http://localhost:1000/api/v1/blackpanther/5aa37c7d756e3b0f708b88eb

UPDATE A BLACK PANTHER CHARACTER
================================
curl --request PUT \
  --url http://localhost:1000/api/v1/blackpanther/5aa37e41762ce814b0320912 \
  --header 'content-type: application/json' \
  --data '{"alias":"tchalla","occupation":"King of Wakanda","gender":"male","place_of_birth":"Wakanda","abilities":"enhanced strength","played_by":"Chadwick Boseman","image_path":"tchalla_black_panther.jpg"}'

ADD A BLACK PANTHER CHARACTER
================================
curl --request POST \
  --url https://stackabuse-197509.appspot.com/api/v1/blackpanther \
  --header 'content-type: application/json' \
  --data '{"alias":"tchalla","occupation":"King of Wakanda","gender":"male","place_of_birth":"Wakanda","abilities":"enhanced strength","played_by":"Chadwick Boseman"}'

curl --request GET \
  --url https://stackabuse-197509.appspot.com/api/v1/blackpanthers


https://stackabuse-197509.appspot.com
mongo ds237855.mlab.com:37855/alc -u alc -p alc
