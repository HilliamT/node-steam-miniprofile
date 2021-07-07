import axios from "axios";

interface Miniprofile {
    level: number;
    level_class: string; // `friendPlayerLevel lvl_${Math.floor(level / 10)} ${level >= 100 ? "lvl_plus_0" : ""}` - Level class and badge positional offset for large numbers
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

/**
 * Fetch miniprofile data
 * @param accountid AccountID (steamid3) of the user to fetch for
 */
export async function getMiniprofile(accountid: string): Promise<Miniprofile> {
    return (await axios.get(`http://steamcommunity.com/miniprofile/${accountid}/json`, {
        headers: { "X-Requested-With": "XMLHttpRequest" }
    })).data;
}

/**
 * Fetch miniprofile data, using steamid64
 * @param steamid64 SteamID64 of the user to fetch for
 */
export function getMiniprofileByID64(steamid64: string): Promise<Miniprofile> {
    return getMiniprofile(new (require('steamid'))(steamid64).accountid);
}