#!/bin/bash
build=11
docker login myimagerepo.com -u bxdm2836
cd app
docker build . -t k8healthcheck:1.$build
docker tag k8healthcheck:1.$build myimagerepo.com/openshift4/k8healthcheck:1.$build
docker push myimagerepo/openshift4/k8healthcheck:1.$build
