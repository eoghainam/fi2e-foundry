export default class FI2EItemSheet extends ItemSheet {
    
    get template(){
        return `systems/fi2e-foundry/templates/sheets/${this.item.data.type}-sheet.hbs`; 
    }    
}