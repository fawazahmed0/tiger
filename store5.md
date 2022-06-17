`curl -v --fail-with-body
-k -F file=@test.txt https://store5.gofile.io/uploadFile`
```
*   Trying 141.94.243.168:443...
* Connected to store5.gofile.io (141.94.243.168) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
* TLSv1.0 (OUT), TLS header, Certificate Status (22):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS header, Certificate Status (22):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (OUT), TLS header, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.2 (OUT), TLS header, Certificate Status (22):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS header, Finished (20):
* TLSv1.2 (IN), TLS header, Certificate Status (22):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=*.gofile.io
*  start date: Apr 14 07:43:19 2022 GMT
*  expire date: Jul 13 07:43:18 2022 GMT
*  issuer: C=US; O=Let's Encrypt; CN=R3
*  SSL certificate verify result: unable to get local issuer certificate (20), c
ontinuing anyway.
* Using HTTP2, server supports multiplexing
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0

* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* h2h3 [:method: POST]
* h2h3 [:path: /uploadFile]
* h2h3 [:scheme: https]
* h2h3 [:authority: store5.gofile.io]
* h2h3 [user-agent: curl/7.83.1]
* h2h3 [accept: */*]
* h2h3 [content-length: 188]
* h2h3 [content-type: multipart/form-data; boundary=------------------------dd22
979092ac8f33]
* Using Stream ID: 1 (easy handle 0x3a1cd0)
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
> POST /uploadFile HTTP/2
> Host: store5.gofile.io
> user-agent: curl/7.83.1
> accept: */*
> content-length: 188
> content-type: multipart/form-data; boundary=------------------------dd22979092
ac8f33
>
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* We are completely uploaded and fine
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Connection state changed (MAX_CONCURRENT_STREAMS == 250)!
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
< HTTP/2 200
< access-control-allow-credentials: true
< access-control-allow-methods: GET, POST, OPTIONS, PUT, DELETE, HEAD
< access-control-allow-origin: *
< content-security-policy: default-src 'self';base-uri 'self';block-all-mixed-co
ntent;font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img
-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';sty
le-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
< content-type: application/json; charset=utf-8
< cross-origin-embedder-policy: require-corp
< cross-origin-opener-policy: same-origin
< cross-origin-resource-policy: cross-origin
< date: Fri, 17 Jun 2022 22:23:01 GMT
< etag: W/"129-mnnYThZIBUeJDNWCij7dny5w2VY"
< expect-ct: max-age=0
< origin-agent-cluster: ?1
< referrer-policy: no-referrer
< strict-transport-security: max-age=15552000; includeSubDomains
< x-content-type-options: nosniff
< x-dns-prefetch-control: off
< x-download-options: noopen
< x-frame-options: SAMEORIGIN
< x-permitted-cross-domain-policies: none
< x-xss-protection: 0
< content-length: 297
<
* TLSv1.2 (IN), TLS header, Supplemental data (23):
{"status":"ok","data":{"guestToken":"zyHGniJF4RjP302uM2E2Uh9VYsMntw6C","download
Page":"https://gofile.io/d/bVa3Rz","code":"bVa3Rz","parentFolder":"95d7cd85-a698
-427a-8b0f-38b76eefce27","fileId":"52590b87-5bdf-45b2-980f-5499394c03d9","fileNa
me":"test.txt","md5":"2f7e54fe9de9db73067f562bc22d6eae"}}* Connection #0 to host
 store5.gofile.io left intact
```
