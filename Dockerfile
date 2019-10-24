# FROM kalilinux/kali-linux-docker
FROM node:lts
# RUN apt-get update
# RUN apt-get install -y aptitude
# RUN aptitude update
# RUN aptitude upgrade -y
# RUN aptitude install -y nmap
# RUN aptitude install -y dnsutils

WORKDIR d:\\Source\\nodeserver

COPY package*.json ./

# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
# RUN apt-get install -y nodejs
# RUN npm install @babel/polyfill
# RUN npm install dotenv express cors path

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]
