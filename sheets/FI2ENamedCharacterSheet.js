export default class FI2ENamedCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: "systems/fi2e/templates/sheets/namedCharacter-sheet.hbs",
            classes: ["fi2e", "sheet", "namedCharacter"]
        });
    }
}