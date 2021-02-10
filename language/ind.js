exports.wait = () => {
	return`*「 WAIT 」 PROCESSING*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*GRUB LEVEL IS NOT ACTIVATED YET*`
}

exports.noregis = () => {
	return`*「 NOT REGISTERED 」*\n\n*How to register ${prefix}register name|age* \n*Example ${prefix}register Vai|20*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED  」*\n\n*Your details are in the bot database*`
}

exports.stikga = () => {
	return`*yeah failed try to repeat in a while again*`
}

exports.linkga = () => {
	return`*sorry invalid link*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER ONLY」*`
}

exports.ownerg = () => {
	return`*「GROUP OWNER ONLY」*`
}

exports.admin = () => {
	return`*「GROUP ADMIN ONLY」*`
}

exports.badmin = () => {
	return`*「BOT MUST BE ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW NOT ACTIVE*`
}

exports.bug = () => {
	return`*Problems have been reported to the BOT owner, false reports will not be responded to*`
}

exports.wrongf = () => {
	return`*Incorrect format / blank text*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\nTo find out if you have registered, please check the message I sent \n\nNOTE:\n*if you haven't got the message. means you haven't saved your bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 USER DATA 」*\n\nyou have registered with the data \n\n┏━⊱name\n┗⊱${namaUser}\n┏━⊱number\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱age\n┗⊱${umurUser}\n┏━⊱registration time\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : This number is important:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* not found \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*sorry but $ {pushname} is not the owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *ABOUT USER* ❱ ⊰─══
╠☞ *Name* : ${pushname}
╠☞ *Number* : wa.me/${sender.split("@")[0]}
╠☞ *Your Credits* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Level* : ${getLevelingLevel(sender)}
╠☞ *User register* : ${_registered.length}
╰════─⊱  ⸨ *𝘾𝙃𝙄𝙆𝙆𝙐* ⸩  ⊰─════╯

            ✫𝐑𝐮𝐥𝐞𝐬✫
⫷⫷⫸⫷⫸⫷⫸⫷⫸⫷⫸⫷⫸⫷⫸
〇 *Spam : Auto Block!*
彡彡彡彡彡彡彡彡彡彡彡彡彡彡

╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker*
╠☞ *${prefix}toimg*
╠☞ *${prefix}map [place]*
║
╠══─⊱ ❰ *FUN MENU* ❱ ⊰─════➤
╠☞ *${prefix}mining*
╠☞ *${prefix}slap*
╠☞ *${prefix}speed*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}quotes*
╠☞ *${prefix}quotemaker*
╠☞ *${prefix}brainly*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}ytmp4*
╠☞ *${prefix}ocr*
╠☞ *${prefix}ssweb*
║
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}ATM*
║
╠══─⊱ ❰ *GROUP MENU* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}limit*
╠☞ *${prefix}level*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add*
╠☞ *${prefix}kick*
╠☞ *${prefix}setname*
╠☞ *${prefix}setdesc*
╠☞ *${prefix}demote*
╠☞ *${prefix}promote*
╠☞ *${prefix}listadmin*
╠☞ *${prefix}group* [open/close]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *IRA-BOT* ❱ ⊰─══➤
╠☞ *${prefix}donate* [1/0]
╠☞ *${prefix}info*
╠☞ *${prefix}owner*
║
╰════─⊱ ⸨ 𝘾𝙃𝙄𝙆𝙆𝙐 ⸩ ⊰─════╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`while
*「 GREETINGS 」*
┏⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Sorry ${pushname} today's limit is up*\n*The limit is reset every 24:00 hours*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
the rest of your limit : ${limitCounts}

NOTE : to get to the limit. can level up or buylimit`
}

exports.satukos = () => {
	return`*to get to the limit. can pass level up or buylimit`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Name* : ${pushname}\n┣⊱ *Number* : ${sender.split("@")[0]}\n┣⊱ *Credits* : ${uangkau}\n┗━━━━━━━━━━`
}
