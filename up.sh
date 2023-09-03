#!/bin/bash


chmod u+x down.sh \
        puzzlesolver-api-spring-boot/build.sh \
        puzzlesolver-api-spring-boot/mvnw \
        url_app/url_service/build.sh \
        url_app/url_service/mvnw \
    && cd ./puzzlesolver-api-spring-boot \
    && ./build.sh \
    && cd - \
    && cd ./url_app/url_service \
    && ./build.sh \
    && cd - \
    && docker compose up --build -d \
    && docker ps -a
