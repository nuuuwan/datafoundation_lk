# DataFoundation.LK React App

![diagram_datafoundation_lk](https://raw.githubusercontent.com/nuuuwan/datafoundation_lk/main/src/assets/images/diagram_datafoundation_lk.png?token=AAIQCWPO3OPBLUUVZOFW3O3AZIW3K)

This React App (datafoundation_lk) implements a React App for www.datafoundation.lk. It depends on two python flask/waitress services ([gig_server](https://github.com/nuuuwan/gig_server) and [geo_server](https://github.com/nuuuwan/geo_server)), and another React App mylocal.

# Setting up DataFoundation.LK on an AWS EC2 Instance

All of datafoundation_lk, my_local, gig_server, and geo_server are dockerized. Follow these steps, to setup datafoundation.lk on a AWS EC2 Instance:

1. Install NGINX on the EC2 Instance

```
./scripts/aws_install_nginx.sh
```

2. Copy the NGINX Conf file to the EC2 Instance

```
./scripts/aws_update_nginx_conf.sh
```

3. Start datafoundation_lk, my_local, gig_server, and geo_server, and NGINX itself.

```
./scripts/aws_start_servers.sh
```
