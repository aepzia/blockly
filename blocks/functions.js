Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("move_forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['baldin_bidea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("baldin")
        .appendField(new Blockly.FieldDropdown([["bidea dago aurrean","F"], ["bidea dago eskubian","R"], ["bidea dago ezkerrean","L"]]), "aukerak");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("orduan");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
