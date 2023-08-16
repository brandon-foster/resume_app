#!/bin/bash

cd ./puzzlesolver-api-spring-boot \
    && ./build.sh \
    && cd ../ \
    && docker compose up --build -d \
    && docker ps -a
