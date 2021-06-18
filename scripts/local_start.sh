echo '----------------------------------------------------------------'

docker pull nuuuwan/gig_server
echo '...'
docker pull nuuuwan/geo_server
echo '...'
docker pull nuuuwan/mylocal
echo '...'
docker pull nuuuwan/datafoundation_lk

echo '----------------------------------------------------------------'

docker run --restart=unless-stopped -p 4001:4001 -d --name local_gig_server nuuuwan/gig_server
docker run --restart=unless-stopped -p 4002:4002 -d --name local_geo_server nuuuwan/geo_server
docker run --restart=unless-stopped -p 5002:80 -d --name local_mylocal nuuuwan/mylocal
docker run --restart=unless-stopped -p 5001:80 -d --name local_datafoundation_lk nuuuwan/datafoundation_lk

echo '----------------------------------------------------------------'

docker ps

echo '----------------------------------------------------------------'
cp nginx/nginx-final-local.conf /usr/local/etc/nginx/nginx.conf
nginx

echo '----------------------------------------------------------------'
curl "http:/localhost:4001/entities/LK"
echo '...'
curl "http:/localhost/gig_server/entities/LK"
echo '...'
curl "http:/localhost:4002/latlng_to_region/8,80"
echo '...'
curl "http:/localhost/geo_server/latlng_to_region/8,80"
echo '----------------------------------------------------------------'

tail -f /usr/local/var/log/nginx/error.log
