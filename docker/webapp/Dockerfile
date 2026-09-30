FROM node:22-alpine

WORKDIR /app

COPY docker/webapp/entrypoint.sh /usr/local/bin/webapp-entrypoint
RUN chmod +x /usr/local/bin/webapp-entrypoint

ENTRYPOINT ["/usr/local/bin/webapp-entrypoint"]
