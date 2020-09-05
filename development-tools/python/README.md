# Some Notes

## Disable InsecureTransportError

```plain
Traceback (most recent call last):
  File "./get-token.py", line 26, in <module>
    client_secret=client_secret)
  File "/usr/lib/python3/dist-packages/requests_oauthlib/oauth2_session.py", line 183, in fetch_token
    raise InsecureTransportError()
oauthlib.oauth2.rfc6749.errors.InsecureTransportError: (insecure_transport) OAuth 2 MUST utilize https.
```

`export OAUTHLIB_INSECURE_TRANSPORT=1`
