nginx -s stop

cp nginx/nginx-final-local.conf /usr/local/etc/nginx/nginx.conf

docker pull nuuuwan/gig_server
docker pull nuuuwan/geo_server
docker pull nuuuwan/mylocal
docker pull nuuuwan/datafoundation_lk

docker kill local_gig_server
docker kill local_geo_server
docker kill local_mylocal
docker kill local_datafoundation_lk

docker run --rm -p 4001:4001 -d --name local_gig_server nuuuwan/gig_server
docker run --rm -p 4002:4002 -d --name local_geo_server nuuuwan/geo_server
docker run --rm -p 5002:80 -d --name local_mylocal nuuuwan/mylocal
docker run --rm -p 5001:80 -d --name local_datafoundation_lk nuuuwan/datafoundation_lk

docker ps

nginx
tail -f /usr/local/var/log/nginx/error.log
