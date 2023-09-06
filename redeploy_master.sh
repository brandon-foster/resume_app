#!/bin/bash

./down.sh \
    && git pull origin master \
    && cd resume_react_server \
    && git pull origin master \
    && cd - \
    && ./up.sh
