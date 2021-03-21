// https://thegraph.com/explorer/subgraph/ourzora/zora-v1?query=Example%20query

const fetch = require('node-fetch')
// const moment = require('moment')
global.fetch = fetch
global.Headers = fetch.Headers
var myHeaders = new Headers();
var fs = require('fs');

let artworksDat = { recent: [] }

module.exports = function ZoraScraper() {
  //function ZoraScraper() {

  let today = new Date();
  let day = today.getDate();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "audio/wav");
  myHeaders.append("Authorization", "Basic YXBpa2V5OmR4RVltWkN3ZW1NZ1lZTkZZNjIza05rYzh6QjRDTVQ1dFVtb1ZjYk1SUzJC");
  myHeaders.append("Cookie", "__cfduid=d8a76ebf66f02b73e4ed2d3a0c052d1901609124830");

  let graphql = JSON.stringify({
    query: `{
      bids(first: 20 orderDirection: desc orderBy: createdAtTimestamp) {
        id
        amount
        currency{
          symbol
          name
        }
        media{
          id
          createdAtTimestamp
          metadataURI
          contentURI
          ownerBidShare
          creatorBidShare
          owner {
            id
          }
          creator {
            id
          }
          currentBids(orderBy:createdAtTimestamp first: 3 orderDirection:desc){
            bidder{
              id
            }
            amount
            createdAtTimestamp
            currency {
              id
              symbol
              name
              }
          }
        }
      }
      transfers(first: 50 orderDirection: desc orderBy: createdAtTimestamp) {
        id
        media{
          id
          createdAtTimestamp
          metadataURI
          contentURI
          ownerBidShare
          creatorBidShare
          owner {
            id
          }
          creator {
            id
          }
          currentBids(orderBy:createdAtTimestamp first: 3 orderDirection:desc){
            bidder{
              id
            }
            amount
            createdAtTimestamp
            currency {
              id
              symbol
              name
              }
          }
        }
      }
      medias(first: 20 orderDirection: desc orderBy: createdAtTimestamp) {
          id
          currentAsk{
              id
              amount
          }
          owner {
              id
          }
          creator {
              id
          }
          ownerBidShare
          creatorBidShare
          metadataURI
          contentURI
          currentBids(orderBy:createdAtTimestamp first: 3 orderDirection:desc){
            amount
            createdAtTimestamp
            currency {
              id
              symbol
              name
            }
            bidder{
              id
            }
          }
      }
    }`
  })

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow'
  };

  fetch("https://api.thegraph.com/subgraphs/name/ourzora/zora-v1", requestOptions)
    .then(response => response.text())
    .then(result => parseReturn(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

function parseReturn(r) {
  // console.log(r);

  let artworks = r.data.medias
  let artworksBids = r.data.bids
  let artworksTransfers = r.data.transfers

  let artworkItem = { 'bids': [], 'freshMints': [], 'transfers': [] }

  //? New bids
  for (let i = 0; i < artworksBids.length; i++) {
    let bidId = artworksBids[i].media.id
    let metadataUri = artworksBids[i].media.metadataURI
    let contentUri = artworksBids[i].media.contentURI
    let creatorId = artworksBids[i].media.creator.id
    let ownerId = artworksBids[i].media.owner.id
    let createdAtTimestamp = artworksBids[i].media.createdAtTimestamp
    let ownerBidShare = artworksBids[i].media.ownerBidShare
    let creatorBidShare = artworksBids[i].creatorBidShare
    let currentBids = artworksBids[i].media.currentBids

    //** Nested For Loop for fetching metadata info 
    fetch(metadataUri)
      .then(response => response.text())
      .then(result => parseMetaDatUri(JSON.parse(result)))
      .catch(error => console.log('error', error));

    function parseMetaDatUri(res) {

      artworkItem.bids.push({
        "id": bidId,
        "metaData": res,
        "contentUri": contentUri,
        "creatorId": creatorId,
        "ownerId": ownerId,
        "createdAtTimestamp": createdAtTimestamp,
        "ownerBidShare": ownerBidShare,
        "creatorBidShare": creatorBidShare,
        "currentBids": currentBids
      })
    }
  }

  //? New transfers
  for (let i = 0; i < artworksTransfers.length; i++) {
    if (artworksTransfers[i].media.currentBids.length >= 2) {
      let bidId = artworksTransfers[i].media.id
      let metadataUri = artworksTransfers[i].media.metadataURI
      let contentUri = artworksTransfers[i].media.contentURI
      let creatorId = artworksTransfers[i].media.creator.id
      let ownerId = artworksTransfers[i].media.owner.id
      let createdAtTimestamp = artworksTransfers[i].media.createdAtTimestamp
      let ownerBidShare = artworksTransfers[i].media.ownerBidShare
      let creatorBidShare = artworksTransfers[i].creatorBidShare
      let currentBids = artworksTransfers[i].media.currentBids

      //** Nested For Loop for fetching metadata info 
      fetch(metadataUri)
        .then(response => response.text())
        .then(result => parseMetaDatUri(JSON.parse(result)))
        .catch(error => console.log('error', error));

      function parseMetaDatUri(res) {

        artworkItem.transfers.push({
          "id": bidId,
          "metaData": res,
          "contentUri": contentUri,
          "creatorId": creatorId,
          "ownerId": ownerId,
          "createdAtTimestamp": createdAtTimestamp,
          "creatorBidShare": creatorBidShare,
          "ownerBidShare": ownerBidShare,
          "currentBids": currentBids
        })
      }
    }
  }

  //? Fresh Mints
  for (let i = 0; i < artworks.length; i++) {
    let id = artworks[i].id
    let metadataUri = artworks[i].metadataURI
    let contentUri = artworks[i].contentURI
    let creatorId = artworks[i].creator.id
    let ownerId = artworks[i].owner.id
    let ownerBidShare = artworks[i].ownerBidShare
    let creatorBidShare = artworks[i].creatorBidShare
    let currentBids = artworks[i].currentBids

    function parseMetaDatUri(res) {

      artworkItem.freshMints.push({
        "id": id,
        "metaData": res,
        "contentUri": contentUri,
        "currentBids": currentBids,
        "creatorId": creatorId,
        "ownerId": ownerId,
        "ownerBidShare": ownerBidShare,
      });

      writeF(artworkItem)
    }

    //** Nested For Loop for fetching metadata info 
    fetch(metadataUri)
      .then(response => response.text())
      .then(result => parseMetaDatUri(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }


  //? Save Local Data
  function writeF(datIn) {
    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-NFT-TV/tuatara-app-a/src/components/zora/zoraData.json', JSON.stringify(datIn), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

// ZoraScraper()