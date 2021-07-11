# node-steam-miniprofile
<img src="https://badgen.net/npm/v/steam-miniprofile" /> <img src="https://badgen.net/npm/dm/steam-miniprofile" /> <img src="https://badgen.net/npm/dt/steam-miniprofile" />
### **Table of Contents**
- [Introduction](#introduction)
- [Getting Started](#getting-started)
    - [Usage](#usage)
    - [Example](#example)
    - [Types](#types)

### Introduction
A module to fetch Steam miniprofile data on any Steam user. This wraps around the `https://steamcommunity.com/miniprofile/<ACCOUNTID>/json` endpoint.

### Getting Started
You can download this from npm using the following command.

```bash
npm install steam-miniprofile
```

##### Usage

This module exports two functions, `getMiniprofile` and `getMiniprofileByID64` which both return a Promise that resolves to a `Miniprofile`.

##### Example

```typescript
const accountid = "120816906";
const steamid64 = "76561198081082634";
...
const miniprofile = await getMiniprofile(accountid);
console.log(miniprofile.level);
...
const { level, ... } = await getMiniprofileByID64(steamid64);
console.log(level);
...
```

##### Types
The interface `Miniprofile` can be found below.

```typescript
interface MiniProfile {
    level: number;
    level_class: string; // Determines badge
    avatar_url: string; // Full image url
    persona_name: string; // Current display name

    favorite_badge?: {
        name: string;
        xp: string;
        level: number;
        description: string;
        icon: string;
    },
    profile_background?: {
        "video/webm": string;
        "video/mp4": string;
        image: string; 
    },
    avatar_frame?: string;
}
```