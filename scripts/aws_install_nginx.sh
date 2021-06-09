ec2_sudo="ssh -i $AWS_EC2_PEM_FILE $AWS_EC2_USER@$AWS_EC2_IP_ADDRESS sudo "

echo "AWS_EC2_PEM_FILE=$AWS_EC2_PEM_FILE"
echo "AWS_EC2_USER=$AWS_EC2_USER"
echo "AWS_EC2_IP_ADDRESS=$AWS_EC2_IP_ADDRESS"

echo "..."

$ec2_sudo apt update
$ec2_sudo apt install nginx

echo "..."

$ec2_sudo nginx -V
