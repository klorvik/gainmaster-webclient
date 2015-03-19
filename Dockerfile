# Pull base image
FROM bachelorthesis/angularjs

MAINTAINER Knut Lorvik <lorviken@gmail.com>

# Define working directory
WORKDIR /tmp/gainmaster

# Copy files
COPY web/ .
COPY script/build.sh ./

# Define default command
CMD ["build.sh"]