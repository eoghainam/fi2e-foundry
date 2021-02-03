export default class FI2EItemSheet extends ItemSheet {
    
    get template(){
        return `systems/fi2e-foundry/templates/sheets/${this.item.data.type}-sheet.hbs`; 
    }
    
    /*
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: `systems/fi2e-foundry/templates/sheets/${this.item.data.types}-sheet.hbs`,
            classes: ["fi2e", "sheet", "item"]
        });
    }
    */
    
}