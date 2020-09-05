# docker development tools

Just run `./build-and-run.sh`

That will run the docker compose process.

## debug hint

For development without https you need to add the environment variable:

```sh
docker run -e OAUTHLIB_INSECURE_TRANSPORT=1 -it <container-id> /bin/ash
```
