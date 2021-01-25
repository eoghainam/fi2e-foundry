export default class FI2ENamedCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: "systems/fi2e-foundry/templates/sheets/FI2ENamedCharacterSheet.hbs",
            classes: ["fi2e", "sheet", "namedCharacter"]
        });
    }
}