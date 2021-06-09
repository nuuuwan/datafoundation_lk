ec2_sudo="ssh -i $AWS_EC2_PEM_FILE $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS sudo "

echo "AWS_EC2_PEM_FILE=$AWS_EC2_PEM_FILE"
echo "AWS_EC2_USER=$AWS_EC2_USER"
echo "AWS_EC2_IP_ADDRESS=$AWS_EC2_IP_ADDRESS"

echo "Test NGINX: uploaded at <b>$(date)</b>" > index.html

scp -i $AWS_EC2_PEM_FILE index.html $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS:/home/ubuntu/index.html
$ec2_sudo mv /home/ubuntu/index.html /var/www/html/index.html

# scp -i $AWS_EC2_PEM_FILE nginx-nossl.conf $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS:/home/ubuntu/nginx.conf
scp -i $AWS_EC2_PEM_FILE nginx.conf $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS:/home/ubuntu/nginx.conf
$ec2_sudo mv /home/ubuntu/nginx.conf /etc/nginx/nginx.conf

$ec2_sudo ls /etc/letsencrypt/live/datafoundation_lk/
$ec2_sudo /etc/init.d/apache2 stop
$ec2_sudo nginx -s reload
$ec2_sudo tail -f /var/log/nginx/error.log
