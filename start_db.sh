#!/bin/bash
tar zxvf mongodb-osx-x86_64-3.2.1.tgz
export PATH=mongodb-osx-x86_64-3.2.1/bin:$PATH
mkdir -p data/db
chmod 777 data/* -R
mongod --dbpath data/db
