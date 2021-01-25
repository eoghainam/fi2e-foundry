//import { fi2e } from "./module/config.js";
import FI2ENamedCharacterSheet from "./module/sheets/FI2ENamedCharacterSheet.js";

Hooks.once("init", function(){
    console.log("fi2e | initialising Fear Itself 2nd edition system");

    //CONFIG.fi2e = fi2e;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("fi2e", FI2ENamedCharacterSheet, {makeDefault: true});
});