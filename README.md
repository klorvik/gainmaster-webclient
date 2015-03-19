# gainmaster-webclient

This repository contains a **Dockerfile** for the gainmaster-webclient docker image, and a **Vagrantfile** for local development. 
This repository is a part of an automated build, published to the [Docker Hub][docker_hub_repository].

**Base image:** [bachelorthesis/angularjs][docker_hub_base_image]

## Structure

    /build
    /test   
    /src
        /assets
            /images
            /styles
        /modules
            /core
            /components

## Setup Development Environment

1) Install development dependencies

* [NodeJS][nodejs] 0.10.0 or greater.
* [Ruby][ruby] 2.0.0 or greater.
* [Compass][compass] 1.0.0 or greater.

2) Get this project

    $ git clone git@github.com:bachelorthesis/gainmaster-webclient.git
    $ cd gainmaster-webclient/
    $ npm install && bower install

3) Modify your git config

    $ git config [--global] user.name "John Doe"
    $ git config [--global] user.email "johndoe@example.com"

## Running

    $ grunt serve

[nodejs]: https://nodejs.org/
[ruby]: https://www.ruby-lang.org/
[compass]: http://compass-style.org/

[docker_hub_repository]: https://registry.hub.docker.com/u/bachelorthesis/gainmaster-webclient/
[docker_hub_base_image]: https://registry.hub.docker.com/u/bachelorthesis/angularjs/
