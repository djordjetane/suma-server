FROM node

COPY . /server
WORKDIR /server

ENV DB_CLIENT=${DB_CLIENT}
ENV DB_NAME=${DB_NAME}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV DB_HOST=${DB_HOST}
ENV PORT=7878

RUN npm i

CMD ["npm", "run" , "dockerstart"]
