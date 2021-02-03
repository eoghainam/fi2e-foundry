export default class FI2EItemSheet extends ItemSheet {
    /* 
    get template(){
        return `system/fi2e/templates/sheets/${this.item.data.type}-sheet.html`; 
    }
    */
    
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: `systems/fi2e-foundry/templates/sheets/${this.item.data.type}-sheet.hbs`,
            classes: ["fi2e", "sheet", "item"]
        });
    }
    
}