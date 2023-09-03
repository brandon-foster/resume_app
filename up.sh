#!/bin/bash

cd ./puzzlesolver-api-spring-boot \
    && ./build.sh \
    && cd - \
    && cd ./url_app/url_service \
    && ./build.sh \
    && cd - \
    && docker compose up --build -d \
    && docker ps -a
