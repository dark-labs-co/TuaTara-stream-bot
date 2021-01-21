#!/bin/bash
echo $1
curl -X POST -u "apikey:dxEYmZCwemMgYYNFY623kNkc8zB4CMT5tUmoVcbMRS2B" \
--header "Content-Type: application/json" \
--header "Accept: audio/wav" \
--data "{\"text\":\"<speak version='1.0'><prosody rate='slow'>Hello world, this is DE - FI News. It is on the hour. Currently, One Ethereum is worth 1051.76 U.S.D or 0.03 b.T.C, a loss of 28.08% in the last 24 hours, -4.68 over the last week and a gain of %150 78.17 over the last 30days.</prosody></speak>\"}" \
--output ../floating/src/audioTemp.wav \
"https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/2a033955-a528-4271-b5e7-20f17ff7f928/v1/synthesize?accept=audio%2Fwav&voice=en-US_HenryV3Voice"