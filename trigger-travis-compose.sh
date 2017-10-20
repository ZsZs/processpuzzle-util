body='{
"request": {
"branch":"master"
}}'

curl -s -X POST \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Travis-API-Version: 3" \
   -H "Authorization: token BOCIG12CzTTGjIELovP0AQ" \
   -d "$body" \
   https://api.travis-ci.org/repo/ZsZs%2Fprocesspuzzle-compose/requests