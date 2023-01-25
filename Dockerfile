ARG DENO_VERSION=latest
FROM denoland/deno:${DENO_VERSION}

EXPOSE 8080
WORKDIR /app
USER deno

COPY deps.ts .
RUN deno cache deps.ts main.ts

CMD ["run", "--allow-net", "main.ts"]