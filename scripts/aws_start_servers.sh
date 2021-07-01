ec2_sudo="ssh -i $AWS_EC2_PEM_FILE $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS sudo "

echo "AWS_EC2_PEM_FILE=$AWS_EC2_PEM_FILE"
echo "AWS_EC2_USER=$AWS_EC2_USER"
echo "AWS_EC2_IP_ADDRESS=$AWS_EC2_IP_ADDRESS"

$ec2_sudo docker pull nuuuwan/gig_server
$ec2_sudo docker pull nuuuwan/geo_server
$ec2_sudo docker pull nuuuwan/mylocal
$ec2_sudo docker pull nuuuwan/datafoundation_lk

$ec2_sudo docker kill local_gig_server
$ec2_sudo docker kill local_geo_server
$ec2_sudo docker kill local_mylocal
$ec2_sudo docker kill local_datafoundation_lk

$ec2_sudo docker run --rm -p 4001:4001 -d --name local_gig_server nuuuwan/gig_server
$ec2_sudo docker run --rm -p 4002:4002 -d --name local_geo_server nuuuwan/geo_server
$ec2_sudo docker run --rm -p 5002:80 -d --name local_mylocal nuuuwan/mylocal
$ec2_sudo docker run --rm -p 5001:80 -d --name local_datafoundation_lk nuuuwan/datafoundation_lk

$ec2_sudo docker ps

$ec2_sudo nginx -s reload
$ec2_sudo tail -f /var/log/nginx/error.log
