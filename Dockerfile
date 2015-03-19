# Pull base image
FROM bachelorthesis/angularjs

MAINTAINER Knut Lorvik <lorviken@gmail.com>

# Define working directory
WORKDIR /tmp/gainmaster

# Copy files
COPY web/ . 

# Define default command
CMD ["bash"]