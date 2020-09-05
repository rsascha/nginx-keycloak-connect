#!/usr/bin/python3

from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session
import os
import tools

# TODO: Add env support using os.environ['DEBUSSY']
client_id           = 'nginx-proxy'
token_url           = 'http://172.18.0.1:8080/auth/realms/master/protocol/openid-connect/token'
client_secret       = '5cbb59bd-e353-4528-889d-253f05ed7fc7'
nginx_config_file   = 'etc/nginx/conf.d/default.conf'

client = BackendApplicationClient(client_id=client_id)
oauth = OAuth2Session(client=client)
oauth.fetch_token(token_url=token_url, client_id=client_id,
        client_secret=client_secret)

tools.sed(
    "proxy_set_header Authorization: 'Bearer xyz';",
    "proxy_set_header Authorization: 'Bearer " + oauth.access_token + "';",
    nginx_config_file)
