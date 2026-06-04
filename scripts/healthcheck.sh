#!/usr/bin/env bash
set -euo pipefail

SITE_URL="https://itfix.rootnode.cv"
LOG_FILE="${HEALTHCHECK_LOG:-/tmp/itfix-healthcheck.log}"
TIMEOUT=5
MAX_RESPONSE_TIME=5

# Perform HTTP check and capture timing
START_TIME=$(date +%s%N)
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time "$TIMEOUT" "$SITE_URL" 2>/dev/null) || HTTP_CODE="000"
END_TIME=$(date +%s%N)

# Calculate response time in seconds (with millisecond precision)
ELAPSED_MS=$(( (END_TIME - START_TIME) / 1000000 ))
ELAPSED_S=$(echo "scale=2; $ELAPSED_MS / 1000" | bc)

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S %Z')

# Determine status
if [ "$HTTP_CODE" = "200" ] && [ "$ELAPSED_MS" -le $((MAX_RESPONSE_TIME * 1000)) ]; then
    STATUS="OK"
    MESSAGE="HTTP $HTTP_CODE | ${ELAPSED_S}s"
elif [ "$HTTP_CODE" = "000" ]; then
    STATUS="DOWN"
    MESSAGE="Connection failed (timeout or unreachable)"
elif [ "$HTTP_CODE" -ge 500 ] 2>/dev/null; then
    STATUS="ERROR"
    MESSAGE="HTTP $HTTP_CODE | ${ELAPSED_S}s (server error)"
elif [ "$ELAPSED_MS" -gt $((MAX_RESPONSE_TIME * 1000)) ]; then
    STATUS="SLOW"
    MESSAGE="HTTP $HTTP_CODE | ${ELAPSED_S}s (exceeded ${MAX_RESPONSE_TIME}s threshold)"
else
    STATUS="WARN"
    MESSAGE="HTTP $HTTP_CODE | ${ELAPSED_S}s"
fi

# Log result
echo "${TIMESTAMP} | ${STATUS} | ${MESSAGE}" >> "$LOG_FILE" 2>/dev/null || \
    echo "${TIMESTAMP} | ${STATUS} | ${MESSAGE}"

# Exit with appropriate code
if [ "$STATUS" = "OK" ]; then
    exit 0
else
    exit 1
fi
