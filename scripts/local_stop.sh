nginx -s stop

echo '----------------------------------------------------------------'

docker kill local_gig_server
docker kill local_geo_server
docker kill local_mylocal
docker kill local_datafoundation_lk

docker rm local_gig_server
docker rm local_geo_server
docker rm local_mylocal
docker rm local_datafoundation_lk

echo '----------------------------------------------------------------'

docker ps
