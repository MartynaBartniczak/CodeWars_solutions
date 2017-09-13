function songDecoder(song){

    return song.split("WUB").join(" ").replace(/\s+/g,' ').trim()

}