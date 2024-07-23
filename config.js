const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hunter254" 


global.devs = "2547907590136" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254790759013";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254xxxxxxxxx,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_24_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmNqSmNrRjdGMzBFeDFMQTJvNGk1VGRtcHJLSHErckh1cFg3bjRkQXlHTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRFlZeEpEQ25SWHFESDlPaDZ0a2hCZ1wiLFxuICBcInBob25lSWRcIjogXCJiNDA2ZjE1Yy02NTU3LTRhZDMtOGMwMy1mN2E5OGU0NGUwNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICA4OSxcbiAgICAgIDE1NSxcbiAgICAgIDY2LFxuICAgICAgMTAsXG4gICAgICA0NSxcbiAgICAgIDIxOCxcbiAgICAgIDEzNCxcbiAgICAgIDIsXG4gICAgICAyNDMsXG4gICAgICAxNSxcbiAgICAgIDIyNyxcbiAgICAgIDcsXG4gICAgICAxMjMsXG4gICAgICAzNCxcbiAgICAgIDE5MixcbiAgICAgIDc4LFxuICAgICAgMjYsXG4gICAgICA1MyxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAxMDYsXG4gICAgICAyMDEsXG4gICAgICA4NixcbiAgICAgIDEwMyxcbiAgICAgIDIzOSxcbiAgICAgIDQwLFxuICAgICAgNTYsXG4gICAgICAyMjgsXG4gICAgICAxOCxcbiAgICAgIDEzNSxcbiAgICAgIDE3MSxcbiAgICAgIDE3NCxcbiAgICAgIDE5LFxuICAgICAgNTksXG4gICAgICA4OSxcbiAgICAgIDI1MyxcbiAgICAgIDkzLFxuICAgICAgMTA5LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlRKR0RSWFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MDc1OTAxMzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGam0jguJnOrnTDqXJcIixcbiAgICBcImxpZFwiOiBcIjEyNTk2NzIzMDA1MDQ5ODo3MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObUZ2NjhDRU9UMDdyUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlhZEE5dmFmUEw0anVpSllIbWRoNXdaMW92MVVjZjd1ZzIwNjZ1TEJUQkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia1lrOXdPVXk2UGg5OUdiSnVOUEZKUkFEbFdPN0l5RnVHOUx0b2wxRThCNFRLb1Z1K0hyZVNSazlXT2JQUXZjbmpXMkhVN0FHbHhwNk9RckEyTnVGRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREdmeDdYK0E3TzRoQnhhMmYxZ09LTVBaTDI0eGxPUjJqd004OXlCbnhWTmNMMTF0TlZRdXo2a0M5UTN6dzdPSzdZQXUvNWo2cGg1WUpJbkNMdjM1amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzkwNzU5MDEzOjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0ODE4MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNWU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1ZTy5qc29uIjogIntcImtleURhdGFcIjpcInM5YTVTWlJjSEpxOEQ0M2RYd0dZTUJBai9ZenkzVlBHd1dVbEhCUjlrQnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM2NDY5OTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hunter254 』```", //*『sᴜʙsᴄʀɪʙᴇ • HUNTER254』*\n youtube.com/@Hunter_891"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hunter MD",
  ownername:process.env.OWNER_NAME|| "Hunter",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "HUNTER"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
