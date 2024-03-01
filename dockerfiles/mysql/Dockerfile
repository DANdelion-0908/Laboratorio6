FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y mysql-server

ENV MYSQL_DATABASE=games_db
ENV MYSQL_USER=dandelionWriter
ENV MYSQL_PASSWORD=0908072244!
ENV MYSQL_ROOT_PASSWORD=0908072244X!

COPY schema.sql /docker-entrypoint-initdb.d/schema.sql

CMD ["mysqld"]