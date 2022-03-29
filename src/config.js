import { config } from "dotenv";

config();

export const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://David:esopavlin@minersdb.rbxpz.mongodb.net/MinerTasks?authSource=admin&replicaSet=atlas-atal4a-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";