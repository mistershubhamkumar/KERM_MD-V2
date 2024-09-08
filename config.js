//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV000dit0NEIzSTFlSE9CSmUvTnRmcXBvVEFSdGlkaS85TTdmY0Z4b05YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzd4OEtPMTY4b1d1c1BWMml2bE14TnNaa3lLenh3U2JNVldwSHBYdGkwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSDRaZXNud2N5NGw5MkpybmZhbVRaN09zazJFQzBONlgyanQ3STdkRlhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWUpJS1k5N01TYlVrNnFZRFVSTS9McVpESnZtejBITjNJT3plTWFlekhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QU2RBeUg4N3JtM2Q2OGNFNjZESlpsWURSN3c2U0VhSktWTEM1dkc4MTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJucW5wZ1dSeTNVYm5EK0pQQittK2FXNzVIRm9rcjRqS09jbm11cFd3VlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid055UnN3dWFEY3NkanBJdFp0L1BMakgzZzZJOEEwT1JEdzVJY1BZa25WUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianY1dzBSNTYvQjF6ZUEvS1FWLzRIbVJBaldoVXlNdjI3TVhtT0NUSUZVST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZWallqSWlHd2xNdSt3S3hVY044dU9VRkJGcFUzN0RqczVocEVUU1h3RHVKWDZ2eWo4aGdqUEk0L2x0aEYyNzdOTVc1UkdSRWFON0o5ZWR2MzlhS2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJ0U3BiZzh6anhFeGJES1BQdSsvN3ZyVzk1ejVLc0g5QWhtOFIwQXZ1eC9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSZFcwYVhaZlRuYUZRZnlTR2tFWXVBIiwicGhvbmVJZCI6IjBhZDEyNjFmLTU4ZDctNDk1MS1iZjg3LTZjYmEyNjAxZTIzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ZWFCaVdibWpZSWoyN3UrNUlUNmwvQWhreEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGNHaWJ0VGNKSDlMaG5uS21ZdFdQdzlQdi8wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFZQTU2MzU3IiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6OTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2as/Cdmqog8J2QkvCdmq7wnZCU8J2aqfCdmq7wnZqr8J2asyDwnZCK8J2QlPCdmrPwnZqr8J2aqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXlCNFBRREVLaWM5N1lHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVczQWJLOVhjNTV2UFYyL3VkdkRoMkwwWklJV3NFQktud0E4TEo4Sm4wUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQmFCeS9KdEtOWWFMa0F4emtHWWVsTHppNVlybTFWb0lVT2tUSUR3M1RMY0VLQ2cremVqcUFRRUdVOXNlRHBvcW9UNXhpMFpXVmNRaFNpMmN2ZGxEQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilp6eU1jbEVXdWlWWGxrNEdUMUswcGcyOEN0MWF0QUFXOHRHbDNmQk1kUEpIZmtaSHN6SXRVUmwxb2w4dkVrVkpBRmdoOGFKMEpEMnd5bUNLVlJVVWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjYwMjczODYzOjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFGdHdHeXZWM09lYnoxZHY3bmJ3NGRpOUdTQ0ZyQkFTcDhBUEN5ZkNaOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU4MTIyNzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS05EIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " ☞⌜MR_SHUBHAM⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜MR-SHUBHAM⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
