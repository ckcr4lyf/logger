#!/bin/bash
set -euo pipefail

OUTPUT=$(node --no-warnings __tests__/test-json-format.mjs)

VALID=$(node -e "
const obj = JSON.parse('$OUTPUT');
console.log(
    obj.level === 'INF' &&
    obj.message === 'message' &&
    obj.extra === true &&
    typeof obj.ts === 'string'
);
")

if [ "$VALID" = "true" ]; then
    echo "PASS"
else
    echo "FAIL: unexpected output: $OUTPUT"
    exit 1
fi
