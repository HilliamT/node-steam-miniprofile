# node-steam-miniprofile
<img src="https://badgen.net/npm/v/steam-miniprofile" /> <img src="https://badgen.net/npm/dm/steam-miniprofile" /> <img src="https://badgen.net/npm/dt/steam-miniprofile" />


Fetches miniprofile data on any steam user, providing a wrapper around the `https://steamcommunity.com/miniprofile/<ACCOUNT_NAME>/json` endpoint.

### Installation
You can download this from npm using the following command.

    npm install steam-miniprofile

### Usage

This module exports two functions, `getMiniprofile` and `getMiniprofileByID64`. 

Given an `accountid` or a `steamid64` respectively, a promisifed `Miniprofile` object will be returned. The fields for this object can be found as a part of the `Miniprofile` inferface definition within the `index` file.
