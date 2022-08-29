# === CONFIGURE ===

FROM node:17

WORKDIR /frontend

COPY . .

# === BUILD ===


#RUN npm ci 

RUN npm install 

# === RUN ===

EXPOSE 3000

CMD ["npm", "start"]