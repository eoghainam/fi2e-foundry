export default class FI2EItemSheet extends ItemSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: "systems/fi2e-foundry/templates/sheets/FI2EItemSheet.hbs",
            classes: ["fi2e", "sheet", "item"]
        });
    }
}