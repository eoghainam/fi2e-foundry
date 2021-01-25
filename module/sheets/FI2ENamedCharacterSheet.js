export default class FI2ENamedCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: "systems/fs2e-foundry/templates/sheets/FI2ENamedCharacterSheet.hbs",
            classes: ["fi2e", "sheet", "character"]
        });
    }
}