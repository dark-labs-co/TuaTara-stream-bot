#!/bin/bash
echo 'test'
echo "$1"

value=`cat text.txt`
echo "$value"

curl -X POST -u "apikey:dxEYmZCwemMgYYNFY623kNkc8zB4CMT5tUmoVcbMRS2B" \
--header "Content-Type: application/json" \
--header "Accept: audio/wav" \
--data "{\"text\":\"<speak version='1.0'><prosody rate='slow'>$value</prosody></speak>\"}" \
--output '../tuatara-scene-left/src/audioTemp.wav' \
"https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/2a033955-a528-4271-b5e7-20f17ff7f928/v1/synthesize?accept=audio%2Fwav&voice=en-US_HenryV3Voice"

node D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/postProcess.js