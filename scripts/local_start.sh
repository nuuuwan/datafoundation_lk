echo '----------------------------------------------------------------'

docker pull nuuuwan/gig_server
docker pull nuuuwan/geo_server
docker pull nuuuwan/mylocal
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
tail -f /usr/local/var/log/nginx/error.log
