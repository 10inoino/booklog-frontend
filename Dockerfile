FROM node:18.0.0

# llのエイリアスを指定
RUN echo "alias ll='ls -l'" >> /root/.bashrc
RUN touch /root/.bash_profile
RUN echo 'source ~/.bashrc' >> /root/.bash_profile

CMD yarn install