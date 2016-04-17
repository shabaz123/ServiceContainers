FROM ubuntu
RUN apt-get -y update && apt-get install -y nodejs
RUN apt-get install -y wget
RUN mkdir -p /tmp/basic_server
WORKDIR /tmp/basic_server
RUN wget --no-cache --directory-prefix /tmp/basic_server https://raw.githubusercontent.com/shabaz123/ServiceContainers/master/basic_server.js && chmod 755 basic_server.js
EXPOSE 8090
CMD [ "nodejs", "basic_server.js" ]
